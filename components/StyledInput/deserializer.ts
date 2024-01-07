import { jsx } from "slate-hyperscript";
import { CustomText } from "./Elements";
import { Descendant } from "slate";
import { initialValue } from "./util";

export const deserializeString = (html: string) => {
  if (!html) return initialValue;
  const editorState = deserialize(
    new DOMParser().parseFromString(html, "text/html").body
  );
  return Array.isArray(editorState) ? editorState : [editorState];
};
export const deserialize = (
  el: HTMLElement,
  markAttributes = {}
): Descendant | Descendant[] => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx("text", markAttributes, el.textContent);
  } else if (el.nodeType !== Node.ELEMENT_NODE) {
    return [];
  }

  const nodeAttributes: Omit<CustomText, "text"> = { ...markAttributes };

  switch (el.nodeName) {
    case "STRONG":
      nodeAttributes.bold = true;
      break;
    case "EM":
      nodeAttributes.italic = true;
      break;
    case "U":
      nodeAttributes.underline = true;
      break;
  }

  const children = Array.from(el.childNodes)
    .map((node) => deserialize(node as HTMLElement, nodeAttributes))
    .flat();

  if (children.length === 0) {
    children.push(jsx("text", nodeAttributes, ""));
  }

  switch (el.nodeName) {
    case "BODY":
      return jsx("element", { type: "paragraph" }, children);
    case "P":
      return jsx("element", { type: "paragraph" }, children);
    case "A":
      return jsx(
        "element",
        { type: "link", url: el.getAttribute("href") },
        children
      );
    default:
      return children;
  }
};
