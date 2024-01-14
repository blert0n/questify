import { Button, Input } from "@/components/ui";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { TextStyling } from "@/types";
import { GripVertical, Circle, Square, X } from "lucide-react";
import { useState } from "react";

const orderMapper: Record<string, JSX.Element> = {
  single: <Circle className="text-slate-700" strokeWidth={1.5} />,
  multi: <Square className="text-slate-700" strokeWidth={1.5} />,
};

interface P {
  id: string;
  order?: number;
  value: string;
  addon?: boolean;
  selected?: boolean;
  locked?: boolean;
  type?: string;
  styling: TextStyling;
  onChange?: (value: string) => void;
  onRemove?: () => void;
  onClick?: () => void;
}

export const Option = ({
  id,
  order,
  value,
  addon = false,
  selected = false,
  locked = false,
  type,
  styling,
  onChange,
  onRemove,
  onClick,
}: P) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusChange = (focus: boolean) => selected && setIsFocused(focus);
  return (
    <div
      className="flex items-center w-full"
      key={id}
      onMouseOver={() => handleFocusChange(true)}
      onFocus={() => handleFocusChange(true)}
      onMouseLeave={() => handleFocusChange(false)}
      onBlur={() => handleFocusChange(false)}
    >
      <GripVertical
        className={cn(
          "opacity-0 text-slate-700",
          !addon && isFocused && !locked && "opacity-100"
        )}
        strokeWidth={1.5}
      />
      <div className="flex gap-1.5 items-center w-full pr-6">
        {!selected && addon ? null : (
          <>{type ? orderMapper[type] : `${order}.`}</>
        )}
        {!addon ? (
          <Input
            className={cn(
              "py-2 pl-0 pr-2 border-0 focus-visible:ring-0 rounded-none disabled:cursor-default transition-all duration-100 ease-in",
              isFocused && "border-b-[1px] border-slate-400",
              fontSizeMapper(styling.fontSize),
              fontMapper[styling.fontFamily],
              !selected && "cursor-default"
            )}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        ) : (
          <>
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
                  selected && onClick?.();
                }}
              >
                Add option
              </Button>
            )}
          </>
        )}
        {!addon && !locked && selected && (
          <X
            className="text-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
            onClick={() => onRemove?.()}
          />
        )}
      </div>
    </div>
  );
};
