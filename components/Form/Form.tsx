import { useFormSelectors } from "@/store";
import {
  HeaderImage,
  FormHeader,
  LiveLongComponent,
  LiveOneChoice,
  LiveShortComponent,
  LiveMultiChoice,
  LiveDropdown,
  LiveLinearScale,
  LiveDate,
} from "./Items";
import { FormType } from "@/lib/graphql";
import { DragWrapper } from "./DragWrapper";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";

const componentMapper = {
  [FormType.Short]: LiveShortComponent,
  [FormType.Long]: LiveLongComponent,
  [FormType.SingleChoice]: LiveOneChoice,
  [FormType.MultipleChoice]: LiveMultiChoice,
  [FormType.LinearScale]: LiveLinearScale,
  [FormType.Date]: LiveDate,
  [FormType.Dropdown]: LiveDropdown,
};

interface P {
  id?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Form = ({ id }: P) => {
  const theme = useFormSelectors.use.theme();
  const editMode = useFormSelectors.use.editMode();
  const items = useFormSelectors.use.items();
  const reorder = useFormSelectors.use.reorder();
  const reorderOptions = useFormSelectors.use.reorderOptions();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.type === "formItems") {
      return reorder(result.source.index, result.destination.index);
    }
    if (result.type.includes("options-")) {
      const itemId = result.type.split("options-")[1];
      reorderOptions(itemId, result.source.index, result.destination.index);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl ">
      <HeaderImage />
      <FormHeader />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="formItems">
          {(provided) => (
            <div
              key="items"
              className="flex flex-col gap-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items
                .sort((a, b) => a.order - b.order)
                .map((item, index) => {
                  const DynamicComponent = componentMapper[item.type];
                  return (
                    <div key={item.id}>
                      {editMode ? (
                        <DragWrapper
                          key={item.id}
                          item={item}
                          theme={theme}
                          index={index}
                        />
                      ) : (
                        <DynamicComponent
                          key={item.id}
                          item={item}
                          theme={theme}
                          index={index}
                        />
                      )}
                    </div>
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
