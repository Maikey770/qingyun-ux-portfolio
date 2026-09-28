import { marqueeItems } from "@/data/projects";

export function SkillsMarquee() {
  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-10 border-t border-b border-border overflow-hidden">
      <div className="flex overflow-hidden">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-8 flex-shrink-0">
              <span className="font-body text-body-s text-text-secondary whitespace-nowrap">
                {item}
              </span>
              <span className="text-text-tertiary" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
