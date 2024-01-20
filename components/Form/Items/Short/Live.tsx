import { Input } from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const LiveShortComponent = ({
  item,
  theme = initialTheme,
}: FormComponent) => {
  const [inputFocus, setInputFocus] = useState(false);
  const focusedInputColor = getPrimaryColor(theme.primaryColor);

  return (
    <div
      key={`short-${item.id}`}
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
      <Input
        name={item.id}
        className={cn(
          "w-full py-2 px-0 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
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
