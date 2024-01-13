import StyledInput from "@/components/StyledInput";
import { deserializeString } from "@/components/StyledInput/deserializer";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponent } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import { Button } from "@/components/ui";
import { CalendarIcon } from "lucide-react";

export const Date = ({ item, selected, theme }: FormComponent) => {
  const question = deserializeString(item.name);
  const updateForm = useFormSelectors.use.updateFormDetails();
  const updateItem = useFormSelectors.use.updateItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  const deleteItem = useFormSelectors.use.deleteItem();

  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full h-auto rounded-md bg-white",
        !selected && "cursor-pointer",
        selected && "border-l-[5px]  border-l-sky-600"
      )}
      style={{
        borderLeft: selected
          ? `5px solid ${getPrimaryColor(theme.primaryColor)}`
          : "none",
      }}
      onClick={() => {
        if (selected) return;
        updateForm("selectedComponent", item.id);
      }}
    >
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
      <div className="flex justify-between items-start gap-6 pb-1 pt-4 px-6">
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
      <div
        className={cn(
          "flex flex-col gap-2 px-6",
          fontMapper[theme.Text.fontFamily],
          fontSizeMapper(theme.Text.fontSize)
        )}
      >
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {<span>Pick a date</span>}
        </Button>
      </div>
      <div className="pb-4 px-6 pt-0">
        <ItemActions
          item={item}
          selected={selected}
          onDuplicate={() => duplicateItem(item.id)}
          onDelete={() => deleteItem(item.id)}
        />
      </div>
    </div>
  );
};
