import {
  ShortInputIcon,
  TextareaIcon,
  SingleChoiceIcon,
  MultiChoiceIcon,
  DropdownIcon,
  DatetimeIcon,
  ScaleIcon,
  MultiChoiceGrid,
  OneChoiceGrid,
  RatingIcon,
  PhoneNumberIcon,
} from "@/assets/svg";
import { SectionIcon } from "@/assets/svg/form/Section";
import { Input, ScrollArea, ScrollBar } from "@/components/ui";
import { FormItemType_Enum } from "@/lib/graphql";
import { useMediaScreen } from "@/lib/useMediaScreen";
import { useFormSelectors } from "@/store";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";

const elements = [
  {
    key: FormItemType_Enum.Section,
    icon: <SectionIcon className="hover:scale-110" />,
    title: "Section",
    shortTitle: "Section",
  },
  {
    key: FormItemType_Enum.Short,
    icon: <ShortInputIcon className="hover:scale-110" />,
    title: "Short Input",
    shortTitle: "Short",
  },
  {
    key: FormItemType_Enum.Long,
    icon: <TextareaIcon className="hover:scale-110" />,
    title: "Textarea Input",
    shortTitle: "Textarea",
  },
  {
    key: FormItemType_Enum.SingleChoice,
    icon: <SingleChoiceIcon className="hover:scale-110" />,
    title: "Single choice",
    shortTitle: "Single",
  },
  {
    key: FormItemType_Enum.SingleChoiceGrid,
    icon: <OneChoiceGrid className="hover:scale-110" />,
    title: "Grid checkbox",
    shortTitle: "Grid box",
  },
  {
    key: FormItemType_Enum.MultipleChoice,
    icon: <MultiChoiceIcon className="hover:scale-110" />,
    title: "Multiple choice",
    shortTitle: "Multiple",
  },
  {
    key: FormItemType_Enum.MultipleChoiceGrid,
    icon: <MultiChoiceGrid className="hover:scale-110" />,
    title: "Multi grid",
    shortTitle: "Multi grid",
  },
  {
    key: FormItemType_Enum.LinearScale,
    icon: <ScaleIcon className="hover:scale-110" />,
    title: "Scale",
    shortTitle: "Scale",
  },
  {
    key: FormItemType_Enum.Dropdown,
    icon: <DropdownIcon className="hover:scale-110" />,
    title: "Dropdown",
    shortTitle: "Dropdown",
  },
  {
    key: FormItemType_Enum.Date,
    icon: <DatetimeIcon className="hover:scale-110" />,
    title: "Date",
    shortTitle: "Date",
  },
  {
    key: FormItemType_Enum.Rating,
    icon: <RatingIcon className="hover:scale-110" />,
    title: "Rating",
    shortTitle: "Rating",
  },
  {
    key: FormItemType_Enum.PhoneNumber,
    icon: <PhoneNumberIcon className="hover:scale-110" />,
    title: "Phone number",
    shortTitle: "Phone",
  },
];

export function Elements() {
  const [search, setSearch] = useState("");
  const addItem = useFormSelectors.use.addItem();
  const [isMdScreen] = useMediaScreen("md");
  const { value: isElementsMenuVisible, toggle: toggleElementsMenu } =
    useBoolean(true);
  return (
    <div className="bg-white min-w-64 p-4 sticky top-0 z-20 shadow-lg">
      <div className="sticky top-0">
        <div className="flex justify-between text-gray-500 font-semibold mb-4">
          <span>Elements</span>
          <MenuIcon
            className="md:hidden inline"
            onClick={() => toggleElementsMenu()}
          />
        </div>
        {isElementsMenuVisible && (
          <>
            <Input
              className="p-4 mb-2 md:inline hidden"
              placeholder="Search element"
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
            <Droppable droppableId="elements" type="formItems">
              {(provided) => (
                <ScrollArea className="w-full whitespace-nowrap rounded-md p-2">
                  <div
                    className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-1 xxs:gap-4 gap-1 max-h-[500px]"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {elements
                      .filter((element) =>
                        element.title
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      )
                      .map((element, index) => (
                        <Draggable
                          key={element.key}
                          draggableId={element.key}
                          index={index}
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
                  <ScrollBar orientation="vertical" forceMount />
                </ScrollArea>
              )}
            </Droppable>
          </>
        )}
      </div>
    </div>
  );
}
