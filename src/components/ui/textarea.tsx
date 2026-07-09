import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-input bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors",
        "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-turquoise/30",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
