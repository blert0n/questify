import { FormItem, FormType } from "@/types";
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
  Text,
} from "./Items";
import { useFormSelectors } from "@/store";
import { Draggable, DraggableStyle, Droppable } from "@hello-pangea/dnd";
import { cn, getPrimaryColor } from "@/lib";
import { useState } from "react";

const componentMapper = {
  [FormType.Text]: Text,
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

export default function EditableForm({ items }: P) {
  const theme = useFormSelectors.use.theme();
  const editMode = useFormSelectors.use.editMode();
  const selectedComponent = useFormSelectors.use.selectedComponent();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const [hovered, setHovered] = useState("");

  return (
    <>
      <HeaderImage theme={theme} />
      <FormHeader />
      <Droppable droppableId="droppable" type="formItems">
        {(provided) => (
          <div
            key="items"
            className="flex flex-col gap-4 h-full"
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
                  <Draggable key={item.id} draggableId={item.id} index={index}>
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
            <div
              className={cn(
                "min-h-24 rounded-md flex justify-center items-center shadow-lg invisible",
                items.length === 0 && "visible"
              )}
              style={
                editMode
                  ? {
                      border: `1px dashed ${theme.primaryColor}`,
                      color: theme.primaryColor,
                    }
                  : {}
              }
            >
              Drag and drop items here
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </>
  );
}
