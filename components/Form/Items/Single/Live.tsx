import { RadioGroup, RadioGroupItem } from "@/components/ui/";
import { cn, getColorBrightness, getColorShade } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialFormData } from "@/types";
import ReactHtmlParser from "react-html-parser";

export const LiveOneChoice = ({
  item,
  theme = initialFormData,
}: FormComponent) => {
  const checkBoxColor =
    getColorBrightness(theme.primaryColor) >= 80
      ? getColorShade(theme.primaryColor, 50)
      : theme.primaryColor;
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
        <div>
          <RadioGroup defaultValue="comfortable">
            {item.options?.map((option) => (
              <div
                key={option.id}
                className={cn(
                  "flex items-center gap-2",
                  fontMapper[theme.Text.fontFamily],
                  fontSizeMapper(theme.Text.fontSize)
                )}
              >
                <RadioGroupItem
                  value={option.value}
                  id={option.id}
                  style={{
                    color: checkBoxColor,
                    borderColor: checkBoxColor,
                    border: "1px solid",
                  }}
                />
                {option.value}
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
