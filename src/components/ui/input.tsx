import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 rounded-lg border border-input bg-white px-4 py-2 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors",
        "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-turquoise/30",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
