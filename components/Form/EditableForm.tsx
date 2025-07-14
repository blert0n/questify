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
  Text,
  CheckboxGrid,
  MultipleChoiceGrid,
  PhoneNumber,
  Rating,
  Section,
} from "./Items";
import { useFormSelectors } from "@/store";
import { Draggable, DraggableStyle, Droppable } from "@hello-pangea/dnd";
import { cn, getPrimaryColor } from "@/lib";
import { useState } from "react";
import { FormItemType_Enum } from "@/lib/graphql";
import { PlusIcon } from "lucide-react";
// import AI from "./AI/AI";

const EMPTY_COMPONENT = () => <span />;

const componentMapper = {
  [FormItemType_Enum.Text]: Text,
  [FormItemType_Enum.Short]: Short,
  [FormItemType_Enum.Long]: Long,
  [FormItemType_Enum.SingleChoice]: Single,
  [FormItemType_Enum.MultipleChoice]: Multi,
  [FormItemType_Enum.LinearScale]: LinearScale,
  [FormItemType_Enum.Date]: Date,
  [FormItemType_Enum.Dropdown]: Dropdown,
  [FormItemType_Enum.SingleChoiceGrid]: CheckboxGrid,
  [FormItemType_Enum.MultipleChoiceGrid]: MultipleChoiceGrid,
  [FormItemType_Enum.Rating]: Rating,
  [FormItemType_Enum.PhoneNumber]: PhoneNumber,
  [FormItemType_Enum.Section]: Section,
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
                const DynamicComponent = item.type
                  ? componentMapper[item.type]
                  : EMPTY_COMPONENT;
                const selected = selectedComponent === item.id;
                const isHovered = hovered === item.id;

                const pageNumber =
                  item.type === FormItemType_Enum.Section
                    ? items.filter(
                        (i) =>
                          i.order <= item.order &&
                          i.type === FormItemType_Enum.Section
                      ).length + 1
                    : undefined;

                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={cn(
                          item.type !== FormItemType_Enum.Section &&
                            "flex flex-col w-full h-auto rounded-md bg-white",
                          !selected && "cursor-pointer",
                          snapshot.isDragging && "opacity-50"
                        )}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={getItemStyle(
                          selected && item.type !== FormItemType_Enum.Section,
                          getPrimaryColor(theme.primaryColor),
                          provided.draggableProps.style
                        )}
                        onClick={() => {
                          if (
                            selected ||
                            item.type === FormItemType_Enum.Section
                          )
                            return;
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
                          pageNumber={pageNumber}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            <div
              className={cn(
                "min-h-12 rounded-md flex justify-center items-center shadow-lg"
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
              <PlusIcon className="hover:scale-110 hover:cursor-pointer" />
              Drop new items
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      {/* <AI /> */}
    </>
  );
}
