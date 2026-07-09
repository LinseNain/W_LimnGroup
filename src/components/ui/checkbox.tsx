import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <span className="relative inline-flex">
      <input
        type="checkbox"
        data-slot="checkbox"
        className={cn(
          "peer size-5 shrink-0 appearance-none rounded-md border-2 border-input bg-white outline-none transition-colors",
          "checked:border-primary checked:bg-primary",
          "focus-visible:ring-2 focus-visible:ring-turquoise/30",
          "aria-invalid:border-destructive",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      <Check
        aria-hidden
        strokeWidth={3}
        className="pointer-events-none absolute inset-0 m-auto size-3.5 text-primary-foreground opacity-0 peer-checked:opacity-100"
      />
    </span>
  );
}

export { Checkbox };
