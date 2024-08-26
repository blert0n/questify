import { RadioGroup, RadioGroupItem } from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import { ShieldAlert } from "lucide-react";
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
  readonly,
}: FormComponent) => {
  const checkBoxColor = getPrimaryColor(theme.primaryColor);
  const formState = useFormikContext<Record<string, string>>();

  return (
    <div
      key={item.id}
      className={cn(
        "flex flex-col gap-3 w-full min-h-[120px] rounded-md bg-white p-6 overflow-hidden",
        formState?.touched[item.id] &&
          formState?.errors[item.id] &&
          "border-[1px] border-red-600"
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
            <RadioGroup
              key={item.id}
              className="flex flex-row flex-wrap gap-4"
              onValueChange={(value) =>
                formState?.setFieldValue(item.id, value)
              }
              defaultValue={readonly ? formState.values[item.id] : ""}
              disabled={readonly}
            >
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
          {formState?.touched[item.id] && formState?.errors[item.id] && (
            <div className="flex gap-2 items-center text-sm text-red-600">
              <ShieldAlert
                className="text-slate-700 stroke-red-600"
                size={20}
                strokeWidth={1.5}
              />
              {formState?.errors[item.id]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
