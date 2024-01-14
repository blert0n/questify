import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  svgClassName?: string;
  inputClassName?: string;
}

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, svgClassName, inputClassName, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-500 left-4",
            svgClassName
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Input
          type="text"
          placeholder="Search"
          className={cn(
            "bg-secondary pl-8 pr-4 rounded-3xl border-gray-200",
            inputClassName
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Search.displayName = "Search";

export { Search };
