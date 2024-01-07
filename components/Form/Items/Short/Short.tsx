import { Input } from "@/components/ui";
import StyledInput from "@/components/StyledInput";
import { deserializeString } from "@/components/StyledInput/deserializer";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponentProps } from "@/types";
import { Image as ImageIcon } from "lucide-react";
import { ItemActions } from "../ItemActions";

export const Short = ({ item, selected, editMode }: FormComponentProps) => {
  const question = deserializeString(item.name);
  const theme = useFormSelectors.use.theme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const updateItem = useFormSelectors.use.updateItem();

  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full h-auto rounded-md p-4 bg-white shadow-md",
        editMode && !selected && "cursor-pointer",
        editMode && selected && "border-l-[5px]  border-l-sky-600"
      )}
      onClick={() => item.id && updateForm("selectedComponent", item.id)}
    >
      <div className="flex justify-between items-start gap-6">
        <StyledInput
          initialValue={question}
          className={cn(
            "w-5/6",
            fontSizeMapper(theme.Question.fontSize),
            fontMapper[theme.Question.fontFamily]
          )}
          onChange={(html) => item.id && updateItem(item.id, "name", html)}
          noLineBreak
          showBottomBorder={selected}
        />
        {editMode && selected && (
          <div className="flex w-1/6 justify-end">
            <ImageIcon
              size={20}
              className=" text-slate-700 hover:scale-110 cursor-pointer"
              strokeWidth={1.5}
            />
          </div>
        )}
      </div>
      <Input
        className={cn(
          "w-full xxs:w-1/3 p-2 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default",
          fontSizeMapper(theme.Text.fontSize),
          fontMapper[theme.Text.fontFamily],
          !editMode && "border-b-[1px] border-slate-700",
          editMode && "border-b-[1px] border-slate-300 border-dashed"
        )}
        placeholder="Short answer text"
        disabled={editMode}
      />
      <ItemActions item={item} selected={selected} editMode={editMode} />
    </div>
  );
};
