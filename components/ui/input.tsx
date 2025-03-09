import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        app: "h-[32px] px-2 py-2 text-xs",
        sm: "h-6 px-2 py-2 text-xs",
        base: "h-8 px-2 py-2 text-xs",
        md: "h-9 px-3 py-2 text-sm",
        lg: "h-10 px-3 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "md",
    },
  }
);

export type InputVariant = VariantProps<typeof inputVariants>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariant {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
