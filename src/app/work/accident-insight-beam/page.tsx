import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerReveal, StaggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArtifactImage, PortraitArtifact, FullBleedImage } from "@/components/ui/ImageTreatments";

export const metadata: Metadata = {
  title: "Accident Insight Beam",
  description: "Roadside emergency alert system that transforms guardrail infrastructure into a real-time warning network, reducing secondary highway collisions.",
};

export default function AccidentInsightBeamPage() {
  return (
    <div className="pt-28 md:pt-36">

      {/* HERO */}
      <section className="relative bg-ai-bg overflow-hidden">
        <div className="container-content pt-16 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="pb-16">
              <Reveal>
                <span className="font-mono text-mono-s text-[#6B6060] block mb-4">03</span>
                <h1 className="font-display text-display-m md:text-display-l text-[#F0F0F0] mb-4">
                  Accident Insight Beam
                </h1>
                <p className="font-body text-body-l text-[#9B9090] max-w-[520px] mb-8">
                  A guardrail-mounted emergency system that activates a sequential light strip —
                  shifting green to red as approaching vehicles close in on the hazard.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-[#2D2020]">
                  {[
                    { label: "Role", value: "Product Designer & UX Researcher" },
                    { label: "Domain", value: "Transportation Safety" },
                    { label: "Timeline", value: "May 2024 — Aug 2025" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <span className="section-label text-[#6B6060] block mb-1">{label}</span>
                      <span className="font-body text-body-m font-medium text-[#F0F0F0]">{value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Scenario render — 4:3 landscape photo, cover fine */}
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] rounded-t-card overflow-hidden">
                <Image
                  src="/images/ai-scenario-render.jpg"
                  alt="Accident Insight Beam scenario — driver pressing guardrail emergency button, activating red light warning strip for approaching vehicles"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              // TODO(source): Supply original citation, population, geography and timeframe for secondary-collision mortality.
              { value: ">60%", label: "Secondary collision mortality rate" },
              // TODO(source): Supply original citation, currency, geography and period; ai-background.jpg says property damage but does not establish annual scope. Preserve existing statistic pending confirmation.
              { value: "$1T", label: "Annual property damage" },
              // TODO(source): Supply original citation and denominator for the proportion of secondary accidents.
              { value: "40–60%", label: "Accidents that are secondary" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div>
                  <span className="stat-number block" style={{ color: "#C8382A" }}>{s.value}</span>
                  <span className="font-body text-body-m text-text-secondary mt-1 block">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="01" label="The Problem" heading="Secondary collisions are as deadly as the first." />
          </Reveal>

          {/* Background — 4:3 landscape */}
          <Reveal className="mb-10">
            <ArtifactImage
              src="/images/ai-background.jpg"
              alt="Highway accident analysis — mortality rate over 60%, $1 trillion property damage, current road safety solutions comparison: warning devices, emergency tail lights, vehicle radar, V2X, warning systems"
              caption="Current solutions and their gaps — no infrastructure-level response exists"
              bgColor="bg-[#111111]"
              aspectRatio="4/3"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal>
              <p className="font-body text-body-l text-text-secondary leading-relaxed">
                When a driver pulls over after an accident, they face immediate new danger:
                approaching vehicles that don&apos;t see the hazard until it&apos;s too late.
                Current solutions depend entirely on the driver and car.
                <strong className="text-text-primary"> There is no infrastructure-level response.</strong>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-3">
                {[
                  ["Warning Triangle", "Invisible at night or in poor weather"],
                  ["Emergency Tail Lights", "Not ideal for extended deployment"],
                  ["Vehicle Radar", "High cost, technical complexity"],
                  ["V2X Hardware", "Limited adoption, environment-sensitive"],
                ].map(([k, v]) => (
                  <div key={k as string} className="flex items-start gap-4 py-2 border-b border-border last:border-0">
                    <span className="font-body text-body-s font-medium text-text-primary w-36 flex-shrink-0">{k}</span>
                    <span className="font-body text-body-s text-text-secondary">{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="section-padding border-t border-border bg-surface">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="02" label="Research" heading="Who needs this on the road" />
          </Reveal>

          {/* Two portrait slides side by side — same 3/4 AR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Reveal>
              <PortraitArtifact
                src="/images/ai-personas.jpg"
                alt="Three user personas — Emily (student, panics in emergencies), David (office worker, finds warning signs hard to notice), Michael (manager, too little time to react)"
                caption="3 personas · frustrated state, goals, motivations"
                bgColor="bg-background"
                aspectRatio="3/4"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <PortraitArtifact
                src="/images/ai-journey-map.jpg"
                alt="User journey map — 6 phases: collision through waiting for rescue. Emotional arc: Scared → Worried → Overwhelmed → Anxious → Irritable → Calm"
                caption="Emotional arc: Scared → Overwhelmed → Anxious → Calm"
                bgColor="bg-background"
                aspectRatio="3/4"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* IDEATION */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="03" label="Ideation" heading="From mindmap to physical button" />
          </Reveal>

          {/* Ideation — very wide 16/7 */}
          <Reveal className="mb-6">
            <ArtifactImage
              src="/images/ai-ideation.jpg"
              alt="Ideation mindmap — sight-based vs hearing-based alarm mechanisms. Automatic alarms (radar, camera, GPS, V2V, RSU) vs manual alarms (hazard lights, mobile). Selected: physical emergency button on guardrail."
              caption="Analysis: automatic vs. manual alarms → selected physical emergency button"
              bgColor="bg-surface"
              aspectRatio="16/7"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              {/* Sketch — approximately 1:1 */}
              <ArtifactImage
                src="/images/ai-sketch.jpg"
                alt="Concept sketches — button placement on guardrail, light column color scenarios (red/yellow/green), arming mechanism, distance calculations between lights"
                caption="Sketches: placement · color coding · distance scenarios"
                bgColor="bg-surface"
                aspectRatio="1/1"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-body-l text-text-secondary leading-relaxed mb-6">
                Analysis revealed a clear gap: no physical emergency infrastructure
                on the roadside itself. All current solutions depend on the driver or car.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { opt: "Car alarm popularization", why: "Relies on driver having correct vehicle" },
                  { opt: "Physical emergency button", why: "✓ Independent of vehicle, always available" },
                  { opt: "RSU dangerous road pilot", why: "Too expensive for wide deployment" },
                ].map((o) => (
                  <div key={o.opt} className="bg-surface border border-border rounded-lg p-4">
                    <p className="font-body text-body-s font-medium text-text-primary mb-1">{o.opt}</p>
                    <p className="font-body text-body-s text-text-secondary">{o.why}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section className="section-padding border-t border-border bg-ai-bg">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="04" label="The System" heading="Infrastructure becomes the warning" dark />
          </Reveal>

          {/* System diagram — very wide 16/7 */}
          <Reveal className="mb-8">
            <ArtifactImage
              src="/images/ai-light-system.jpg"
              alt="Accident Insight Beam system — in-car display confirms alarm, connected to dashboard showing ambulance route, light strip color zones: 0-100m red, 100-800m yellow, over 800m green"
              caption="Driver activates → light strip illuminates far-to-near · Green 800m+ · Yellow 100-800m · Red 0-100m"
              bgColor="bg-[#0A0A0A]"
              aspectRatio="16/7"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { range: "0–100m", color: "#C8382A", label: "Red Light", desc: "Immediate danger — brake hard" },
              { range: "100–800m", color: "#D4862A", label: "Yellow Light", desc: "Caution — reduce speed" },
              { range: ">800m", color: "#2D7A4A", label: "Green Light", desc: "Awareness — hazard ahead" },
            ].map((zone) => (
              <Reveal key={zone.range}>
                <div className="bg-[#1A1A1A] border border-[#2D2020] rounded-card p-5 flex gap-4 items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: zone.color }} />
                  <div>
                    <p className="font-body text-body-m font-medium text-[#F0F0F0]">{zone.range} — {zone.label}</p>
                    <p className="font-body text-body-s text-[#9B9090] mt-1">{zone.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOTYPE */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="05" label="Prototype" heading="Physical emergency button" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              {/* Prototype photo — portrait 3/4 */}
              <PortraitArtifact
                src="/images/ai-prototype.jpg"
                alt="Physical prototype — 4-panel: 3D printed enclosure, black tray, circuit board assembly, final module with red emergency button"
                caption="3D printed enclosure + circuit board assembly"
                bgColor="bg-surface"
                aspectRatio="3/4"
              />
            </Reveal>
            <Reveal delay={0.1}>
              {/* Highway render — 4:3 landscape */}
              <ArtifactImage
                src="/images/ai-model.jpg"
                alt="Physical model build — the accident insight beam button mounted on guardrail, showing the accident scenario context with vehicle and driver"
                caption="Physical model in accident scenario context"
                bgColor="bg-[#0A0A0A]"
                aspectRatio="16/7"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="06" label="Reflection" heading="Prototype scope and next steps" />
          </Reveal>
          {/* TODO(timeline): The original five-week prototype scope below may be a phase of the May 2024–Aug 2025 resume timeline; confirm phase dates. */}
          <ul className="flex flex-col gap-4 max-w-2xl">
            {[
              "The color-coded distance gradient is the key insight — universal visual language with zero cognitive load at speed.",
              "Physical button weatherproofing and vandalism resistance were identified but not resolved within 5 weeks.",
              "Next: power management design (solar vs. wired) and integration with highway management systems.",
              "Vehicle-reported activation would remove the driver leaving the car entirely.",
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="flex items-start gap-3">
                  <span className="text-ai-accent mt-1.5 flex-shrink-0">→</span>
                  <p className="font-body text-body-m text-text-secondary">{item}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* NEXT */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <Link href="/work/moonpath-keeper" className="group flex items-center justify-between py-6 hover:opacity-70 transition-opacity">
              <div>
                <span className="section-label text-text-tertiary block mb-2">Next Project</span>
                <span className="font-display text-display-s text-text-primary">Moonpath Keeper →</span>
                <p className="font-body text-body-m text-text-secondary mt-1">Game Design · Interaction Design · Environmental Education</p>
              </div>
              <span className="text-text-tertiary text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
