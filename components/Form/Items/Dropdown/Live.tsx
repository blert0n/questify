import { AppSelect } from "@/components/controlled-inputs";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import ReactHtmlParser from "react-html-parser";

export const LiveDropdown = ({ item, theme = initialTheme }: FormComponent) => {
  const checkMarkColor = getPrimaryColor(theme.primaryColor);

  return (
    <div
      key={item.id}
      className={"flex flex-col gap-3 w-full h-auto rounded-md bg-white p-6"}
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
      <div className="flex flex-col justify-between items-start gap-3">
        <div
          className={cn(
            fontMapper[theme.Question.fontFamily],
            fontSizeMapper(theme.Question.fontSize)
          )}
        >
          {ReactHtmlParser(item.name)}
        </div>
        <div className="flex flex-col gap-2 xs:w-auto min-w-[200px] w-full">
          <AppSelect
            key={item.id}
            options={item.options?.map((option) => ({
              placeholder: (
                <div
                  className={cn(
                    fontMapper[theme.Text.fontFamily],
                    fontSizeMapper(theme.Text.fontSize)
                  )}
                >
                  {option.value}
                </div>
              ),
              value: option.value,
            }))}
            styles={{
              triggerFontSize: `${theme.Text.fontSize}px`,
              checkIconStyle: {
                color: checkMarkColor,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
