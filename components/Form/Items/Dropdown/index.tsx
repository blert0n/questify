import StyledInput from "@/components/StyledInput";
import { deserializeString } from "@/components/StyledInput/deserializer";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponent } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import { Option } from "../Single/Option";
import { GripHorizontal } from "lucide-react";

export const Dropdown = ({
  item,
  selected,
  theme,
  hovered,
  dragHandle,
}: FormComponent) => {
  const question = deserializeString(item.name);
  const updateItem = useFormSelectors.use.updateItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  const deleteItem = useFormSelectors.use.deleteItem();
  const addOption = useFormSelectors.use.addOption();
  const deleteOption = useFormSelectors.use.deleteOption();
  const updateOption = useFormSelectors.use.updateOption();

  return (
    <>
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
        <div className="flex justify-center max-h-[300px] object-contain p-4 px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image?.dataUrl}
            className="object-contain rounded-md"
            alt="short component image"
          />
        </div>
      )}
      <div className="flex justify-between items-start gap-6 pb-1 px-6">
        <StyledInput
          initialValue={question}
          className={cn(
            "w-5/6 py-0",
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
      <div className={cn("flex flex-col gap-2")}>
        {(item.options ?? []).map((option) => (
          <Option
            key={option.id}
            id={option.id}
            value={option.value}
            selected={selected}
            order={option.order}
            styling={{
              fontFamily: theme.Text.fontFamily,
              fontSize: theme.Text.fontSize,
            }}
            onChange={(value) => updateOption(item.id, option.id, value)}
            onRemove={() => deleteOption(item.id, option.id)}
          />
        ))}
        <Option
          id="addon"
          value="Add option"
          addon
          selected={selected}
          order={(item.options?.length ?? 0) + 1}
          styling={{
            fontFamily: "Open Sans",
            fontSize: "14",
          }}
          onClick={() => addOption(item.id)}
        />
      </div>
      <div className="pb-4 px-6 pt-0">
        <ItemActions
          item={item}
          selected={selected}
          onDuplicate={() => duplicateItem(item.id)}
          onDelete={() => deleteItem(item.id)}
        />
      </div>
    </>
  );
};
