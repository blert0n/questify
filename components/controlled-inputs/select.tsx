import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type SelectVariant,
} from "@/components/ui/select";

export type AppSelectProps = {
  placeholder?: string | JSX.Element;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  options?: {
    value: string;
    placeholder: string | JSX.Element;
  }[];
  onChange?: (value: string) => void;
  size?: SelectVariant["size"];
  checkIconStyle?: React.CSSProperties;
};

export function AppSelect({
  options,
  placeholder = "Select option",
  value,
  defaultValue,
  onChange,
  disabled = false,
  size,
  checkIconStyle,
}: AppSelectProps) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={(value) => onChange?.(value)}
      disabled={disabled}
    >
      <SelectTrigger size={size}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {(options ?? []).map((option, index) => (
            <SelectItem
              key={index}
              value={option.value}
              checkIconStyle={checkIconStyle}
            >
              {option.placeholder}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
