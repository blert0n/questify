import { FormItem, iconProps } from "@/types";
import { Switch, Separator } from "@/components/ui";
import { Copy, Trash } from "lucide-react";
import { useFormSelectors } from "@/store";

interface P {
  item: FormItem;
  editMode?: boolean;
  selected?: boolean;
}

export const ItemActions = ({
  item,
  editMode = false,
  selected = false,
}: P) => {
  const updateItem = useFormSelectors.use.updateItem();
  const deleteItem = useFormSelectors.use.deleteItem();
  const duplicateItem = useFormSelectors.use.duplicateItem();
  return (
    <>
      {editMode && selected && (
        <div className="mt-4 flex flex-col items-end gap-4">
          <Separator className="mt-8" />
          <div className="flex justify-end items-center gap-4 w-full">
            <Copy
              {...iconProps}
              onClick={() => item.id && duplicateItem(item.id)}
            />
            <Trash
              {...iconProps}
              onClick={() => item.id && deleteItem(item.id)}
            />
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
