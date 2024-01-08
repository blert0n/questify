import { Textarea, Input } from "@/components/ui";
import StyledInput from "@/components/StyledInput";
import { deserializeString } from "@/components/StyledInput/deserializer";
import { cn, getColorBrightness, getColorShade } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { FormComponentProps, LiveComponentProps } from "@/types";
import { ItemActions } from "../ItemActions";
import { Uploader } from "@/components/Image";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";

export const Long = ({ item, selected, editMode }: FormComponentProps) => {
  const question = deserializeString(item.name);
  const theme = useFormSelectors.use.theme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const updateItem = useFormSelectors.use.updateItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  const deleteItem = useFormSelectors.use.deleteItem();

  if (!editMode)
    return (
      <LiveLongComponent
        id={item.id}
        question={item.name}
        image={item.image?.dataUrl}
        styling={{
          primary: theme.primaryColor,
          secondary: theme.secondaryColor,
          QFont: theme.Question.fontFamily,
          Qsize: theme.Question.fontSize,
          Tfont: theme.Text.fontFamily,
          Tsize: theme.Text.fontSize,
        }}
      />
    );
  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full h-auto rounded-md p-4 bg-white",
        !selected && "cursor-pointer",
        selected && "border-l-[5px]  border-l-sky-600"
      )}
      onClick={() => {
        if (selected) return;
        updateForm("selectedComponent", item.id);
      }}
    >
      {item.image && (
        <div className="flex justify-center max-h-[300px] object-contain">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image?.dataUrl}
            className="object-contain rounded-md"
            alt="Long component image"
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
          "w-full p-2 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default border-b-[1px] border-slate-300 border-dashed",
          fontSizeMapper(theme.Text.fontSize),
          fontMapper[theme.Text.fontFamily]
        )}
        placeholder="Long answer text"
        disabled
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

const LiveLongComponent = ({
  id,
  question,
  image,
  styling,
}: LiveComponentProps) => {
  const [inputFocus, setInputFocus] = useState(false);
  const focusedInputColor =
    getColorBrightness(styling.primary) >= 80
      ? getColorShade(styling.primary, 50)
      : styling.primary;

  return (
    <div
      key={`long-${id}`}
      className={cn(
        "flex flex-col gap-3 w-full h-auto rounded-md p-6 bg-white"
      )}
    >
      {image && (
        <div className="flex justify-center max-h-[300px] object-contain">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            className="object-contain rounded-md"
            alt="short component image"
          />
        </div>
      )}
      <div
        className={cn(fontMapper[styling.QFont], fontSizeMapper(styling.Qsize))}
      >
        {ReactHtmlParser(question)}
      </div>
      <Textarea
        name={id}
        className={cn(
          "w-full py-2 px-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
          fontMapper[styling.Tfont],
          fontSizeMapper(styling.Tsize)
        )}
        style={{
          borderBottom: `${inputFocus ? 2 : 0.5}px solid ${
            inputFocus ? focusedInputColor : styling.secondary
          }`,
        }}
        placeholder="Type answer"
        onBlur={() => setInputFocus(false)}
        onFocus={() => setInputFocus(true)}
      />
    </div>
  );
};
