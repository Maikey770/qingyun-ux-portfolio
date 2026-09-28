import { cn } from "@/lib/utils";

interface DecisionCardProps {
  number: string;
  title: string;
  decision: string;
  alternatives: string;
  rationale: string;
  accentColor?: string;
  dark?: boolean;
  className?: string;
}

export function DecisionCard({
  number,
  title,
  decision,
  alternatives,
  rationale,
  accentColor = "#9B7FBF",
  dark = false,
  className,
}: DecisionCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-code border overflow-hidden p-7",
        dark
          ? "bg-[#1A1525] border-[#2D2540]"
          : "bg-surface border-border",
        className
      )}
      style={{ "--decision-accent": accentColor } as React.CSSProperties}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      {/* Number */}
      <span
        className={cn(
          "font-mono text-mono-s block mb-3",
          dark ? "text-[#6B6080]" : "text-text-tertiary"
        )}
        aria-hidden="true"
      >
        DECISION {number.padStart(2, "0")}
      </span>

      {/* Title */}
      <h3
        className={cn(
          "font-body text-[18px] font-semibold leading-snug mb-5",
          dark ? "text-[#E8E0F0]" : "text-text-primary"
        )}
      >
        {title}
      </h3>

      <div
        className={cn(
          "h-px w-full mb-5",
          dark ? "bg-[#2D2540]" : "bg-border"
        )}
        aria-hidden="true"
      />

      <dl className="flex flex-col gap-5">
        <div>
          <dt
            className={cn(
              "font-body text-[11px] font-medium uppercase tracking-[0.08em] mb-1.5",
              dark ? "text-[#6B6080]" : "text-text-tertiary"
            )}
          >
            Decision Made
          </dt>
          <dd
            className={cn(
              "font-body text-body-m",
              dark ? "text-[#E8E0F0]" : "text-text-primary"
            )}
          >
            {decision}
          </dd>
        </div>

        <div>
          <dt
            className={cn(
              "font-body text-[11px] font-medium uppercase tracking-[0.08em] mb-1.5",
              dark ? "text-[#6B6080]" : "text-text-tertiary"
            )}
          >
            Alternatives Considered
          </dt>
          <dd
            className={cn(
              "font-body text-body-m",
              dark ? "text-[#9B90B0]" : "text-text-secondary"
            )}
          >
            {alternatives}
          </dd>
        </div>

        <div>
          <dt
            className={cn(
              "font-body text-[11px] font-medium uppercase tracking-[0.08em] mb-1.5",
              dark ? "text-[#6B6080]" : "text-text-tertiary"
            )}
          >
            Why This Choice
          </dt>
          <dd
            className={cn(
              "font-body text-body-m",
              dark ? "text-[#E8E0F0]" : "text-text-primary"
            )}
          >
            {rationale}
          </dd>
        </div>
      </dl>
    </div>
  );
}
