import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function AboutStrip() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="font-body text-body-l text-text-secondary leading-relaxed">
              I&apos;m Qingyun Yao — a Product & UX Designer studying Information Science at
              Cornell, with a background in Human-Centered Design and Development from Penn State.
              I work at the intersection of human behavior, technology, and the
              physical world.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-start md:justify-end">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-body-m font-medium text-text-primary hover:opacity-60 transition-opacity"
            >
              About Me →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
