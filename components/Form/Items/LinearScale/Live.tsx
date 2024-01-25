import { RadioGroup, RadioGroupItem } from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import ReactHtmlParser from "react-html-parser";

const generateScaleOptions = (start: string = "1", end: string = "10") => {
  const startNumber = Number(start);
  const endNumber = Number(end);

  return Array.from(
    { length: endNumber - startNumber + 1 },
    (_, index) => startNumber + index
  );
};

export const LiveLinearScale = ({
  item,
  theme = initialTheme,
}: FormComponent) => {
  const checkBoxColor = getPrimaryColor(theme.primaryColor);
  return (
    <div
      key={item.id}
      className={
        "flex flex-col gap-3 w-full min-h-[120px] rounded-md bg-white p-6 overflow-hidden"
      }
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
      <div className="flex flex-col justify-between items-start gap-6">
        <div
          className={cn(
            "flex gap-[2px]",
            fontMapper[theme.Question.fontFamily],
            fontSizeMapper(theme.Question.fontSize)
          )}
        >
          {ReactHtmlParser(item.name)}
          {item.required && <span className="text-red-600">*</span>}
        </div>
        <div className="flex flex-col gap-2 min-w-[200px] w-full px-1">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex flex-col items-center gap-2",
                fontMapper[theme.Text.fontFamily],
                fontSizeMapper(theme.Text.fontSize)
              )}
            >
              {item.options?.[0].label}
            </div>
            <RadioGroup className="flex flex-row flex-wrap gap-4">
              {generateScaleOptions(
                item.options?.[0].value,
                item.options?.[1].value
              ).map((option) => (
                <div
                  key={option}
                  className="flex flex-col gap-2 justify-center items-center"
                >
                  <RadioGroupItem
                    value={String(option)}
                    style={{
                      color: checkBoxColor,
                      borderColor: checkBoxColor,
                      border: "1px solid",
                    }}
                  />
                  {option}
                </div>
              ))}
            </RadioGroup>
            <div
              className={cn(
                "flex flex-col items-center gap-2",
                fontMapper[theme.Text.fontFamily],
                fontSizeMapper(theme.Text.fontSize)
              )}
            >
              {item.options?.[1].label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
