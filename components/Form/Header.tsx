import {
  FileText,
  Star,
  Palette,
  Eye,
  EyeOff,
  LucideIcon,
  LucideProps,
} from "lucide-react";
import { Input, Button } from "../ui";
import { SheetHeader } from "../ui/sheet";
import { useFormSelectors } from "@/store";
import { cn } from "@/lib";
interface P {
  closeFn: () => void;
  toggleThemeCustomizer: () => void;
}

const previewMapper: Record<number, LucideIcon> = {
  0: EyeOff,
  1: Eye,
};
export const Header = ({ closeFn, toggleThemeCustomizer }: P) => {
  const formName = useFormSelectors.use.name();
  const isFavorite = useFormSelectors.use.isFavorite();
  const editMode = useFormSelectors.use.editMode();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const Preview = previewMapper[Number(editMode)];

  return (
    <SheetHeader className=" shadow-md">
      <div className="flex items-center p-4 sm:flex-row flex-col">
        <div className="flex w-full sm:w-1/2 items-center sm:gap-1 sm:justify-start justify-between">
          <FileText
            size={32}
            className="text-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
          />
          <Input
            className="w-[220px] border-0 border-b-2 rounded-none border-slate-20 focus-visible:ring-0"
            placeholder="Form name"
            onChange={(e) => updateForm("name", e.target.value)}
            value={formName}
          />
          <Star
            className={cn(
              "text-slate-700 hover:scale-110 cursor-pointer text-[12px]",
              isFavorite && "fill-amber-500 text-amber-500"
            )}
            strokeWidth={1.5}
            onClick={() => updateForm("isFavorite", !isFavorite)}
          />
        </div>
        <div className="flex w-full sm:w-1/2 items-center gap-4 sm:m-0 mt-2 sm:justify-end justify-between">
          <div className="flex gap-4">
            <Palette
              className="text-slate-700 hover:scale-110 cursor-pointer"
              strokeWidth={1.5}
              onClick={toggleThemeCustomizer}
            />
            {editMode}
            <Preview
              className="text-slate-700 hover:scale-110 cursor-pointer"
              strokeWidth={1.5}
              onClick={() => updateForm("editMode", !editMode)}
            />
          </div>
          <div className="flex gap-4">
            <Button variant={"outline"} onClick={closeFn}>
              Discard
            </Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </SheetHeader>
  );
};
