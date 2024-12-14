import { Button } from "@/components/ui";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { Circle, Square } from "lucide-react";
import { useState } from "react";
import { Option } from "./types";

const orderMapper: Record<string, JSX.Element> = {
  single: (
    <Circle
      className="text-slate-700"
      strokeWidth={1.5}
      height={22}
      width={22}
    />
  ),
  multi: (
    <Square
      className="text-slate-700"
      strokeWidth={1.5}
      height={22}
      width={22}
    />
  ),
};

export const Addon = ({
  order,
  selected = false,
  type,
  styling,
  onClick,
  value,
}: Option) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusChange = (focus: boolean) => selected && setIsFocused(focus);
  return (
    <div
      className={cn("flex items-center w-full pl-[24px] pt-2")}
      onMouseOver={() => handleFocusChange(true)}
      onFocus={() => handleFocusChange(true)}
      onMouseLeave={() => handleFocusChange(false)}
      onBlur={() => handleFocusChange(false)}
    >
      <div className="flex gap-1.5 items-center w-full pr-6">
        {selected && <>{type ? orderMapper[type] : `${order}.`}</>}
        {selected && (
          <Button
            className={cn(
              "font-normal hover:bg-inherit py-2 pl-0 pr-2 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
              isFocused && "border-b-[1px] border-slate-400",
              fontSizeMapper(styling.fontSize),
              fontMapper[styling.fontFamily],
              !selected && "cursor-default"
            )}
            size={"xxs"}
            variant={"ghost"}
            onClick={() => {
              onClick?.();
            }}
          >
            {value ?? "Add option"}
          </Button>
        )}
      </div>
    </div>
  );
};
