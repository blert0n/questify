import { Input } from "@/components/ui";
import { getColorBrightness, getColorShade, cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { LiveComponentProps } from "@/types";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const LiveShortComponent = ({
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
      key={`short-${id}`}
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
      <Input
        name={id}
        className={cn(
          "w-full py-2 px-0 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
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
