import { Input } from "@/components/ui";
import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { Draggable } from "@hello-pangea/dnd";
import { GripVertical, Circle, Square, X } from "lucide-react";
import { useState } from "react";
import { Option as OptionProps } from "./types";

const orderMapper: Record<string, JSX.Element> = {
  single: <Circle className="text-slate-700" strokeWidth={1.5} />,
  multi: <Square className="text-slate-700" strokeWidth={1.5} />,
};

export const Option = ({
  id,
  order,
  index,
  value,
  addon = false,
  selected = false,
  locked = false,
  type,
  styling,
  onChange,
  onRemove,
  isDraggable = true,
}: OptionProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusChange = (focus: boolean) => selected && setIsFocused(focus);
  return (
    <Draggable
      key={id}
      draggableId={id}
      index={index}
      isDragDisabled={addon || !isDraggable}
    >
      {(provided, snapshot) => (
        <div
          className={cn(
            "flex items-center w-full",
            snapshot.isDragging && "opacity-50"
          )}
          onMouseOver={() => handleFocusChange(true)}
          onFocus={() => handleFocusChange(true)}
          onMouseLeave={() => handleFocusChange(false)}
          onBlur={() => handleFocusChange(false)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <div {...provided.dragHandleProps}>
            <GripVertical
              className={cn(
                "opacity-0 text-slate-700 hover:scale-110",
                !addon && isFocused && !locked && "opacity-100"
              )}
              strokeWidth={1.5}
            />
          </div>
          <div className="flex gap-1.5 items-center w-full pr-6">
            {type ? orderMapper[type] : `${order}.`}
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
              placeholder="Option label"
            />
            {selected && !locked && (
              <X
                className="text-slate-700 hover:scale-110 cursor-pointer"
                strokeWidth={1.5}
                onClick={() => onRemove?.()}
              />
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};
