import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import { ShieldAlert, Star } from "lucide-react";
import { useState } from "react";
import parse from "html-react-parser";

export const LiveRating = ({
  item,
  theme = initialTheme,
  readonly,
  visible,
}: FormComponent) => {
  const formState = useFormikContext<Record<string, string>>();
  const formValue = formState?.values?.[item.id];
  const [value, setValue] = useState(readonly ? Number(formValue) : 0);
  return (
    <div
      key={item.id}
      className={cn(
        "relative flex flex-col gap-3 w-full h-auto rounded-md bg-white p-6",
        formState?.touched[item.id] &&
          formState?.errors[item.id] &&
          "border-[1px] border-red-600",
        visible && "visible",
        !visible && "hidden"
      )}
    >
      {item.required && (
        <div className="absolute top-0 right-0 text-red-500 text-[18px] p-2 rounded-bl-md">
          *
        </div>
      )}
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
        {parse(item.name)}
      </div>
      <div className="flex md:items-center gap-4 md:flex-row flex-col items-start">
        <div className="flex gap-1">
          {Array(Number.parseInt(item.options?.[0].value ?? "5"))
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                strokeWidth={1}
                fill={value <= i ? theme.secondaryColor : theme.primaryColor}
                stroke={theme.primaryColor}
                className="hover:scale-110 hover:cursor-pointer md:size-8 size-6"
                onClick={() => {
                  if (readonly) return;
                  setValue(i + 1);
                  formState?.setFieldValue(item.id, String(i + 1));
                }}
              />
            ))}
        </div>
        <div>
          {value}/{item.options?.[0].value ?? "5"}
        </div>
      </div>
      {formState?.touched[item.id] && formState?.errors[item.id] && (
        <div className="flex gap-2 items-center text-sm text-red-600 mt-3">
          <ShieldAlert
            className="text-slate-700 stroke-red-600"
            size={20}
            strokeWidth={1.5}
          />
          {formState?.errors[item.id]}
        </div>
      )}
    </div>
  );
};
