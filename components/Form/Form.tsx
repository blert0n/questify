import { useFormSelectors } from "@/store";
import { HeaderImage, FormHeader, Short, Long } from "./Items";
import { FormType } from "@/lib/graphql";
import { FormComponentProps } from "@/types";
import { ScrollArea } from "../ui";

type ComponentMapper = ({ item, selected }: FormComponentProps) => JSX.Element;

const componentMapper: Record<FormType, ComponentMapper> = {
  [FormType.Short]: Short,
  [FormType.Long]: Long,
  [FormType.SingleChoice]: Short,
  [FormType.MultipleChoice]: Short,
  [FormType.Slider]: Short,
  [FormType.Date]: Short,
  [FormType.Dropdown]: Short,
};

interface P {
  id?: number;
}

export const Form = ({ id }: P) => {
  const selectedComponent = useFormSelectors.use.selectedComponent();
  const editMode = useFormSelectors.use.editMode();
  const items = useFormSelectors.use.items();

  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl ">
      <HeaderImage />
      <FormHeader selected={selectedComponent === "formHeader"} />
      <ScrollArea>
        <div className="flex flex-col gap-4">
          {items
            .sort((a, b) => a.order - b.order)
            .map((item) => {
              const DynamicComponent = componentMapper[item.type];
              return (
                <DynamicComponent
                  key={item.id}
                  item={item}
                  selected={selectedComponent === item.id}
                  editMode={editMode}
                />
              );
            })}
        </div>
      </ScrollArea>
    </div>
  );
};
