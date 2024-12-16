import { FormItem, Theme } from "@/types";
import {
  LiveShortComponent,
  LiveLongComponent,
  LiveOneChoice,
  LiveMultiChoice,
  LiveLinearScale,
  LiveDate,
  LiveDropdown,
  HeaderImage,
  LiveHeader,
  LiveText,
  LiveCheckboxGrid,
  LiveMultipleChoiceGrid,
} from "./Items";
import { FormItemType_Enum } from "@/lib/graphql";
import { LiveRating } from "./Items/Rating/Live";

const EMPTY_COMPONENT = () => <span />;

const componentMapper = {
  [FormItemType_Enum.Text]: LiveText,
  [FormItemType_Enum.Short]: LiveShortComponent,
  [FormItemType_Enum.Long]: LiveLongComponent,
  [FormItemType_Enum.SingleChoice]: LiveOneChoice,
  [FormItemType_Enum.MultipleChoice]: LiveMultiChoice,
  [FormItemType_Enum.LinearScale]: LiveLinearScale,
  [FormItemType_Enum.Date]: LiveDate,
  [FormItemType_Enum.Dropdown]: LiveDropdown,
  [FormItemType_Enum.SingleChoiceGrid]: LiveCheckboxGrid,
  [FormItemType_Enum.MultipleChoiceGrid]: LiveMultipleChoiceGrid,
  [FormItemType_Enum.Rating]: LiveRating,
};

interface P {
  theme: Theme;
  items: FormItem[];
  readonly?: boolean;
}

export default function LiveForm({ theme, items, readonly = false }: P) {
  return (
    <>
      <HeaderImage theme={theme} />
      <LiveHeader theme={theme} />
      {items
        .sort((a, b) => a.order - b.order)
        .map((item) => {
          const DynamicComponent = item.type
            ? componentMapper[item.type]
            : EMPTY_COMPONENT;
          return (
            <DynamicComponent
              key={item.id}
              item={item}
              theme={theme}
              readonly={readonly}
            />
          );
        })}
    </>
  );
}
