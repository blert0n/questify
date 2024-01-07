import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";
import { Form } from "./Form";
import { useBoolean } from "usehooks-ts";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { useFormSelectors } from "@/store";
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
  const { value: isAddPopoverOpen, toggle: toggleAddPopover } =
    useBoolean(false);

  const resetTheme = useFormSelectors.use.resetTheme();
  const theme = useFormSelectors.use.theme();

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
          className="flex flex-col gap-8 items-center h-full w-full p-4 overflow-y-auto"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          <AddItem visible={isAddPopoverOpen} toggle={toggleAddPopover} />
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
