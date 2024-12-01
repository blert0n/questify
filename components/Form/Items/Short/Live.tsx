import { Input } from "@/components/ui";
import { cn, getPrimaryColor, transform } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import { ShieldAlert } from "lucide-react";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const LiveShortComponent = ({
  item,
  theme = initialTheme,
  readonly,
}: FormComponent) => {
  const [inputFocus, setInputFocus] = useState(false);
  const focusedInputColor = getPrimaryColor(theme.primaryColor);
  const formState = useFormikContext<Record<string, string>>();

  return (
    <div
      key={`short-${item.id}`}
      className={cn(
        "flex flex-col gap-3 w-full h-auto rounded-md p-6 bg-white",
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
      <div
        className={cn(
          "flex gap-[2px] w-full",
          fontMapper[theme.Question.fontFamily],
          fontSizeMapper(theme.Question.fontSize)
        )}
      >
        {ReactHtmlParser(item.name, { transform })}
        {item.required && <span className="text-red-600">*</span>}
      </div>
      <Input
        name={item.id}
        className={cn(
          "w-full py-2 px-0 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
          fontMapper[theme.Text.fontFamily],
          fontSizeMapper(theme.Text.fontSize)
        )}
        style={{
          borderBottom:
            formState?.errors[item.id] && formState?.touched[item.id]
              ? "0.5px solid red"
              : `${inputFocus ? 2 : 0.5}px solid ${
                  inputFocus ? focusedInputColor : theme.secondaryColor
                }`,
        }}
        placeholder="Type answer"
        onChange={(e) => {
          !formState?.touched[item.id] &&
            formState?.setTouched({ ...formState?.touched, [item.id]: true });
          formState?.setFieldValue?.(item.id, e.target.value);
        }}
        onBlur={() => setInputFocus(false)}
        onFocus={() => setInputFocus(true)}
        defaultValue={readonly ? formState?.values[item.id] : ""}
        disabled={readonly}
      />
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
  );
};
