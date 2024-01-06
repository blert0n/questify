import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";
import { Form } from "./Form";
import { useBoolean } from "usehooks-ts";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { useCreateFormSelectors } from "@/store";
import { AddItem } from "./AddComponent/AddItem";

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

  const resetTheme = useCreateFormSelectors.use.resetTheme();
  const theme = useCreateFormSelectors.use.theme();

  const handleModalClose = () => {
    closeFn();
    resetTheme();
  };
  return (
    <Sheet open={visible}>
      <SheetContent
        className="sm:max-w-full w-full h-full max-h-full p-0 flex flex-col gap-0 overflow-y-auto"
        side={side}
        onClose={handleModalClose}
        onEscapeKeyDown={handleModalClose}
      >
        <Header
          closeFn={handleModalClose}
          toggleThemeCustomizer={toggleThemeCustomizer}
        />
        <div
          className="flex flex-col gap-8 items-center h-full w-full p-4"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          <AddItem />
          <Form />
        </div>
        <ThemeCustomizer
          visible={themeCustomizer}
          toggle={toggleThemeCustomizer}
        />
      </SheetContent>
    </Sheet>
  );
};
