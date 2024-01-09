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
} from "./Items";
import { FormType } from "@/lib/graphql";
import { FormComponentProps, LiveComponentMapper } from "@/types";
import { ScrollArea } from "../ui";

type ComponentMapper = ({ item, selected }: FormComponentProps) => JSX.Element;

const componentMapper: Record<FormType, ComponentMapper> = {
  [FormType.Short]: Short,
  [FormType.Long]: Long,
  [FormType.SingleChoice]: Single,
  [FormType.MultipleChoice]: Short,
  [FormType.Slider]: Short,
  [FormType.Date]: Short,
  [FormType.Dropdown]: Short,
};

const editableComponentMapper: Record<FormType, LiveComponentMapper> = {
  [FormType.Short]: LiveShortComponent,
  [FormType.Long]: LiveLongComponent,
  [FormType.SingleChoice]: LiveOneChoice,
  [FormType.MultipleChoice]: LiveShortComponent,
  [FormType.Slider]: LiveShortComponent,
  [FormType.Date]: LiveShortComponent,
  [FormType.Dropdown]: LiveShortComponent,
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
          {editMode ? (
            <>
              {items
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                  const DynamicComponent = componentMapper[item.type];
                  return (
                    <DynamicComponent
                      key={item.id}
                      item={item}
                      selected={selectedComponent === item.id}
                    />
                  );
                })}
            </>
          ) : (
            <>
              {items
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                  const DynamicComponent = editableComponentMapper[item.type];
                  return (
                    <DynamicComponent
                      key={item.id}
                      id={item.id}
                      question={item.name}
                      image={item.image?.dataUrl}
                      options={item.options}
                      styling={{
                        primary: theme.primaryColor,
                        secondary: theme.secondaryColor,
                        QFont: theme.Question.fontFamily,
                        Qsize: theme.Question.fontSize,
                        Tfont: theme.Text.fontFamily,
                        Tsize: theme.Text.fontSize,
                      }}
                    />
                  );
                })}
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
