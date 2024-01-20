import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExternalLink, MoreVertical, TextCursor, Trash } from "lucide-react";

interface P {
  visible: boolean;
  toggle: () => void;
}

export default function Actions({ visible, toggle }: P) {
  return (
    <Popover open={visible} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className=" bg-white hover:scale-110"
          size={"icon"}
        >
          <MoreVertical
            className="text-slate-500 cursor-pointer"
            strokeWidth={1.5}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="m-2 mt-0 w-auto xs:w-[200px] flex flex-col p-0">
        <div className="flex justify-between items-center text-sm cursor-pointer hover:bg-slate-100 p-2">
          Rename
          <TextCursor className="text-slate-700" strokeWidth={1.5} size={16} />
        </div>
        <div className="flex justify-between items-center text-sm cursor-pointer hover:bg-slate-100 p-2">
          Delete
          <Trash className="text-slate-700" strokeWidth={1.5} size={16} />
        </div>
        <div className="flex justify-between items-center text-sm cursor-pointer hover:bg-slate-100 p-2">
          Open in new tab
          <ExternalLink
            className="text-slate-700"
            strokeWidth={1.5}
            size={16}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
