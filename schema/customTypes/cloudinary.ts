import { extendType, nonNull, stringArg } from "nexus";
import { Context } from "../context";
import { v2 as cloudinary } from "cloudinary";
import { UploadResponse } from "./interface";
import { Theme } from "@/types/";

export const UploadItemImage = extendType({
  type: "Mutation",
  definition(t) {
    t.field("uploadItemImage", {
      type: UploadResponse,
      args: {
        formId: nonNull(stringArg()),
        itemId: nonNull(stringArg()),
        base64: nonNull(stringArg()),
      },
      resolve: async (_, { formId, itemId, base64 }, context: Context) => {
        cloudinary.config({
          cloud_name: process.env.CLOUDINARY_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        try {
          const result = await cloudinary.uploader.upload(base64, {
            public_id: "",
            folder: formId,
          });
          await context.prisma.formItem.update({
            where: { id: itemId },
            data: {
              image: {
                name: `item-${itemId}`,
                initialDataUrl: "",
                dataUrl: result.url,
                origin: "server",
                type: "",
              },
            },
          });
          return {
            success: true,
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          return {
            success: false,
            message: e.message,
          };
        }
      },
    });
  },
});
export const uploadHeaderImage = extendType({
  type: "Mutation",
  definition(t) {
    t.field("uploaderHeaderImage", {
      type: UploadResponse,
      args: {
        formId: nonNull(stringArg()),
        base64: nonNull(stringArg()),
      },
      resolve: async (_, { formId, base64 }, context: Context) => {
        cloudinary.config({
          cloud_name: process.env.CLOUDINARY_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        try {
          const formStyle = await context.prisma.form.findFirst({
            where: { id: formId },
            select: {
              style: true,
            },
          });
          if (!formStyle?.style || typeof formStyle?.style !== "object") {
            return {
              success: false,
              message: "Form doesn't have an existing style",
            };
          }
          const formTheme = formStyle?.style as unknown as Theme;

          const result = await cloudinary.uploader.upload(base64, {
            public_id: "",
            folder: formId,
          });

          const updatedTheme = {
            ...formTheme,
            Header: {
              ...formTheme.Header,
              image: {
                name: `form-header-${formId}`,
                initialDataUrl: "",
                dataUrl: result.url,
                origin: "server",
                type: "",
              },
            },
          };
          await context.prisma.form.update({
            where: { id: formId },
            data: {
              style: updatedTheme,
            },
          });
          return {
            success: true,
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          return {
            success: false,
            message: e.message,
          };
        }
      },
    });
  },
});
