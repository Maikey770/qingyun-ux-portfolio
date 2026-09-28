import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number?: string;
  label: string;
  heading: string;
  subtext?: string;
  className?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionHeader({
  number,
  label,
  heading,
  subtext,
  className,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {number && (
        <span
          className={cn(
            "font-mono text-mono-s block mb-4",
            dark ? "text-[#6B6080]" : "text-text-tertiary"
          )}
          aria-hidden="true"
        >
          {number.padStart(2, "0")}
        </span>
      )}

      <div
        className={cn(
          "w-full h-px mb-4",
          dark ? "bg-[#2D2540]" : "bg-border"
        )}
        aria-hidden="true"
      />

      <span
        className={cn(
          "section-label block mb-4",
          dark ? "text-[#9B90B0]" : "text-text-secondary"
        )}
      >
        {label}
      </span>

      <h2
        className={cn(
          "font-display text-display-s md:text-display-m",
          dark ? "text-[#E8E0F0]" : "text-text-primary",
          centered ? "mx-auto max-w-3xl" : "max-w-3xl"
        )}
      >
        {heading}
      </h2>

      {subtext && (
        <p
          className={cn(
            "font-body text-body-l mt-4 max-w-prose",
            dark ? "text-[#9B90B0]" : "text-text-secondary",
            centered && "mx-auto"
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
