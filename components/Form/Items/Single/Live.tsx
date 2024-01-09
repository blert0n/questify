import { RadioGroup, RadioGroupItem } from "@/components/ui/";
import { cn, getColorBrightness, getColorShade } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { LiveComponentProps } from "@/types";
import ReactHtmlParser from "react-html-parser";

export const LiveOneChoice = ({
  id,
  question,
  image,
  styling,
  options = [],
}: LiveComponentProps) => {
  const checkBoxColor =
    getColorBrightness(styling.primary) >= 80
      ? getColorShade(styling.primary, 50)
      : styling.primary;
  return (
    <div
      key={id}
      className={"flex flex-col gap-3 w-full h-auto rounded-md bg-white p-6"}
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
      <div className="flex flex-col justify-between items-start gap-3">
        <div
          className={cn(
            fontMapper[styling.QFont],
            fontSizeMapper(styling.Qsize)
          )}
        >
          {ReactHtmlParser(question)}
        </div>
        <div>
          <RadioGroup defaultValue="comfortable">
            {options.map((option) => (
              <div
                key={option.id}
                className={cn(
                  "flex items-center gap-2",
                  fontMapper[styling.Tfont],
                  fontSizeMapper(styling.Tsize)
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
