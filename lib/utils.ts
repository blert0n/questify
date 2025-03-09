import { FormItem } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { FormItemType_Enum, GetResponsesByIdQuery } from "./graphql";
import { DOMNode } from "html-react-parser";

type GridValue = string | string[] | undefined;

const GRID_ELEMENTS = [
  FormItemType_Enum.MultipleChoiceGrid,
  FormItemType_Enum.SingleChoiceGrid,
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const htmlToText = (html: string) => {
  return new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
};

export const pluralize = (count: number, noun: string, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const prepareFormik = (
  items: FormItem[],
  answers?: GetResponsesByIdQuery["Answer"]
) => {
  const fields = items.map((item) => ({
    name: item.id,
    initialValue:
      answers?.find((answer) => answer.FormItem?.id === item.id)?.value ?? "",
    type: item.required
      ? yup.string().required("This is a required field")
      : yup.string(),
  }));
  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.initialValue])
  );
  const SchemaObject = Object.fromEntries(
    fields.map((field) => [field.name, field.type])
  );
  const validationSchema = yup.object().shape(SchemaObject);
  return { initialValues, validationSchema };
};

export const replace = (node: DOMNode, index: number) => {
  if (node.type === "tag" && index === 0) {
    node.attribs.class = `${node.attribs?.class ?? ""} w-full`;
  }
};
const validateGridValue = (
  value: GridValue,
  type: FormItemType_Enum | null | undefined
) => {
  if (!value) return false;
  if (type === FormItemType_Enum.MultipleChoiceGrid)
    return Array.isArray(value) && value.length > 0;
  if (type === FormItemType_Enum.SingleChoiceGrid) return value.length > 0;
};

export const createYupSchema = (items: FormItem[]) => {
  const yupSchema = items.reduce(
    createFieldValidator,
    {} as Record<string, yup.StringSchema>
  );
  return yup.object().shape(yupSchema);
};

const createFieldValidator = (
  schema: Record<string, yup.StringSchema>,
  item: FormItem
): Record<string, yup.StringSchema> => {
  const { id, required, options = [], type } = item;

  let validator = yup.string();

  if (type && GRID_ELEMENTS.includes(type) && required) {
    const rowIds = options
      .filter((option) => option.grid === "row")
      .map((option) => option.id);

    validator = yup
      .string()
      .test(
        "require-every-row-selection",
        "Each row must have a selection",
        (value) => {
          try {
            const parsedValue = JSON.parse(value ?? "{}");

            return (
              parsedValue &&
              typeof parsedValue === "object" &&
              rowIds.every((rowId) => {
                const value: GridValue = parsedValue[rowId];
                return (
                  rowId in parsedValue && validateGridValue(value, item.type)
                );
              })
            );
          } catch {
            return false;
          }
        }
      );
  }
  if (type && !GRID_ELEMENTS.includes(type) && required) {
    validator = validator.required("Field is required");
  }

  schema[id] = validator;
  return schema;
};
