import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/types";

interface ProjectHeroProps {
  project: ProjectMeta;
  dark?: boolean;
}

export function ProjectHero({ project, dark = false }: ProjectHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden",
        dark ? "bg-[#0D0B14]" : "bg-background"
      )}
    >
      {/* Ambient glow for dark pages */}
      {dark && (
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="container-content relative">
        {/* Number */}
        <span
          className={cn(
            "font-mono text-mono-s block mb-6",
            dark ? "text-[#6B6080]" : "text-text-tertiary"
          )}
          aria-hidden="true"
        >
          {project.number}
        </span>

        {/* Title */}
        <h1
          className={cn(
            "font-display text-display-m md:text-display-l mb-6",
            dark ? "text-[#E8E0F0]" : "text-text-primary"
          )}
        >
          {project.title}
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "font-body text-body-l md:text-body-xl max-w-[640px] mb-10",
            dark ? "text-[#9B90B0]" : "text-text-secondary"
          )}
        >
          {project.subtitle}
        </p>

        {/* Meta row */}
        <div
          className={cn(
            "flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t",
            dark ? "border-[#2D2540]" : "border-border"
          )}
        >
          {[
            { label: "Role", value: project.role },
            { label: "Timeline", value: project.timeline },
            { label: "Year", value: project.year },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className={cn(
                  "section-label",
                  dark ? "text-[#6B6080]" : "text-text-tertiary"
                )}
              >
                {label}
              </span>
              <span
                className={cn(
                  "font-body text-body-m font-medium",
                  dark ? "text-[#E8E0F0]" : "text-text-primary"
                )}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
