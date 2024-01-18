import { FormItem } from "@/types";
import { FormItemCreateNestedManyWithoutFormInput } from "./graphql";

export const prepareCreateItems = (
  items: FormItem[]
): FormItemCreateNestedManyWithoutFormInput["create"] =>
  items.map((item) => ({
    name: item.name,
    order: item.order,
    image: item.image,
    required: item.required,
    items: item.options,
    type: item.type,
  }));
