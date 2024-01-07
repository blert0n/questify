import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import { Options } from "./Options";

interface P {
  visible: boolean;
  toggle: () => void;
}

export function AddItem({ visible, toggle }: P) {
  return (
    <Popover open={visible} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="border-2 border-slate-700 rounded-full bg-white hover:scale-110"
          size={"icon"}
        >
          <Plus className="text-slate-700 cursor-pointer" strokeWidth={1.5} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <Options toggle={toggle} />
      </PopoverContent>
    </Popover>
  );
}
