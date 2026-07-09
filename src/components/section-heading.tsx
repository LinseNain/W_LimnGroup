import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-widest",
            light ? "text-turquoise-light" : "text-turquoise"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight text-balance",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg leading-relaxed",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
