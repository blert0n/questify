import { FormType } from "@/lib/graphql";
import { IconOption } from "./IconOption";
import {
  Text,
  Space,
  Check,
  ChevronDown,
  ListChecks,
  SlidersHorizontal,
  Calendar,
} from "lucide-react";

const iconProps = {
  size: 20,
  className: "text-slate-700 hover:scale-110 cursor-pointer",
  strokeWidth: 1.5,
};

export const Options = () => {
  return (
    <div className="grid grid-cols-1 xxs:grid-cols-2 gap-2 xxs:gap-4">
      <IconOption
        icon={<Space {...iconProps} />}
        title="Short"
        description="Allows you to provide brief responses"
        type={FormType.Short}
      />
      <IconOption
        icon={<Text {...iconProps} />}
        title="Long"
        description="Allows you to provide detailed responses or comments"
        type={FormType.Long}
      />
      <IconOption
        icon={<Check {...iconProps} />}
        title="Single Choice"
        description="Select a single choice from the list"
        type={FormType.SingleChoice}
      />
      <IconOption
        icon={<ListChecks {...iconProps} />}
        title="Multiple choice"
        description="Select multiple choices from the list"
        type={FormType.MultipleChoice}
      />

      <IconOption
        icon={<ChevronDown {...iconProps} />}
        title="Dropdown"
        description="Select from a dropdown list of options"
        type={FormType.Dropdown}
      />
      <IconOption
        icon={<SlidersHorizontal {...iconProps} />}
        title="Slider"
        description="Select a value within a predefined range"
        type={FormType.Slider}
      />
      <IconOption
        icon={<Calendar {...iconProps} />}
        title="Date"
        description="Select a specific date using the date picker"
        type={FormType.Date}
      />
    </div>
  );
};
