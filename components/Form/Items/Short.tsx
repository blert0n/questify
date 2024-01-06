import { cn } from "@/lib";
import { useFormSelectors } from "@/store";
import { FormComponentProps } from "@/types";

export const Short = ({ item, selected }: FormComponentProps) => {
  const theme = useFormSelectors.use.theme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  return (
    <div
      className="w-full border-t-[10px] rounded-md h-auto shadow-md"
      style={{
        borderColor: theme.primaryColor,
      }}
      onClick={() => item.id && updateForm("selectedComponent", item.id)}
    >
      <div
        className={cn(
          "h-full rounded-b-md p-4 bg-white",
          !selected && "cursor-pointer",
          selected && "border-l-[5px]  border-l-sky-600"
        )}
      >
        Short
      </div>
    </div>
  );
};
