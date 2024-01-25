import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { Theme } from "@/types";
import ReactHtmlParser from "react-html-parser";

interface P {
  theme: Theme;
}

export const LiveHeader = ({ theme }: P) => {
  return (
    <div
      className="flex flex-col gap-4 w-full h-auto rounded-md p-6 border-t-[10px] bg-white"
      style={{
        borderColor: getPrimaryColor(theme.primaryColor),
      }}
    >
      <div
        className={cn(
          fontMapper[theme.Header.fontFamily],
          fontSizeMapper(theme.Header.fontSize)
        )}
      >
        {ReactHtmlParser(theme.Header.text)}
      </div>
      <div
        className={cn(
          fontMapper[theme.Text.fontFamily],
          fontSizeMapper(theme.Text.fontSize)
        )}
      >
        {ReactHtmlParser(theme.Text.text)}
      </div>
    </div>
  );
};
