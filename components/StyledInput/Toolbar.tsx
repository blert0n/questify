import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { Button } from "../ui";
import { useSlate } from "slate-react";
import { isMarkActive, toggleMark } from "./util";

export const Toolbar = () => {
  const editor = useSlate();
  const isBoldActive = isMarkActive(editor, "bold");
  const isItalicActive = isMarkActive(editor, "italic");
  const isUnderlineActive = isMarkActive(editor, "underline");
  return (
    <div className="flex flex-row py-2 gap-3">
      <Button
        variant={isBoldActive ? "default" : "secondary"}
        size={"icon"}
        onClick={() => toggleMark(editor, "bold")}
      >
        <BoldIcon />
      </Button>
      <Button
        variant={isItalicActive ? "default" : "secondary"}
        size={"icon"}
        onClick={() => toggleMark(editor, "italic")}
      >
        <ItalicIcon />
      </Button>
      <Button
        variant={isUnderlineActive ? "default" : "secondary"}
        size={"icon"}
        onClick={() => toggleMark(editor, "underline")}
      >
        <UnderlineIcon />
      </Button>
    </div>
  );
};
