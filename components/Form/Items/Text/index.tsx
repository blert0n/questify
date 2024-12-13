import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponent } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import { GripHorizontal } from "lucide-react";
import { RichTextEditor } from "@/components/RichTextEditor";
import { TextIcon } from "@/assets/svg";

export const Text = ({
  item,
  selected,
  theme,
  dragHandle,
  hovered,
}: FormComponent) => {
  const updateItem = useFormSelectors.use.updateItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  const deleteItem = useFormSelectors.use.deleteItem();
  const selectedComponent = useFormSelectors.use.selectedComponent();

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
        {selectedComponent === item.id ? (
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
            placeholder="Content..."
          />
        ) : (
          <div className="flex gap-2 items-center text-gray-400 font-semibold">
            <TextIcon /> Text component
          </div>
        )}

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
      <ItemActions
        item={item}
        selected={selected}
        onDuplicate={() => duplicateItem(item.id)}
        onDelete={() => deleteItem(item.id)}
      />
    </div>
  );
};
