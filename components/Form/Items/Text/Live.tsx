import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import parse from "html-react-parser";

export const LiveText = ({
  item,
  theme = initialTheme,
  visible,
}: FormComponent) => {
  const formState = useFormikContext<Record<string, string>>();

  return (
    <div
      key={`short-${item.id}`}
      className={cn(
        "flex flex-col gap-3 w-full h-auto rounded-md p-6 bg-white",
        formState?.touched[item.id] &&
          formState?.errors[item.id] &&
          "border-[1px] border-red-600",
        visible && "visible",
        !visible && "hidden"
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
          fontMapper[theme.Question.fontFamily],
          fontSizeMapper(theme.Question.fontSize)
        )}
      >
        {parse(item.name)}
      </div>
    </div>
  );
};
