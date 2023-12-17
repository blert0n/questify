import { Descendant, BaseEditor, BaseRange, Range, Element } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

export type ElementType = "link" | "paragraph";

export type LinkElement = {
  type: "link";
  url: string;
  align?: string;
  children: Descendant[];
};

export type ParagraphElement = {
  type: "paragraph";
  align?: string;
  children: Descendant[];
};

export type CustomElement = LinkElement | ParagraphElement;

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  text: string;
};

export type EmptyText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
  text: string;
};

export type MarkType = Omit<CustomText | EmptyText, "text">;

export type CustomEditor = BaseEditor &
  ReactEditor &
  HistoryEditor & {
    nodeToDecorations?: Map<Element, Range[]>;
  };

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText | EmptyText;
    Range: BaseRange & {
      [key: string]: unknown;
    };
  }
}
