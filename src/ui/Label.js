import { cn } from "@/utils/cn";
import * as LabelPrimitive from "@radix-ui/react-label";
import { forwardRef } from "react";

const Label = forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
