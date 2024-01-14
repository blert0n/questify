import { FormType } from "@/lib/graphql";
import { FormComponent } from "@/types";
import {
  Short,
  Long,
  Single,
  Multi,
  LinearScale,
  Date,
  Dropdown,
} from "./Items";
import { Draggable, DraggableStyle } from "@hello-pangea/dnd";
import { cn, getPrimaryColor } from "@/lib";
import { useFormSelectors } from "@/store";
import { useBoolean } from "usehooks-ts";

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

export const DragWrapper = ({ index, item, theme }: FormComponent) => {
  const updateForm = useFormSelectors.use.updateFormDetails();
  const {
    value: hovered,
    setTrue: setHoverTrue,
    setFalse: setHoverFalse,
  } = useBoolean();
  const DraggableComponent = componentMapper[item.type];
  const selected = useFormSelectors.use.selectedComponent() === item.id;

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
          onMouseOver={setHoverTrue}
          onMouseOut={setHoverFalse}
          onBlur={setHoverFalse}
        >
          <DraggableComponent
            key={item.id}
            index={index}
            item={item}
            theme={theme}
            selected={selected}
            hovered={hovered}
            dragHandle={provided.dragHandleProps}
          />
        </div>
      )}
    </Draggable>
  );
};
