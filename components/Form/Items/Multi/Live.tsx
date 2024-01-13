import { Checkbox } from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialFormData } from "@/types";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const LiveMultiChoice = ({
  item,
  theme = initialFormData,
}: FormComponent) => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleCheck = (value: string) => {
    setChecked((state) => [...state, value]);
  };
  const handleUnchecked = (value: string) => {
    setChecked((state) => state.filter((item) => item !== value));
  };
  const checkBoxColor = getPrimaryColor(theme.primaryColor);
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
        <div
          className={cn(
            "flex flex-col gap-2",
            fontMapper[theme.Text.fontFamily],
            fontSizeMapper(theme.Text.fontSize)
          )}
        >
          {item.options?.map((option) => (
            <div key={option.id} className="flex gap-2 items-center">
              <Checkbox
                checked={checked.includes(option.value)}
                onCheckedChange={(isChecked) => {
                  isChecked
                    ? handleCheck(option.value)
                    : handleUnchecked(option.value);
                }}
                style={{
                  borderColor: checkBoxColor,
                  backgroundColor: checked.includes(option.value)
                    ? checkBoxColor
                    : "initial",
                }}
              />
              {option.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
