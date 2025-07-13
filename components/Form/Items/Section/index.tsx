import { cn } from "@/lib";
import { useFormSelectors } from "@/store";
import { FormComponent, iconProps } from "@/types";
import { GripHorizontal, Trash } from "lucide-react";

export const Section = ({
  item,
  theme,
  dragHandle,
  hovered,
  pageNumber,
}: FormComponent) => {
  const deleteItem = useFormSelectors.use.deleteItem();
  return (
    <div
      className="w-full relative group flex items-center opacity-70"
      {...dragHandle}
    >
      <div
        className="flex-grow border-t opacity-70"
        style={{
          borderColor: `${theme.primaryColor}`,
        }}
      />
      <span
        className="px-2 text-center whitespace-nowrap"
        style={{
          color: theme.primaryColor,
        }}
      >
        Page {pageNumber}
      </span>
      <div
        className="flex-grow border-t opacity-70"
        style={{
          borderColor: `${theme.primaryColor}`,
        }}
      />

      <div
        className={cn(
          "absolute right-0 translate-x-full pl-2 flex items-center space-x-2",
          hovered && "opacity-100",
          !hovered && "opacity-0"
        )}
      >
        <div>
          <GripHorizontal
            className={cn("text-slate-700 hover:scale-110")}
            strokeWidth={1.5}
          />
        </div>
        <Trash {...iconProps} onClick={() => deleteItem(item.id)} />
      </div>
    </div>
  );
};
