import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";

interface P {
  visible: boolean;
  openFn: () => void;
  closeFn: () => void;
  saveFn?: () => void;
  side?: "left" | "right" | "top" | "bottom";
}

export const FullScreenModal = ({
  visible,
  openFn,
  closeFn,
  saveFn,
  side = "left",
}: P) => {
  return (
    <Sheet open={visible}>
      <SheetContent
        className="sm:max-w-full w-full h-full p-0"
        side={side}
        onClose={() => closeFn()}
        onEscapeKeyDown={() => closeFn()}
      >
        <Header closeFn={closeFn} />
      </SheetContent>
    </Sheet>
  );
};
