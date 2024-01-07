import { FormItem, iconProps } from "@/types";
import { Switch, Separator } from "@/components/ui";
import { Copy, Trash } from "lucide-react";
import { useFormSelectors } from "@/store";

interface P {
  item: FormItem;
  editMode?: boolean;
  selected?: boolean;
  onDuplicate: () => void;
  onDelete: () => void;
}

export const ItemActions = ({
  item,
  editMode = false,
  selected = false,
  onDuplicate,
  onDelete,
}: P) => {
  const updateItem = useFormSelectors.use.updateItem();
  return (
    <>
      {editMode && selected && (
        <div className="mt-4 flex flex-col items-end gap-4">
          <Separator className="mt-6" />
          <div className="flex justify-end items-center gap-4 w-full">
            <Copy {...iconProps} onClick={onDuplicate} />
            <Trash {...iconProps} onClick={onDelete} />
            <Separator orientation="vertical" />
            Required{" "}
            <Switch
              checked={item.required}
              onCheckedChange={(checked) =>
                item.id && updateItem(item.id, "required", checked)
              }
            />
          </div>
        </div>
      )}
    </>
  );
};
