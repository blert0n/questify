import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponent } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import { Option } from "../ChoiceComponents/Option";
import { GripHorizontal } from "lucide-react";
import { Droppable } from "@hello-pangea/dnd";
import { Addon } from "../ChoiceComponents/Addon";
import { RichTextEditor } from "@/components/RichTextEditor";

export const Single = ({
  item,
  selected,
  theme,
  hovered,
  dragHandle,
}: FormComponent) => {
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
        <Droppable
          droppableId={`single-${item.id}`}
          type={`options-${item.id}`}
        >
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {(item.options ?? []).map((option, index) => (
                <Option
                  key={option.id}
                  id={option.id}
                  index={index}
                  value={option.value}
                  selected={selected}
                  type="single"
                  styling={{
                    fontFamily: theme.Text.fontFamily,
                    fontSize: theme.Text.fontSize,
                  }}
                  onChange={(value) => updateOption(item.id, option.id, value)}
                  onRemove={() => deleteOption(item.id, option.id)}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <Addon
        id="addon"
        index={item.options?.length ?? 0}
        value="Add option"
        addon
        selected={selected}
        type="single"
        styling={{
          fontFamily: "Open Sans",
          fontSize: "14",
        }}
        onClick={() => addOption(item.id)}
      />
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
