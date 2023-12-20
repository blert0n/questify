import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";
import { useBoolean } from "usehooks-ts";
import { ThemeCustomizer } from "./ThemeCustomizer";

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
  const { value: themeCustomizer, toggle: toggleThemeCustomizer } =
    useBoolean(false);
  return (
    <Sheet open={visible}>
      <SheetContent
        className="sm:max-w-full w-full h-full p-0"
        side={side}
        onClose={() => closeFn()}
        onEscapeKeyDown={() => closeFn()}
      >
        <Header
          closeFn={closeFn}
          toggleThemeCustomizer={toggleThemeCustomizer}
        />
        <div className="relative h-screen">
          <div className="flex">A</div>
          <ThemeCustomizer
            visible={themeCustomizer}
            toggle={toggleThemeCustomizer}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
