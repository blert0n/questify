import { fontMapper } from "./../lib/fonts";
import { FormType } from "@/lib/graphql";
import { ItemSlice } from "./store";
export type FontFamily = keyof typeof fontMapper;

interface Image {
  name: string;
  type: string;
  initialDataUrl: string;
  dataUrl: string;
  origin: "client" | "server";
}

export interface Theme {
  Header: {
    fontFamily: FontFamily;
    fontSize: `${18 | 19 | 20 | 21 | 22 | 23 | 24}`;
    text?: string;
    image?: Image;
  };
  Question: {
    fontFamily: FontFamily;
    fontSize: `${12 | 13 | 14 | 15 | 16 | 17 | 18}`;
  };
  Text: {
    fontFamily: FontFamily;
    fontSize: `${12 | 13 | 14 | 15}`;
    text?: string;
  };
  primaryColor: string;
  secondaryColor: string;
}

export interface FormItem {
  id: string;
  formId?: string;
  name: string;
  order: number;
  section?: number;
  required: boolean;
  image?: Image;
  type: FormType;
  origin: "server" | "client";
}

export interface FormComponentProps {
  item: ItemSlice["items"][number];
  selected?: boolean;
  editMode?: boolean;
}
