import { FormType } from "@/types";
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
import { iconProps } from "@/types";

export const Options = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="grid grid-cols-1 xxs:grid-cols-2 gap-2 xxs:gap-4">
      <IconOption
        icon={<Space {...iconProps} />}
        title="Short"
        description="Allows you to provide brief responses"
        type={FormType.Short}
        toggle={toggle}
      />
      <IconOption
        icon={<Text {...iconProps} />}
        title="Long"
        description="Allows you to provide detailed responses or comments"
        type={FormType.Long}
        toggle={toggle}
      />
      <IconOption
        icon={<Check {...iconProps} />}
        title="Single Choice"
        description="Select a single choice from the list"
        type={FormType.SingleChoice}
        toggle={toggle}
      />
      <IconOption
        icon={<ListChecks {...iconProps} />}
        title="Multiple choice"
        description="Select multiple choices from the list"
        type={FormType.MultipleChoice}
        toggle={toggle}
      />

      <IconOption
        icon={<ChevronDown {...iconProps} />}
        title="Dropdown"
        description="Select from a dropdown list of options"
        type={FormType.Dropdown}
        toggle={toggle}
      />
      <IconOption
        icon={<SlidersHorizontal {...iconProps} />}
        title="Linear Scale"
        description="Select a value within a predefined range"
        type={FormType.LinearScale}
        toggle={toggle}
      />
      <IconOption
        icon={<Calendar {...iconProps} />}
        title="Date"
        description="Select a specific date using the date picker"
        type={FormType.Date}
        toggle={toggle}
      />
    </div>
  );
};
