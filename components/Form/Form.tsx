import { useFormSelectors } from "@/store";
import {
  HeaderImage,
  FormHeader,
  Short,
  Long,
  Single,
  LiveLongComponent,
  LiveOneChoice,
  LiveShortComponent,
  Multi,
  LiveMultiChoice,
  Dropdown,
  LiveDropdown,
  LinearScale,
  LiveLinearScale,
  Date,
  LiveDate,
} from "./Items";
import { FormType } from "@/lib/graphql";
import { ScrollArea } from "../ui";

const componentMapper = (editMode: boolean) => {
  return {
    [FormType.Short]: editMode ? Short : LiveShortComponent,
    [FormType.Long]: editMode ? Long : LiveLongComponent,
    [FormType.SingleChoice]: editMode ? Single : LiveOneChoice,
    [FormType.MultipleChoice]: editMode ? Multi : LiveMultiChoice,
    [FormType.LinearScale]: editMode ? LinearScale : LiveLinearScale,
    [FormType.Date]: editMode ? Date : LiveDate,
    [FormType.Dropdown]: editMode ? Dropdown : LiveDropdown,
  };
};

interface P {
  id?: number;
}

export const Form = ({ id }: P) => {
  const selectedComponent = useFormSelectors.use.selectedComponent();
  const theme = useFormSelectors.use.theme();
  const editMode = useFormSelectors.use.editMode();
  const items = useFormSelectors.use.items();

  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl ">
      <HeaderImage />
      <FormHeader selected={selectedComponent === "formHeader"} />
      <ScrollArea>
        <div className="flex flex-col gap-4">
          <>
            {items
              .sort((a, b) => a.order - b.order)
              .map((item) => {
                const DynamicComponent = componentMapper(editMode)[item.type];
                return (
                  <DynamicComponent
                    key={item.id}
                    item={item}
                    selected={selectedComponent === item.id}
                    theme={theme}
                  />
                );
              })}
          </>
        </div>
      </ScrollArea>
    </div>
  );
};
