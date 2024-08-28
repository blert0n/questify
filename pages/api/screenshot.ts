// pages/api/takeScreenshot.js
import { chromium } from "@playwright/test";
import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import { createClient } from "@vercel/postgres";

const URL = process.env.NEXT_PUBLIC_FRONTEND_URL ?? "http://localhost:3000";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface Payload {
  formId?: string;
  fullpage?: boolean;
  backgroundColor?: string;
}

const uploadToCloudinary = (buffer: Buffer): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result?.secure_url);
      })
      .end(buffer);
  });
};

const takeScreenshot = async (
  url: string,
  fullpage: boolean,
  backgroundColor = "#ffffff"
): Promise<Buffer | null> => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(url);

    await page.waitForLoadState("networkidle");

    await page.waitForSelector("div#form");

    await page.waitForFunction(() => {
      const images = Array.from(document.querySelectorAll("img"));
      return images.every((img) => img.complete && img.naturalHeight > 0);
    });

    await page.addStyleTag({
      content: `
              html, body, div#__next, main {
                  height: auto !important;
                  width: auto !important;
                  background-color: ${backgroundColor};
              }
          `,
    });

    const screenshotBuffer = await page.screenshot({ fullPage: fullpage });
    await browser.close();
    return screenshotBuffer;
  } catch (error) {
    return null;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { formId, fullpage = false, backgroundColor }: Payload = req.body ?? {};

  const client = createClient();

  if (!client) {
    res.status(400).json({ error: "Db connection failed" });
    return;
  }

  if (!formId) {
    res.status(400).json({ error: "Form ID is required" });
    return;
  }

  const screenshotBuffer = await takeScreenshot(
    `${URL}/form/${formId}`,
    fullpage,
    backgroundColor
  );

  if (!screenshotBuffer) {
    res.status(400).json({ error: "Screenshot failed" });
    return;
  }

  const imageUrl = await uploadToCloudinary(screenshotBuffer);

  if (!imageUrl) {
    res.status(400).json({ error: "Screenshot upload failed" });
    return;
  }

  try {
    await client.connect();

    const query = `
      UPDATE "public"."Form"
      SET thumbnail = $1
      WHERE id = $2
      RETURNING id;
    `;

    const values = [imageUrl, formId];

    const result = await client.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Updating thumbnail failed" });
    }
    res
      .status(200)
      .json({ success: true, data: { formId: result.rows[0], imageUrl } });
  } catch (error) {
    console.error("Database update error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.end();
  }

  res.status(200).json({ imageUrl });
}
