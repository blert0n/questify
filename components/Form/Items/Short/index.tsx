import { Input } from "@/components/ui";
import StyledInput from "@/components/StyledInput";
import { deserializeString } from "@/components/StyledInput/deserializer";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponent } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import { GripHorizontal } from "lucide-react";

export const Short = ({
  item,
  selected,
  theme,
  dragHandle,
  hovered,
}: FormComponent) => {
  const question = deserializeString(item.name);
  const updateItem = useFormSelectors.use.updateItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  const deleteItem = useFormSelectors.use.deleteItem();

  return (
    <div className="px-6 pb-4">
      <div className="flex justify-center" {...dragHandle}>
        <GripHorizontal
          className={cn(
            "text-slate-700 hover:scale-110",
            hovered && "opacity-100",
            !hovered && "opacity-0"
          )}
          strokeWidth={1.5}
        />
      </div>
      {item.image && (
        <div className="flex justify-center max-h-[300px] object-contain">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image?.dataUrl}
            className="object-contain rounded-md"
            alt="short component image"
          />
        </div>
      )}
      <div className="flex justify-between items-start gap-6">
        <StyledInput
          initialValue={question}
          className={cn(
            "w-5/6",
            fontSizeMapper(theme.Question.fontSize),
            fontMapper[theme.Question.fontFamily]
          )}
          onChange={(html) => updateItem(item.id, "name", html)}
          noLineBreak
          showBottomBorder={selected}
        />
        {selected && (
          <div className="flex w-1/6 justify-end">
            <Uploader
              key={item.id}
              image={item.image}
              noCrop
              showIconsOnly
              onSaveFn={(image) => updateItem(item.id, "image", image)}
              onRemoveFn={() => updateItem(item.id, "image", undefined)}
            />
          </div>
        )}
      </div>
      <Input
        className={cn(
          "w-full p-2 pl-0 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default border-b-[1px] border-slate-300 border-dashed",
          fontSizeMapper(theme.Text.fontSize),
          fontMapper[theme.Text.fontFamily]
        )}
        placeholder="Short answer text"
        disabled
      />
      <ItemActions
        item={item}
        selected={selected}
        onDuplicate={() => duplicateItem(item.id)}
        onDelete={() => deleteItem(item.id)}
      />
    </div>
  );
};
