import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponent } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import { GripHorizontal, Star } from "lucide-react";
import { RichTextEditor } from "@/components/RichTextEditor";
import { Slider } from "@/components/ui/slider";

export const Rating = ({
  item,
  selected,
  theme,
  hovered,
  dragHandle,
}: FormComponent) => {
  const updateItem = useFormSelectors.use.updateItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  const deleteItem = useFormSelectors.use.deleteItem();
  const updateOption = useFormSelectors.use.updateOption();
  const selectedComponent = useFormSelectors.use.selectedComponent();

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
        <div className="flex justify-center max-h-[300px] object-contain p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image?.dataUrl}
            className="object-contain rounded-md"
            alt="short component image"
          />
        </div>
      )}
      <div className="flex justify-between items-start gap-6 pb-1 px-6">
        <RichTextEditor
          value={item.name}
          options={{
            className: cn(
              "w-5/6",
              fontSizeMapper(theme.Question.fontSize),
              fontMapper[theme.Question.fontFamily]
            ),
            showBottomBorder: selected,
          }}
          onChange={(html) => updateItem(item.id, "name", html)}
          name={`form-question-${item.id}`}
          placeholder="Question"
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
      <div
        className={cn(
          "flex flex-col gap-2",
          fontMapper[theme.Text.fontFamily],
          fontSizeMapper(theme.Text.fontSize)
        )}
      >
        <div className="w-1/2 px-6 my-2 flex flex-col gap-4">
          {selectedComponent === item.id && (
            <div className="flex flex-col gap-4">
              <span>Max rating: {item.options?.[0].value}</span>
              <Slider
                defaultValue={[Number.parseInt(item.options?.[0].value ?? "5")]}
                min={1}
                max={10}
                step={1}
                onValueChange={(value) => {
                  if (!item.options?.[0].id) return;
                  updateOption(item.id, item.options?.[0].id, String(value[0]));
                }}
                rangeStyle={{
                  backgroundColor: theme.primaryColor,
                }}
                thumbStyle={{
                  backgroundColor: theme.secondaryColor,
                  borderColor: theme.primaryColor,
                }}
                trackStyle={{
                  backgroundColor: theme.secondaryColor,
                }}
              />
            </div>
          )}
          {selectedComponent !== item.id && (
            <div className="flex md:items-center gap-4 md:flex-row flex-col items-start">
              <div className="flex xxs:gap-1 gap-[0.5px]">
                {Array(Number.parseInt(item.options?.[0].value ?? "5"))
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      strokeWidth={1}
                      stroke={theme.primaryColor}
                      className="hover:scale-110 hover:cursor-pointer md:size-8 xxs:size-6 size-5"
                    />
                  ))}
              </div>
              <div>
                {0}/{item.options?.[0].value ?? "5"}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="pb-4 pt-0 px-6">
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
