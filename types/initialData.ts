import { Theme, FormItem } from "./form";
import { FormType } from "@/lib/graphql";

export const initialFormData: Theme = {
  Header: {
    fontSize: "24",
    fontFamily: "Open Sans",
    text: "",
  },
  Question: {
    fontSize: "14",
    fontFamily: "Open Sans",
  },
  Text: {
    fontSize: "12",
    fontFamily: "Open Sans",
    text: "",
  },
  primaryColor: "#ffffff",
  secondaryColor: "#d9d9d9",
};

export const shortComponentInitialData: (lastOrder?: number) => FormItem = (
  lastOrder: number = 0
) => ({
  name: "",
  order: lastOrder,
  origin: "client",
  section: 0,
  type: FormType.Short,
});
