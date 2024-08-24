import { Descendant, Editor } from "slate";
import { RenderElementProps, RenderLeafProps } from "slate-react";
import {
  CustomEditor,
  LinkElement as LinkElementType,
  MarkType,
} from "./Elements";

const LinkElement = (props: RenderElementProps) => {
  const element = props.element as LinkElementType;
  return (
    <a href={element.url} {...props.attributes}>
      {props.children}
    </a>
  );
};

const DefaultElement = (props: RenderElementProps) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export const renderLeafFn = ({
  attributes,
  children,
  leaf,
}: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export const renderElementFn = (props: RenderElementProps) => {
  switch (props.element.type) {
    case "link":
      return <LinkElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};
export const isMarkActive = (editor: CustomEditor, format: keyof MarkType) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: CustomEditor, format: keyof MarkType) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
};

export const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: " " }],
  },
];
