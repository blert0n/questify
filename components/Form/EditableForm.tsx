import { FormType } from "@/lib/graphql";
import { FormItem } from "@/types";
import {
  Short,
  Long,
  Single,
  Multi,
  LinearScale,
  Date,
  Dropdown,
  HeaderImage,
  FormHeader,
} from "./Items";
import { useFormSelectors } from "@/store";
import {
  DragDropContext,
  Draggable,
  DraggableStyle,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { cn, getPrimaryColor } from "@/lib";
import { useState } from "react";

const componentMapper = {
  [FormType.Short]: Short,
  [FormType.Long]: Long,
  [FormType.SingleChoice]: Single,
  [FormType.MultipleChoice]: Multi,
  [FormType.LinearScale]: LinearScale,
  [FormType.Date]: Date,
  [FormType.Dropdown]: Dropdown,
};

const getItemStyle = (
  selected: boolean,
  color: string,
  draggableStyle?: DraggableStyle
) => ({
  borderLeft: selected ? `5px solid ${color}` : "none",
  ...draggableStyle,
});

interface P {
  items: FormItem[];
}

export default function LiveForm({ items }: P) {
  const theme = useFormSelectors.use.theme();
  const selectedComponent = useFormSelectors.use.selectedComponent();
  const reorder = useFormSelectors.use.reorder();
  const reorderOptions = useFormSelectors.use.reorderOptions();

  const updateForm = useFormSelectors.use.updateFormDetails();
  const [hovered, setHovered] = useState("");

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
    <>
      <HeaderImage theme={theme} />
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
                  const selected = selectedComponent === item.id;
                  const isHovered = hovered === item.id;
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className={cn(
                            "flex flex-col w-full h-auto rounded-md bg-white",
                            !selected && "cursor-pointer",
                            snapshot.isDragging && "opacity-50"
                          )}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={getItemStyle(
                            selected,
                            getPrimaryColor(theme.primaryColor),
                            provided.draggableProps.style
                          )}
                          onClick={() => {
                            if (selected) return;
                            updateForm("selectedComponent", item.id);
                          }}
                          onMouseOver={() => setHovered(item.id)}
                          onMouseOut={() => setHovered("")}
                          onBlur={() => setHovered("")}
                        >
                          <DynamicComponent
                            key={item.id}
                            item={item}
                            theme={theme}
                            selected={selected}
                            hovered={isHovered}
                            dragHandle={provided.dragHandleProps}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
