import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { FormComponent, initialTheme } from "@/types";

export const LiveSection = ({
  item,
  theme = initialTheme,
  visible,
  onPageChange,
}: FormComponent) => {
  return (
    <div
      key={`section-${item.id}`}
      className={cn(visible && "visible", !visible && "hidden")}
    >
      <Button
        type="submit"
        size={"sm"}
        style={{
          backgroundColor: theme.primaryColor,
        }}
        onClick={() => onPageChange?.("next")}
      >
        Next
      </Button>
    </div>
  );
};
