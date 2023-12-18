import { FileText, Star, Palette, Eye } from "lucide-react";
import { Input, Button } from "../ui";
import { SheetHeader } from "../ui/sheet";

interface P {
  closeFn?: () => void;
}

export const Header = ({ closeFn }: P) => {
  return (
    <SheetHeader className=" shadow-md">
      <div className="flex items-center p-4 sm:flex-row flex-col">
        <div className="flex w-full xs:w-1/2 items-center gap-1 xs:justify-start justify-center">
          <FileText
            size={32}
            className="text-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
          />
          <Input
            className="w-[220px] border-0 border-b-2 rounded-none border-slate-20 focus-visible:ring-0"
            placeholder="Form name"
          />
          <Star
            className="text-slate-700 hover:scale-110 cursor-pointer text-[12px]"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex w-full xs:w-1/2 items-center gap-4 sm:m-0 mt-2 sm:justify-end justify-center">
          <Palette
            className="text-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
          />
          <Eye
            className="text-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
          />
          <Button variant={"outline"} onClick={closeFn}>
            Discard
          </Button>
          <Button>Save</Button>
        </div>
      </div>
    </SheetHeader>
  );
};
