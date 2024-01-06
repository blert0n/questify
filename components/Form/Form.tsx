import { useFormSelectors } from "@/store";
import { FormHeader } from "./Items/FormHeader";
import { HeaderImage } from "./Items/HeaderImage";
import { Short } from "./Items/Short/Short";
import { FormType } from "@/lib/graphql";
import { FormComponentProps } from "@/types";

type ComponentMapper = ({ item, selected }: FormComponentProps) => JSX.Element;

const componentMapper: Record<FormType, ComponentMapper> = {
  [FormType.Short]: Short,
  [FormType.Long]: Short,
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
      {items
        .sort((a, b) => a.order - b.order)
        .map((item) => {
          const DynamicComponent = componentMapper[item.type];
          return (
            <DynamicComponent
              item={item}
              key={item.id}
              selected={selectedComponent === item.id}
              editMode={editMode}
            />
          );
        })}
    </div>
  );
};
