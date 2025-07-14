/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data?: any;
  error?: string;
};

const SYS_PROMPT =
  "You are an assistant that generates JSON arrays of form items for a form builder. Each item must follow these strict rules:\r\n\r\n### Enum:\r\nUse only these exact `type` values (case-sensitive):\r\nFormItemType_Enum = {\r\n  Date = 'DATE',\r\n  Dropdown = 'DROPDOWN',\r\n  LinearScale = 'LINEAR_SCALE',\r\n  Long = 'LONG',\r\n  MultipleChoice = 'MULTIPLE_CHOICE',\r\n  MultipleChoiceGrid = 'MULTIPLE_CHOICE_GRID',\r\n  PhoneNumber = 'PHONE_NUMBER',\r\n  Rating = 'RATING',\r\n  Short = 'SHORT',\r\n  SingleChoice = 'SINGLE_CHOICE',\r\n  SingleChoiceGrid = 'SINGLE_CHOICE_GRID',\r\n  Text = 'TEXT'\r\n}\r\n\r\n\u26A0\uFE0F Do NOT use the type: 'SECTION' or 'TEXT'.\r\n\r\n### General Rules:\r\n- Return a plain JSON array only (no markdown, escaping, or comments).\r\n- Each form item must include:\r\n  - `id`: UUIDv4 string\r\n  - `type`: must be one of the above Enum values\r\n  - `order`: integer starting at 1\r\n  - `origin`: always \"client\"\r\n  - `name`: string in valid HTML:\r\n    `<p dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Your label here</span></p>`\r\n  - `section`: always 0\r\n  - `required`: true or false\r\n  - `options`: must follow rules below\r\n\r\n### Options by Type:\r\nEach option inside the `options` array **MUST** include a UUIDv4 string as `id` along with other required fields.\r\n\r\nFollow this exact structure:\r\n\r\n- LINEAR_SCALE:\r\n  - Exactly 2 options, each with:\r\n    - `id`: UUIDv4 string\r\n    - `value`: stringified number (minimum is \"1\" and maximum \"10\")\r\n    - `order`: number (1 or 2)\r\n    - `label`: string\r\n\r\n- RATING:\r\n  - Exactly 1 option, with:\r\n    - `id`: UUIDv4 string\r\n    - `value`: stringified number like \"5\" (maximum \"10\")\r\n    - `order`: 1\r\n\r\n- SINGLE_CHOICE, MULTIPLE_CHOICE, DROPDOWN:\r\n  - At least 2 options, each with:\r\n    - `id`: UUIDv4 string\r\n    - `value`: any string\r\n    - `order`: number\r\n\r\n- SINGLE_CHOICE_GRID, MULTIPLE_CHOICE_GRID:\r\n  - At least 1 row and 1 column, each option with:\r\n    - `id`: UUIDv4 string\r\n    - `value`: any string\r\n    - `order`: number\r\n    - `grid`: either \"row\" or \"column\"\r\n\r\n- SHORT, LONG, PHONE_NUMBER, DATE, TEXT \u2192 `options: []`\r\n\r\n### Output:\r\nReturn a clean JSON array of form items only.\r\nNo markdown, no escaping, no explanations.\r\n\r\nMake sure:\r\n- All values are strings where expected (e.g. labels)\r\n- Only LINEAR_SCALE and RATING use stringified numbers as `value` in their options\r\n- All `id`s (both form items and options) are UUIDv4 strings\r\n- The `origin` is always \"client\"\r\n- The `type` never equals \"SECTION\"";

const conversations: Record<string, { role: string; content: string }[]> = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { conversation, prompt, currentState } = req.body;

    if (!conversation || !prompt) {
      return res
        .status(400)
        .json({ message: "Missing conversation or prompt" });
    }

    if (!conversations[conversation]) {
      conversations[conversation] = [
        { role: "system", content: SYS_PROMPT },
        {
          role: "user",
          content: `Here is the current form:\n\`\`\`json\n${JSON.stringify(
            currentState,
            null,
            2
          )}\n\`\`\``,
        },
      ];
    }

    conversations[conversation].push({ role: "user", content: prompt });

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: conversations[conversation],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        message: "Failed to fetch from OpenRouter API",
        error: errorText,
      });
    }

    const data = await response.json();

    const rawContent = data.choices?.[0]?.message?.content || "";

    conversations[conversation].push({
      role: "assistant",
      content: rawContent,
    });

    const jsonMatch = rawContent.match(/```json\s*([\s\S]*?)\s*```/);
    if (!jsonMatch) {
      return res
        .status(500)
        .json({ message: "Failed to parse JSON from AI response." });
    }

    let formItems;
    try {
      formItems = JSON.parse(jsonMatch[1]);
    } catch {
      return res
        .status(500)
        .json({ message: "Invalid JSON format from AI response." });
    }

    return res.status(200).json({ message: "Success", data: formItems });
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({ message: "Internal server error" });
  }
}
