import {
  ShortInputIcon,
  TextareaIcon,
  SingleChoiceIcon,
  MultiChoiceIcon,
  DropdownIcon,
  DatetimeIcon,
  ScaleIcon,
  TextIcon,
} from "@/assets/svg";
import { FormItemType_Enum } from "@/lib/graphql";
import { useMediaScreen } from "@/lib/useMediaScreen";
import { useFormSelectors } from "@/store";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const elements = [
  {
    index: 1,
    key: FormItemType_Enum.Text,
    icon: <TextIcon className="hover:scale-110" />,
    title: "Text",
    shortTitle: "Text",
  },
  {
    index: 2,
    key: FormItemType_Enum.Short,
    icon: <ShortInputIcon className="hover:scale-110" />,
    title: "Short Input",
    shortTitle: "Short",
  },
  {
    index: 3,
    key: FormItemType_Enum.Long,
    icon: <TextareaIcon className="hover:scale-110" />,
    title: "Textarea Input",
    shortTitle: "Textarea",
  },
  {
    index: 4,
    key: FormItemType_Enum.SingleChoice,
    icon: <SingleChoiceIcon className="hover:scale-110" />,
    title: "Single choice",
    shortTitle: "Single",
  },
  {
    index: 5,
    key: FormItemType_Enum.MultipleChoice,
    icon: <MultiChoiceIcon className="hover:scale-110" />,
    title: "Multiple choice",
    shortTitle: "Multiple",
  },
  {
    index: 6,
    key: FormItemType_Enum.LinearScale,
    icon: <ScaleIcon className="hover:scale-110" />,
    title: "Scale",
    shortTitle: "Scale",
  },
  {
    index: 7,
    key: FormItemType_Enum.Dropdown,
    icon: <DropdownIcon className="hover:scale-110" />,
    title: "Dropdown",
    shortTitle: "Dropdown",
  },
  {
    index: 8,
    key: FormItemType_Enum.Date,
    icon: <DatetimeIcon className="hover:scale-110" />,
    title: "Date",
    shortTitle: "Date",
  },
];

export function Elements() {
  const addItem = useFormSelectors.use.addItem();
  const [isMdScreen] = useMediaScreen("md");
  return (
    <Droppable droppableId="elements" type="formItems">
      {(provided) => (
        <div
          className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-1 gap-4 "
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {elements.map((element) => (
            <Draggable
              key={element.key}
              draggableId={element.key}
              index={element.index}
              isDragDisabled={!isMdScreen}
            >
              {(provided) => (
                <div
                  className="flex md:flex-row flex-col items-center"
                  key={element.key}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  onClick={() => addItem(element.key)}
                >
                  <div className="md:w-full border-gray-100 border-[1px] rounded-sm flex items-center p-1 gap-2 cursor-move hover:border-[#5ca4fa]">
                    {element.icon}
                    <span className="text-gray-500 hidden md:inline font-semibold">
                      {element.title}
                    </span>
                  </div>
                  <span className="text-gray-500 inline md:hidden font-semibold">
                    {element.shortTitle}
                  </span>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
