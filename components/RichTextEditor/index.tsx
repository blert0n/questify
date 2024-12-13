import React, { useMemo } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { Toolbar as ToolbarPlugin, OnChangePlugin } from "./plugins/";
import { EditorThemeClasses } from "lexical";
import { css } from "@emotion/css";
import { useBoolean } from "usehooks-ts";
import { cn } from "@/lib";

interface Options {
  className?: string;
  contentEditableClassName?: string;
  placeholderClassName?: string;
  showBottomBorder?: boolean;
}

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name: string;
  options?: Options;
}

const theme: EditorThemeClasses = {
  text: {
    bold: css({ fontWeight: "bold" }),
    italic: css({ fontStyle: "italic" }),
    underline: css({ textDecoration: "underline" }),
    strikethrough: css({ textDecoration: "line-through" }),
    underlineStrikethrough: css({ textDecoration: "underline line-through" }),
    code: css({
      color: "black",
      padding: 2,
      background: "#ccc",
      border: "1px solid #ccc",
      borderRadius: "2px",
    }),
  },
};

export const RichTextEditor: React.FC<RichTextEditorProps> = React.memo(
  function RichTextEditor({ value, onChange, placeholder, name, options }) {
    const initialConfig = useMemo(
      () => ({
        namespace: name,
        theme,
        onError: () => {},
        nodes: [HeadingNode, CodeHighlightNode, CodeNode],
      }),
      [name]
    );

    const { value: focus, toggle: toggleFocus } = useBoolean(false);
    return (
      <LexicalComposer initialConfig={initialConfig}>
        <div className={cn("relative", options?.className)}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className={cn(
                  "p-1 pl-0 h-auto outline-none transition-all duration-150 ease-in-out",
                  focus && "border-b-2 border-slate-700",
                  options?.showBottomBorder &&
                    !focus &&
                    "border-b-[0.5px] border-slate-300",
                  options?.contentEditableClassName
                )}
              />
            }
            placeholder={
              <div
                className={cn(
                  "absolute top-[2px] text-gray-400 placeholder-gray-400",
                  options?.placeholderClassName
                )}
              >
                {placeholder}
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <ToolbarPlugin
            isEditorFocused={Boolean(focus && options?.showBottomBorder)}
            toggleFocus={toggleFocus}
          />
        </div>
        <HistoryPlugin />
        <OnChangePlugin value={value} onChange={onChange} />
      </LexicalComposer>
    );
  }
);
