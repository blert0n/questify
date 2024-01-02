import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { FormType } from "@/lib/graphql";

interface P {
  icon: React.ReactNode;
  title: string;
  description?: string;
  type: FormType;
}

export const IconOption = ({ icon, title, description, type }: P) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex gap-2 items-center p-2 cursor-pointer">
            {icon}
            <p>{title}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent>{description}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
