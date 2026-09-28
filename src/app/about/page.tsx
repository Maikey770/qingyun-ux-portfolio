import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerReveal, StaggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "Qingyun Yao — Product & UX Designer at Cornell MPS Information Science. Background in Human-Centered Design and Development from Penn State.",
};

// ─── OPTIONAL HEADSHOT FLAG ──────────────────────────────────────────────────
// Set to true and add /public/images/about/headshot.jpg to enable the photo.
const SHOW_HEADSHOT = false;
const HEADSHOT_PATH = "/images/about/headshot.jpg";

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* ─── INTRO ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-content">
          <div className={`grid grid-cols-1 gap-12 md:gap-16 ${SHOW_HEADSHOT ? "md:grid-cols-2 items-start" : ""}`}>
            {/* Text */}
            <div className={SHOW_HEADSHOT ? "" : "max-w-3xl"}>
              <Reveal>
                <span className="section-label text-text-tertiary block mb-6">
                  About
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-display-m md:text-display-l text-text-primary mb-8">
                  I design the parts that feel human, and build the parts that make them real.
                </h1>
              </Reveal>

              <Reveal delay={0.2} className="space-y-5">
                <p className="font-body text-body-l text-text-secondary leading-relaxed">
                  I grew up between disciplines — studying Human-Centered Design and Development at
                  Penn State taught me to think through my hands. Pursuing
                  Information Science at Cornell taught me to think through
                  systems. The overlap is where I live.
                </p>
                <p className="font-body text-body-l text-text-secondary leading-relaxed">
                  Right now, I&apos;m focused on the intersection of AI, human
                  behavior, and embodied interaction — designing products that
                  understand people, not just serve them. I&apos;m especially drawn
                  to health technology, emotional design, and education.
                </p>
                <p className="font-body text-body-l text-text-secondary leading-relaxed">
                  When I&apos;m not designing or building, I&apos;m usually thinking
                  about why people make the decisions they do — and how a
                  better-designed environment might change those decisions.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
                <span className="tag whitespace-normal max-w-full">Open to Summer 2027 Product Design & UX Design Internships</span>
                <span className="tag">Product Design</span>
                <span className="tag">UX Design</span>
                <span className="tag">UI Design</span>
              </Reveal>
            </div>

            {/* Optional headshot */}
            {SHOW_HEADSHOT && (
              <Reveal delay={0.15} className="relative">
                <div className="relative aspect-[3/4] w-full max-w-sm rounded-card overflow-hidden bg-surface">
                  <Image
                    src={HEADSHOT_PATH}
                    alt="Qingyun Yao"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="01"
              label="Education"
              heading="Where I trained"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {[
              {
                school: "Cornell University",
                degree: "M.P.S. Information Science",
                detail: "Human-Computer Interaction · UX Research · Human-AI Interaction · Design Research",
                status: "Current",
                years: "2026 — 2027",
              },
              {
                school: "Penn State University",
                degree: "B.S. Human-Centered Design and Development (HCDD)",
                detail: "HCI · Product Design · User Research · Design Technology",
                status: "Graduated",
                years: "May 2026",
              },
            ].map((edu, i) => (
              <Reveal key={edu.school} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-card p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-caption text-text-tertiary">
                      {edu.years}
                    </span>
                    <span className="tag">{edu.status}</span>
                  </div>
                  <h3 className="font-display text-[22px] text-text-primary mb-1 mt-3">
                    {edu.school}
                  </h3>
                  <p className="font-body text-body-m font-medium text-text-secondary mb-3">
                    {edu.degree}
                  </p>
                  <p className="font-body text-body-s text-text-tertiary">
                    {edu.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="02"
              label="Skills & Tools"
              heading="What I work with"
            />
          </Reveal>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <StaggerChild key={cat.name}>
                <div>
                  <h3 className="font-body text-[11px] font-medium uppercase tracking-[0.1em] text-text-tertiary mb-4">
                    {cat.name}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="font-body text-body-m text-text-secondary"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerChild>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ─── DESIGN VALUES ─────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="03"
              label="Design Values"
              heading="What I believe about design"
            />
          </Reveal>

          <div className="flex flex-col gap-12 max-w-3xl">
            {[
              {
                quote: "Constraints are design tools.",
                body: "The no-advice rule in Between Feelings, the ethical boundaries in Pulse of Motion. Limits clarify what a product is for — and force better answers than infinite possibility ever would.",
              },
              {
                quote: "A waiting state is part of the experience.",
                body: "Async pattern generation means users see a designed 'generating' state instead of a broken spinner. Design lives at every layer of a system, not just the screen.",
              },
              {
                quote: "I don't separate research from making.",
                body: "Understanding users and prototyping solutions are the same activity at different resolutions. The fastest way to learn what a user needs is often to build them something imperfect and watch what they do.",
              },
            ].map((value, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-3">
                  <blockquote className="font-display text-display-s text-text-primary">
                    &ldquo;{value.quote}&rdquo;
                  </blockquote>
                  <p className="font-body text-body-l text-text-secondary pl-0 md:pl-6 border-l-0 md:border-l-2 border-border">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-label text-text-tertiary block mb-4">Contact</span>
              <h2 className="font-display text-display-s md:text-display-m text-text-primary mb-6">
                Let&apos;s talk.
              </h2>
              <p className="font-body text-body-l text-text-secondary mb-8">
                I&apos;m open to internship roles, collaborations, and interesting
                design problems. The best way to reach me is by email.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:yaoqingyun849@gmail.com"
                  className="inline-flex items-center gap-2 font-body text-body-m font-medium text-text-primary hover:opacity-60 transition-opacity"
                >
                  yaoqingyun849@gmail.com →
                </a>
                <a
                  href="https://www.linkedin.com/in/qingyun-yao-79b74b369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-body-m text-text-secondary hover:text-text-primary transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="/Qingyun_Yao_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-body-m text-text-secondary hover:text-text-primary transition-colors"
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
