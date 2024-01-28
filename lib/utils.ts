import { FormItem } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { object, string } from "yup";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const htmlToText = (html: string) => {
  return new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
};

export const prepareFormik = (items: FormItem[]) => {
  const fields = items.map((item) => ({
    name: item.id,
    initialValue: "",
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
