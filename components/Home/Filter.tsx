import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, Filter } from "lucide-react";

interface P {
  visible: boolean;
  selected: any;
  toggle: (state: boolean) => void;
  onSelect: (filter: number) => void;
}

export default function Filters({ visible, selected, toggle, onSelect }: P) {
  return (
    <Popover open={visible} onOpenChange={(state) => toggle(state)}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className=" hover:scale-110"
          size={"icon"}
          onClick={() => {
            toggle(!visible);
          }}
        >
          <Filter
            size={21}
            strokeWidth={1.5}
            className="hover:cursor-pointer hover:scale-110 text-slate-700"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="m-2 mt-0 w-auto xs:w-[200px] flex flex-col p-0">
        <div
          className="flex justify-between text-sm cursor-pointer hover:bg-slate-100 p-2"
          onClick={() => {
            onSelect(1);
            toggle(!visible);
          }}
        >
          Last created
          {selected.createdAt && <Check size={16} strokeWidth={1.5} />}
        </div>
        <div
          className="flex justify-between text-sm cursor-pointer hover:bg-slate-100 p-2"
          onClick={() => {
            onSelect(2);
            toggle(!visible);
          }}
        >
          Last modified
          {selected.updatedAt && <Check size={16} strokeWidth={1.5} />}
        </div>
        <div
          className="flex justify-between text-sm cursor-pointer hover:bg-slate-100 p-2"
          onClick={() => {
            onSelect(3);
            toggle(!visible);
          }}
        >
          Favorites
          {selected.favorite && <Check size={16} strokeWidth={1.5} />}
        </div>
      </PopoverContent>
    </Popover>
  );
}
