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
    text: string;
    image?: Image;
  };
  Question: {
    fontFamily: FontFamily;
    fontSize: `${16 | 17 | 18 | 19 | 20 | 21 | 22}`;
  };
  Text: {
    fontFamily: FontFamily;
    fontSize: `${14 | 15 | 16 | 17 | 18}`;
    text: string;
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
  options?: SubItem[];
  image?: Image;
  type: FormType;
  origin: "server" | "client";
}

export interface SubItem {
  id: string;
  value: string;
  order: number;
}

export interface FormComponentProps {
  item: ItemSlice["items"][number];
  selected?: boolean;
  editMode?: boolean;
}

export interface LiveHeaderProps {
  header: string;
  description: string;
  styling: {
    primary: string;
    Hsize: Theme["Header"]["fontSize"];
    HFont: Theme["Header"]["fontFamily"];
    Tsize: Theme["Text"]["fontSize"];
    Tfont: Theme["Text"]["fontFamily"];
  };
}

export interface LiveComponentProps {
  id: string;
  question: string;
  image?: string;
  styling: {
    primary: string;
    secondary: string;
    Qsize: Theme["Question"]["fontSize"];
    QFont: Theme["Question"]["fontFamily"];
    Tsize: Theme["Text"]["fontSize"];
    Tfont: Theme["Text"]["fontFamily"];
  };
}
