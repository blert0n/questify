import StyledInput from "@/components/StyledInput";
import { deserializeString } from "@/components/StyledInput/deserializer";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponent } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import { Option } from "../ChoiceComponents/Option";
import { AppSelect } from "@/components/controlled-inputs";
import { GripHorizontal } from "lucide-react";

export const LinearScale = ({
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
  const updateOption = useFormSelectors.use.updateOption();
  const updateOptionLabel = useFormSelectors.use.updateOptionLabel();

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
        <div className="flex gap-2 items-center p-1 px-6">
          <AppSelect
            className="w-12"
            size={"sm"}
            options={[
              { placeholder: "0", value: "0" },
              { placeholder: "1", value: "1" },
            ]}
            value={item?.options?.[0].value ?? "1"}
            onChange={(value) => updateOption(item.id, "1", value)}
          />
          to
          <AppSelect
            className="w-12"
            size={"sm"}
            options={[
              { placeholder: "1", value: "1" },
              { placeholder: "2", value: "2" },
              { placeholder: "3", value: "3" },
              { placeholder: "4", value: "4" },
              { placeholder: "5", value: "5" },
              { placeholder: "6", value: "6" },
              { placeholder: "7", value: "7" },
              { placeholder: "8", value: "8" },
              { placeholder: "9", value: "9" },
              { placeholder: "10", value: "10" },
            ]}
            value={item?.options?.[1].value ?? "10"}
            onChange={(value) => updateOption(item.id, "2", value)}
          />
        </div>
        <Option
          id="1"
          index={1}
          value={item?.options?.[0].label ?? "Label"}
          selected={selected}
          order={Number(item?.options?.[0].value) ?? 1}
          styling={{
            fontFamily: theme.Text.fontFamily,
            fontSize: theme.Text.fontSize,
          }}
          onChange={(label) => updateOptionLabel(item.id, "1", label)}
          locked
          isDraggable={false}
        />
        <Option
          id="2"
          index={2}
          value={item?.options?.[1].label ?? "Label"}
          selected={selected}
          order={Number(item?.options?.[1].value) ?? 10}
          styling={{
            fontFamily: theme.Text.fontFamily,
            fontSize: theme.Text.fontSize,
          }}
          onChange={(label) => updateOptionLabel(item.id, "2", label)}
          locked
          isDraggable={false}
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
