import parse from "html-react-parser";
import { useState } from "react";
import { FormComponent, initialTheme } from "@/types";
import { Textarea } from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormikContext } from "formik";
import { ShieldAlert } from "lucide-react";

export const LiveLongComponent = ({
  item,
  theme = initialTheme,
  readonly,
  visible,
}: FormComponent) => {
  const [inputFocus, setInputFocus] = useState(false);
  const focusedInputColor = getPrimaryColor(theme.primaryColor);
  const formState = useFormikContext<Record<string, string>>();

  return (
    <div
      key={`long-${item.id}`}
      className={cn(
        "relative flex flex-col gap-3 w-full h-auto rounded-md p-6 bg-white",
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
      <Textarea
        name={item.id}
        defaultValue={readonly ? formState?.values?.[item.id] : ""}
        disabled={readonly}
        className={cn(
          "w-full py-2 px-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
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
