import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import { FormComponent, initialFormData } from "@/types";
import { Textarea } from "@/components/ui";
import { getColorBrightness, getColorShade, cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";

export const LiveLongComponent = ({
  item,
  theme = initialFormData,
}: FormComponent) => {
  const [inputFocus, setInputFocus] = useState(false);
  const focusedInputColor =
    getColorBrightness(theme.primaryColor) >= 80
      ? getColorShade(theme.primaryColor, 50)
      : theme.primaryColor;

  return (
    <div
      key={`long-${item.id}`}
      className={cn(
        "flex flex-col gap-3 w-full h-auto rounded-md p-6 bg-white"
      )}
    >
      {item.image?.dataUrl && (
        <div className="flex justify-center max-h-[300px] object-contain">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image?.dataUrl}
            className="object-contain rounded-md"
            alt="short component image"
          />
        </div>
      )}
      <div
        className={cn(
          fontMapper[theme.Question.fontFamily],
          fontSizeMapper(theme.Question.fontSize)
        )}
      >
        {ReactHtmlParser(item.name)}
      </div>
      <Textarea
        name={item.id}
        className={cn(
          "w-full py-2 px-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
          fontMapper[theme.Text.fontFamily],
          fontSizeMapper(theme.Text.fontSize)
        )}
        style={{
          borderBottom: `${inputFocus ? 2 : 0.5}px solid ${
            inputFocus ? focusedInputColor : theme.secondaryColor
          }`,
        }}
        placeholder="Type answer"
        onBlur={() => setInputFocus(false)}
        onFocus={() => setInputFocus(true)}
      />
    </div>
  );
};
