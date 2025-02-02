import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import { ShieldAlert } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import parse from "html-react-parser";

export const LivePhoneNumber = ({
  item,
  theme = initialTheme,
  readonly,
}: FormComponent) => {
  const formState = useFormikContext<Record<string, string>>();

  return (
    <div
      key={`short-${item.id}`}
      className={cn(
        "relative flex flex-col gap-3 w-full h-auto rounded-md p-6 bg-white",
        formState?.touched[item.id] &&
          formState?.errors[item.id] &&
          "border-[1px] border-red-600"
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
      <PhoneInput
        country="us"
        disabled={readonly}
        value={readonly ? formState?.values[item.id] : ""}
        onChange={(number) => {
          !formState?.touched[item.id] &&
            formState?.setTouched({ ...formState?.touched, [item.id]: true });
          formState?.setFieldValue?.(item.id, number);
        }}
      />
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
