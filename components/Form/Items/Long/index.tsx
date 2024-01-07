import { Input } from "@/components/ui";
import StyledInput from "@/components/StyledInput";
import { deserializeString } from "@/components/StyledInput/deserializer";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponentProps } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";

export const Long = ({ item, selected, editMode }: FormComponentProps) => {
  const question = deserializeString(item.name);
  const theme = useFormSelectors.use.theme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const updateItem = useFormSelectors.use.updateItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  const deleteItem = useFormSelectors.use.deleteItem();

  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full h-auto rounded-md p-4 bg-white shadow-md",
        editMode && !selected && "cursor-pointer",
        editMode && selected && "border-l-[5px]  border-l-sky-600"
      )}
      onClick={() => item.id && updateForm("selectedComponent", item.id)}
    >
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
          onChange={(html) => item.id && updateItem(item.id, "name", html)}
          noLineBreak
          showBottomBorder={selected}
        />
        {editMode && selected && (
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
          "w-full xxs:w-1/3 p-2 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default",
          fontSizeMapper(theme.Text.fontSize),
          fontMapper[theme.Text.fontFamily],
          !editMode && "border-b-[1px] border-slate-700",
          editMode && "border-b-[1px] border-slate-300 border-dashed"
        )}
        placeholder="Short answer text"
        disabled={editMode}
      />
      <ItemActions
        item={item}
        selected={selected}
        editMode={editMode}
        onDuplicate={() => duplicateItem(item.id)}
        onDelete={() => deleteItem(item.id)}
      />
    </div>
  );
};
