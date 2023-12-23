import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";
import { useBoolean } from "usehooks-ts";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { cn, useMediaScreen } from "@/lib";

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
  const [xsScreen] = useMediaScreen("xs");
  return (
    <Sheet open={visible}>
      <SheetContent
        className="sm:max-w-full w-full h-full p-0 overflow-y-auto"
        side={side}
        onClose={() => closeFn()}
        onEscapeKeyDown={() => closeFn()}
      >
        <div className="flex flex-col h-full">
          <Header
            closeFn={closeFn}
            toggleThemeCustomizer={toggleThemeCustomizer}
          />
          <div className="flex justify-between h-full flex-col xxs:flex-row">
            <div className={cn(!xsScreen && themeCustomizer && "hidden")}>
              Form Content
            </div>
            {themeCustomizer && (
              <ThemeCustomizer toggle={toggleThemeCustomizer} />
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
