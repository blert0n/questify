import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface P {
  placeholder?: string | JSX.Element;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  options: {
    value: string;
    placeholder: string | JSX.Element;
  }[];
  onChange?: (value: string) => void;
}

export function CustomSelect({
  options,
  placeholder = "Select option",
  value,
  defaultValue,
  onChange,
  disabled = false,
}: P) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={(value) => onChange?.(value)}
      disabled={disabled}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.placeholder}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
