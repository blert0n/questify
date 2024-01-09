import { FormItem, iconProps } from "@/types";
import { Switch, Separator } from "@/components/ui";
import { Copy, Trash } from "lucide-react";
import { useFormSelectors } from "@/store";

interface P {
  item: FormItem;
  selected?: boolean;
  onDuplicate: () => void;
  onDelete: () => void;
}

export const ItemActions = ({
  item,
  selected = false,
  onDuplicate,
  onDelete,
}: P) => {
  const updateItem = useFormSelectors.use.updateItem();
  return (
    <>
      {selected && (
        <div className="mt-1 flex flex-col items-end gap-2">
          <Separator className="mt-6" />
          <div className="flex justify-end items-center gap-4 w-full">
            <Copy {...iconProps} onClick={onDuplicate} />
            <Trash {...iconProps} onClick={onDelete} />
            <Separator orientation="vertical" className="h-[24px]" decorative />
            Required{" "}
            <Switch
              checked={item.required}
              onCheckedChange={(checked) =>
                updateItem(item.id, "required", checked)
              }
            />
          </div>
        </div>
      )}
    </>
  );
};
