import { cn } from "@/lib";
import { useFormSelectors } from "@/store";
import { FormComponentProps } from "@/types";

export const Short = ({ item, selected }: FormComponentProps) => {
  const theme = useFormSelectors.use.theme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  return (
    <div
      className={cn(
        "w-full h-auto rounded-md p-4 bg-white shadow-md",
        !selected && "cursor-pointer",
        selected && "border-l-[5px]  border-l-sky-600"
      )}
      onClick={() => item.id && updateForm("selectedComponent", item.id)}
    >
      Short
    </div>
  );
};

export const NonEditable = ({ item, selected }: FormComponentProps) => {
  return <>Preview</>;
};
