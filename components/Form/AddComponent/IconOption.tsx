import { useFormSelectors } from "@/store";
import { FormType } from "@/types";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../ui/tooltip";

interface P {
  icon: React.ReactNode;
  title: string;
  description?: string;
  type: FormType;
  toggle: () => void;
}

export const IconOption = ({ icon, title, description, type, toggle }: P) => {
  const addItem = useFormSelectors.use.addItem();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="flex gap-2 items-center p-2 cursor-pointer hover:bg-slate-100 rounded-sm "
            onClick={() => {
              addItem(type);
              toggle();
            }}
          >
            {icon}
            <p>{title}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent>{description}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
