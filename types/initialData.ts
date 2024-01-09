import { Theme, FormItem, SubItem } from "./form";
import { FormType } from "@/lib/graphql";
import { v4 as uuidv4 } from "uuid";

export const iconProps = {
  size: 20,
  className: "text-slate-700 hover:scale-110 cursor-pointer",
  strokeWidth: 1.5,
};

export const initialFormData: Theme = {
  Header: {
    fontSize: "24",
    fontFamily: "Open Sans",
    text: "Untitled form",
  },
  Question: {
    fontSize: "16",
    fontFamily: "Open Sans",
  },
  Text: {
    fontSize: "14",
    fontFamily: "Open Sans",
    text: "Description",
  },
  primaryColor: "#ffffff",
  secondaryColor: "#d9d9d9",
};

export const newInputItem: (type: FormType, lastOrder?: number) => FormItem = (
  type,
  lastOrder = 0
) => ({
  id: uuidv4(),
  name: "Question",
  order: lastOrder + 1,
  origin: "client",
  section: 0,
  type,
  required: false,
});
export const newSubItem: (lastOrder?: number) => SubItem = (lastOrder = 0) => ({
  id: uuidv4(),
  value: `Option ${lastOrder + 1}`,
  order: lastOrder + 1,
});
