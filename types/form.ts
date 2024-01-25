import { fontMapper } from "./../lib/fonts";
import { FormType } from "@/lib/graphql";
import { ItemSlice } from "./store";
import { DraggableProvidedDragHandleProps } from "@hello-pangea/dnd";
export type FontFamily = keyof typeof fontMapper;

export interface InitialFormData {
  items: FormItem[];
  name: string;
  loading: boolean;
  isFavorite: boolean;
  editMode: boolean;
  selectedComponent: string;
}

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
  label?: string;
}

export interface FormComponent {
  item: ItemSlice["items"][number];
  selected?: boolean;
  theme: Theme;
  dragHandle?: DraggableProvidedDragHandleProps | null;
  hovered?: boolean;
}

export interface TextStyling {
  fontSize: Theme["Text"]["fontSize"];
  fontFamily: Theme["Text"]["fontFamily"];
}
export interface QuestionStyling {
  fontSize: Theme["Question"]["fontSize"];
  fontFamily: Theme["Question"]["fontFamily"];
}
export interface HeaderStyling {
  fontSize: Theme["Header"]["fontSize"];
  fontFamily: Theme["Header"]["fontFamily"];
}
