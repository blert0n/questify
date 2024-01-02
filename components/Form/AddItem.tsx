import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import { Options } from "./Options";

export function AddItem() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="border-2 border-slate-700 rounded-full"
          size={"icon"}
        >
          <Plus className="text-slate-700 cursor-pointer" strokeWidth={1.5} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <Options />
      </PopoverContent>
    </Popover>
  );
}
