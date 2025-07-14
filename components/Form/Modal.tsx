import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";
import { FormBuilder } from "./FormBuilder";
import { useBoolean } from "usehooks-ts";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { useFormSelectors } from "@/store";
import { cn } from "@/lib";
import { Responses } from "./Responses/Responses";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Elements } from "./AddComponent/Elements";
import { FormItemType_Enum } from "@/lib/graphql";

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
  const activeTab = useFormSelectors.use.activeTab();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const addItem = useFormSelectors.use.addItem();
  const resetForm = useFormSelectors.use.resetForm();
  const theme = useFormSelectors.use.theme();
  const formId = useFormSelectors.use.id?.();
  const reorder = useFormSelectors.use.reorder();
  const reorderOptions = useFormSelectors.use.reorderOptions();
  const reorderGrid = useFormSelectors.use.reorderGrid();
  const resetAiMessages = useFormSelectors.use.resetMessages();
  const resetAiSession = useFormSelectors.use.resetSession();

  const handleModalClose = () => {
    resetForm();
    resetAiMessages();
    resetAiSession();
    closeFn();
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (
      result.source.droppableId === "elements" &&
      result.destination.droppableId === "elements"
    )
      return;
    if (
      result.source.droppableId === "elements" &&
      result.destination.droppableId === "droppable"
    ) {
      addItem(
        result.draggableId as FormItemType_Enum,
        result.destination.index
      );
      return;
    }
    const dragType = result.type;
    if (dragType.includes("grid-checkbox-row")) {
      const dragged = dragType.split(".").at(-1);
      if (!dragged) return;
      return reorderGrid(
        dragged,
        result.source.index,
        result.destination.index,
        "row"
      );
    }
    if (dragType.includes("grid-checkbox-column")) {
      const dragged = dragType.split(".").at(-1);
      if (!dragged) return;
      return reorderGrid(
        dragged,
        result.source.index,
        result.destination.index,
        "column"
      );
    }
    if (dragType.includes("multiple-choice-grid-row")) {
      const dragged = dragType.split(".").at(-1);
      if (!dragged) return;
      return reorderGrid(
        dragged,
        result.source.index,
        result.destination.index,
        "row"
      );
    }
    if (dragType.includes("multiple-choice-grid-column")) {
      const dragged = dragType.split(".").at(-1);
      if (!dragged) return;
      return reorderGrid(
        dragged,
        result.source.index,
        result.destination.index,
        "column"
      );
    }
    if (dragType === "formItems") {
      return reorder(result.source.index, result.destination.index);
    }
    if (dragType.includes("options-")) {
      const itemId = dragType.split("options-")[1];
      reorderOptions(itemId, result.source.index, result.destination.index);
    }
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
        <div className="flex justify-center items-center sm:gap-4 gap-2 bg-white border-b-[1px] border-slate-400">
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
          className="flex flex-col self-start gap-8 items-center h-full w-full overflow-y-auto"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          {activeTab === 0 ? (
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="flex flex-grow md:flex-row flex-col md:gap-8 gap-4 w-full">
                <Elements />
                <div className="p-8 w-full flex-grow">
                  <FormBuilder />
                </div>
              </div>
            </DragDropContext>
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
