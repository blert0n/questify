import { useState, useCallback, useEffect, useRef, CSSProperties } from "react";
import { Descendant, createEditor } from "slate";
import { withReact, Slate, Editable } from "slate-react";
import { MarkType } from "./Elements";
import isHotkey from "is-hotkey";
import {
  toggleMark,
  HOTKEYS,
  initialValue as INITIAL_VALUE,
  renderElementFn,
  renderLeafFn,
} from "./util";
import { useBoolean } from "usehooks-ts";
import { Toolbar } from "./Toolbar";
import { cn } from "@/lib";
import { serialize } from "./serializer";

interface P {
  initialValue?: Descendant[];
  placeholder?: string;
  className?: string;
  useToolbar?: boolean;
  style?: CSSProperties;
  noLineBreak?: boolean;
  showBottomBorder?: boolean;
  onChange?: (html: string) => void;
}

const StyledInput = ({
  initialValue,
  placeholder = "",
  className,
  useToolbar = true,
  style,
  noLineBreak,
  showBottomBorder,
  onChange,
}: P) => {
  const [editor] = useState(() => withReact(createEditor()));

  const {
    value: toolbar,
    setTrue: openToolbar,
    setFalse: closeToolbar,
  } = useBoolean(false);

  const renderElement = useCallback(renderElementFn, []);
  const renderLeaf = useCallback(renderLeafFn, []);

  return (
    <div className={cn("w-[240px]", className)} style={style}>
      <Slate
        editor={editor}
        initialValue={initialValue ?? INITIAL_VALUE}
        onChange={(value) => onChange?.(serialize(value))}
      >
        <Editable
          className={cn(
            "p-2 transition-all duration-100 ease-in bg-white focus-visible:outline-none styledInput",
            toolbar && "border-b-2 border-slate-700",
            showBottomBorder && !toolbar && "border-b-[0.5px] border-slate-300"
          )}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onFocus={() => openToolbar()}
          onKeyDown={(event) => {
            if (event.key === "Enter" && noLineBreak) event.preventDefault();
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[
                  hotkey as keyof typeof HOTKEYS
                ] as keyof MarkType;
                useToolbar && toggleMark(editor, mark);
              }
            }
          }}
          onBlur={() => closeToolbar()}
          placeholder={placeholder}
        />
        {useToolbar && toolbar && <Toolbar />}
      </Slate>
    </div>
  );
};

export default StyledInput;
