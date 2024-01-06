import escapeHtml from "escape-html";
import { Descendant, Text } from "slate";
import { CustomElement } from "./Elements";

export const serializeNode = (node: CustomElement | Descendant) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    if (node.italic) {
      string = `<em>${string}</em>`;
    }
    if (node.underline) {
      string = `<u>${string}</u>`;
    }
    return string;
  }

  const children: string = node.children.map((n) => serializeNode(n)).join("");

  switch (node.type) {
    case "paragraph":
      return `<p>${children}</p>`;
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return children;
  }
};

export const serialize = (nodes: CustomElement[] | Descendant[]) => {
  const html = nodes.map((n) => serializeNode(n)).join("");
  const regex = /<p>(<p>(.*?)<\/p>)<\/p>/g;
  return html.replace(regex, "$1");
};
