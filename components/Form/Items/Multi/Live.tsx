import { Checkbox } from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import { ShieldAlert } from "lucide-react";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const LiveMultiChoice = ({
  item,
  theme = initialTheme,
}: FormComponent) => {
  const formState = useFormikContext<Record<string, string>>();
  const [checked, setChecked] = useState<string[]>([]);

  const handleCheck = (value: string) => {
    formState?.setTouched({ ...formState?.touched, [item.id]: true });
    setChecked((state) => {
      formState?.setFieldValue(item.id, [...state, value].join(","));
      return [...state, value];
    });
  };
  const handleUnchecked = (value: string) => {
    setChecked((state) => {
      const unCheckedState = state.filter((item) => item !== value);
      formState?.setFieldValue(
        item.id,
        unCheckedState.length ? unCheckedState.join(",") : ""
      );
      return unCheckedState;
    });
  };
  const checkBoxColor = getPrimaryColor(theme.primaryColor);

  return (
    <div
      key={item.id}
      className={cn(
        "flex flex-col gap-3 w-full h-auto rounded-md bg-white p-6",
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
      <div className="flex flex-col justify-between items-start gap-3">
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
  );
};
