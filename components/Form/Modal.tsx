import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";
import { Form } from "./Form";
import { useBoolean } from "usehooks-ts";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { useFormSelectors } from "@/store";
import { AddItem } from "./AddComponent/AddItem";
import { cn } from "@/lib";
import { Responses } from "./Responses/Responses";

const tabs = [
  {
    name: "Questions",
    index: 0,
  },
  {
    name: "Responses",
    index: 1,
  },
];

interface TabProps {
  name: string;
  tab: number;
  activeTab: number;
  onClick: () => void;
}

const Tab = ({ name, tab, activeTab, onClick }: TabProps) => {
  return (
    <div
      className={cn(
        "p-1 hover:cursor-pointer",
        activeTab === tab && "border-b-2 border-slate-700",
        activeTab !== tab && "pb-[5px]"
      )}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

interface P {
  visible: boolean;
  closeFn: () => void;
  saveFn: () => void;
  side?: "left" | "right" | "top" | "bottom";
}

export const FullScreenModal = ({
  visible,
  closeFn,
  saveFn,
  side = "left",
}: P) => {
  const { value: themeCustomizer, toggle: toggleThemeCustomizer } =
    useBoolean(false);
  const { value: isAddPopoverOpen, toggle: toggleAddPopover } =
    useBoolean(false);

  const activeTab = useFormSelectors.use.activeTab();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const resetForm = useFormSelectors.use.resetForm();
  const theme = useFormSelectors.use.theme();
  const formId = useFormSelectors.use.id?.();
  const editMode = useFormSelectors.use.editMode();

  const handleModalClose = () => {
    resetForm();
    closeFn();
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
          saveFn={saveFn}
          toggleThemeCustomizer={toggleThemeCustomizer}
        />
        <div className="flex justify-center items-center sm:gap-4 gap-2 bg-white">
          {tabs.map((tab) => (
            <Tab
              key={tab.index}
              activeTab={activeTab}
              name={tab.name}
              tab={tab.index}
              onClick={() => updateForm("activeTab", tab.index)}
            />
          ))}
        </div>
        <div
          className="flex flex-col self-start gap-8 items-center h-full w-full p-4 overflow-y-auto sticky top-0"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          {activeTab === 0 ? (
            <>
              {editMode && (
                <AddItem visible={isAddPopoverOpen} toggle={toggleAddPopover} />
              )}
              <Form />
            </>
          ) : (
            <Responses formId={formId} />
          )}
          <ThemeCustomizer
            visible={themeCustomizer}
            toggle={toggleThemeCustomizer}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
