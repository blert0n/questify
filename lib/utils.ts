import { FormItem } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { object, string } from "yup";
import { GetResponsesByIdQuery } from "./graphql";
import { DOMNode } from "html-react-parser";

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
      ? string().required("This is a required field")
      : string(),
  }));
  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.initialValue])
  );
  const SchemaObject = Object.fromEntries(
    fields.map((field) => [field.name, field.type])
  );
  const validationSchema = object().shape(SchemaObject);
  return { initialValues, validationSchema };
};

export const replace = (node: DOMNode, index: number) => {
  if (node.type === "tag" && index === 0) {
    node.attribs.class = `${node.attribs?.class ?? ""} w-full`;
  }
};
