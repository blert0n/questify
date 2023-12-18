import {
  useState,
  useCallback,
  useEffect,
  useRef,
  HTMLAttributes,
} from "react";
import { createEditor } from "slate";
import { withReact, Slate, Editable } from "slate-react";
import { MarkType } from "./Elements";
import isHotkey from "is-hotkey";
import { serialize } from "./serializer";
import {
  toggleMark,
  HOTKEYS,
  initialValue,
  renderElementFn,
  renderLeafFn,
} from "./util";
import { useBoolean } from "usehooks-ts";
import { Toolbar } from "./Toolbar";
import { cn } from "@/lib";

interface P {
  className?: string;
  useToolbar?: boolean;
}

const StyledInput = ({ className, useToolbar = true }: P) => {
  const [editor] = useState(() => withReact(createEditor()));

  const {
    value: toolbar,
    setTrue: openToolbar,
    setFalse: closeToolbar,
  } = useBoolean(false);

  const renderElement = useCallback(renderElementFn, []);
  const renderLeaf = useCallback(renderLeafFn, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (
        event.target &&
        containerRef.current &&
        !containerRef.current.contains(targetNode)
      ) {
        closeToolbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, closeToolbar]);

  return (
    <div ref={containerRef} className={cn("p-2 w-[240px]", className)}>
      <Slate
        editor={editor}
        initialValue={initialValue}
        // onChange={(value) => console.log(serialize(value))}
      >
        <Editable
          className={cn(
            "p-2 transition-all duration-100 ease-in bg-white focus-visible:outline-none styledInput",
            toolbar && "border-b-2 border-slate-700",
            !toolbar && "border-b-2 border-slate-400 "
          )}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onFocus={() => openToolbar()}
          onKeyDown={(event) => {
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
        />
        {useToolbar && toolbar && <Toolbar />}
      </Slate>
    </div>
  );
};

export default StyledInput;
