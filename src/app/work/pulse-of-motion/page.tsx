import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerReveal, StaggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArtifactImage, PortraitArtifact } from "@/components/ui/ImageTreatments";

export const metadata: Metadata = {
  title: "Pulse of Motion",
  description: "Wearable knee device using rhythmic auditory cues to improve post-stroke gait. 20% stride improvement in the documented prototype observation (Day 4–11).",
};

export default function PulseOfMotionPage() {
  return (
    <div className="pt-28 md:pt-36">

      {/* ── HERO: product render ──────────────────────────────────────── */}
      <section className="relative bg-pm-bg overflow-hidden">
        <div className="container-content pt-16 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="pb-16">
              <Reveal>
                <span className="font-mono text-mono-s text-text-tertiary block mb-4">02</span>
                <h1 className="font-display text-display-m md:text-display-l text-text-primary mb-4">
                  Pulse of Motion
                </h1>
                <p className="font-body text-body-l text-text-secondary max-w-[520px] mb-8">
                  A wearable knee device that emits rhythmic auditory cues to guide
                  stroke patients toward symmetrical gait during home rehabilitation.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-border">
                  {[
                    { label: "Role", value: "HCI Designer & Hardware Prototyper" },
                    { label: "Domain", value: "Health Technology" },
                    { label: "Timeline", value: "12 weeks · 2024" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <span className="section-label text-text-tertiary block mb-1">{label}</span>
                      <span className="font-body text-body-m font-medium text-text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Product render — clean photo, AR ~1.54, cover is fine */}
            <Reveal delay={0.15}>
              <div className="relative rounded-t-card overflow-hidden" style={{ aspectRatio: "3/2" }}>
                <Image
                  src="/images/pm-3d-render.jpg"
                  alt="Pulse of Motion — 3D product render of the knee-mounted wearable device with speaker, silicone pads, and adjustable velcro strap"
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

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20%", label: "Stride length improvement", sub: "Prototype observation · Day 4–11" },
              { value: "5%", label: "Step frequency improvement", sub: "Prototype · rounded from 42 → 44 steps/min" },
              { value: "3", label: "Stakeholders interviewed", sub: "Patient, doctor, family" },
              { value: "11", label: "Day of final observation", sub: "Records shown: Days 4, 7, 11" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="pb-6 border-b border-border md:border-0">
                  <span className="stat-number block" style={{ color: "#3D7AB5" }}>{s.value}</span>
                  <span className="font-body text-body-m text-text-secondary block mt-1">{s.label}</span>
                  <span className="font-body text-caption text-text-tertiary">{s.sub}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="01" label="The Problem" heading="When patients go home, progress stalls." />
          </Reveal>

          {/* Journey map — 4:3 landscape, contains all 5 stages */}
          <Reveal className="mb-10">
            <ArtifactImage
              src="/images/pm-journey-map.jpg"
              alt="Traditional stroke recovery journey — 5 stages: Stroke Onset, Hospitalization, Clinical Rehab, Home Discharge, Self-Rehab. Design focus highlighted on stages 4–5."
              caption="Design focus: stages 4–5, where professional supervision ends and the patient is alone"
              bgColor="bg-surface"
              aspectRatio="4/3"
            />
          </Reveal>

          {/* Text + portrait interview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <p className="font-body text-body-l text-text-secondary leading-relaxed mb-6">
                Stroke is the second leading cause of disability worldwide.
                Gait disturbance — the uneven, dragging walk from motor pathway damage —
                significantly reduces quality of life. Most rehabilitation happens in hospitals.
                When patients go home, the structured support disappears.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "No objective way to measure motor recovery at home",
                  "Incorrect exercise methods risk re-injury",
                  "Poor feedback loop between patient and healthcare providers",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                    <span className="text-pm-accent mt-1 flex-shrink-0">·</span>
                    <p className="font-body text-body-m text-text-secondary">{p}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              {/* Portrait — 3/4 AR */}
              <PortraitArtifact
                src="/images/pm-interview.jpg"
                alt="User research interviews — Patient Lin (stroke patient), Doctor Duan (rehab physician), and Family Member Zhao sharing perspectives on stroke rehabilitation challenges at home"
                caption="Interviews: patient · doctor · family"
                bgColor="bg-surface"
                aspectRatio="3/4"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── KEY INSIGHT ──────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border bg-pm-bg">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="02" label="Key Insight" heading="Rhythm as a design medium" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <p className="font-display text-display-s text-text-primary mb-6 leading-snug">
                Rhythmic auditory stimulation improves stride alignment in post-stroke patients.
              </p>
              <p className="font-body text-body-m text-text-secondary mb-6 leading-relaxed">
                Rhythmic cues help the motor cortex and auditory cortex coordinate —
                improving timing, stride symmetry, and walking speed.
                The product&apos;s job: deliver a beat precisely calibrated to the patient&apos;s own gait cycle.
              </p>
              <div className="bg-pm-surface border border-pm-accent/30 rounded-card p-5">
                <p className="font-body text-body-s font-medium text-text-primary mb-1">Referenced research · separate from prototype results</p>
                <p className="font-body text-body-s text-text-secondary">
                  Experimental group: stride 20.20 → 27.80 cm (+38%) vs.
                  control 20.13 → 20.47 cm (+2%, rounded). These are the pre/post-training group values in the research artifact below, not the prototype observation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              {/* TODO(source): The study citation in pm-verification.jpg is partially cropped; provide complete bibliographic details. */}
          {/* Verification chart — portrait 3/4 */}
              <PortraitArtifact
                src="/images/pm-verification.jpg"
                alt="Clinical research data table — Experimental group vs Control group comparisons: affected side stride length, stride difference between healthy and affected sides, step frequency, walking speed. Before vs after training."
                caption="Referenced research: experimental vs. control groups — pre/post-training stride data (pm-verification.jpg)"
                bgColor="bg-surface"
                aspectRatio="3/4"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EXPERIMENT ───────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="03" label="Experiment" heading="Data collection &amp; design evolution" />
          </Reveal>

          {/* Full experiment spread — 16/7, contains data collection + concept + iteration */}
          <Reveal className="mb-8">
            <ArtifactImage
              src="/images/pm-experiment.jpg"
              alt="Experiment Step 1: Data Collection — accelerometer at hip, knee, ankle; patient Juan Di gait waveforms; knee selected as optimal. Initial Data with patient profile. Initial Concept sketches: normal vs affected leg, device options. Chosen device concept. Iteration: thicker silicone, wider straps, adjustable buttons, discreet colors."
              caption="Data collection → initial data → device concept → design iteration"
              bgColor="bg-surface"
              aspectRatio="16/7"
            />
          </Reveal>

          {/* Full results spread — 16/7, circuit + before/after + outcome */}
          <Reveal>
            <ArtifactImage
              src="/images/pm-full-results.jpg"
              alt="Experiment Step 2: Circuit Design — acceleration sensor to MQTT broker to ESP8266 to IFTTT to phone. Arduino code. Before photos: affected leg drags causing imbalanced gait. After photos: cue plays just before affected leg steps forward, normal lift. Day 4/7/11 data: 20% stride length improvement, 5% frequency improvement."
              caption="Circuit system design · Before/after gait comparison · 11-day outcome data"
              bgColor="bg-surface"
              aspectRatio="16/7"
            />
          </Reveal>
        </div>
      </section>

      {/* ── THE PRODUCT ──────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="04" label="The Product" heading="Device + companion app" />
          </Reveal>

          {/* Full product design spread — 16/7 very wide */}
          <Reveal className="mb-8">
            <ArtifactImage
              src="/images/pm-full-product.jpg"
              alt="Pulse of Motion product design — exploded view: sensor modules (50×32×20mm), silicone pads with coverage labels, speaker unit close-up, velcro fastening detail, volume/time adjustment sliders"
              caption="Product design — dimensions, sensor modules, speaker, silicone pads, velcro fastening"
              bgColor="bg-pm-bg"
              aspectRatio="16/7"
            />
          </Reveal>

          {/* Full mobile app spread — 16/7, includes all 4 screens + storyboard */}
          <Reveal>
            <ArtifactImage
              src="/images/pm-mobile-app.jpg"
              alt="Pulse of Motion mobile app and storyboard — Product Screen (device specs, BLE 5.1, 30-48cm), Personal Screen (patient/doctor/family modes), Home Screen (real-time stride data, rehabilitation period), Exercise Path (daily route map). Storyboard: patient straps device, device beeps before step, family monitors data, 20% improvement shown."
              caption="Mobile app: Product · Personal · Home · Exercise Path screens · Usage storyboard"
              bgColor="bg-pm-bg"
              aspectRatio="16/7"
            />
          </Reveal>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border bg-pm-bg">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="05" label="Results" heading="11 days of evidence" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { day: "Day 4", freq: "42 steps/min", length: "20cm" },
              { day: "Day 7", freq: "44 steps/min", length: "23cm" },
              { day: "Day 11", freq: "44 steps/min", length: "24cm" },
            ].map((d) => (
              <Reveal key={d.day}>
                <div className="bg-background border border-border rounded-card p-5">
                  <span className="section-label text-text-tertiary block mb-3">{d.day}</span>
                  <p className="font-display text-[28px] text-pm-accent">{d.length}</p>
                  <p className="font-body text-caption text-text-tertiary">step length</p>
                  <p className="font-body text-body-s text-text-secondary mt-1">{d.freq}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="font-body text-body-m text-text-secondary mb-6">Prototype observation: one patient, with records on Days 4, 7 and 11. The reported 20% compares 20 cm on Day 4 with 24 cm on Day 11; the reported 5% is rounded from 42 to 44 steps/min. Source: the project experiment artifact above. These observations are separate from the research comparison reporting approximately 38%.</p>
            <div className="flex flex-wrap gap-12">
              <div>
                <span className="stat-number" style={{ color: "#3D7AB5" }}>20%</span>
                <p className="font-body text-body-m text-text-secondary mt-1">Stride length improvement</p>
              </div>
              <div>
                <span className="stat-number" style={{ color: "#3D7AB5" }}>5%</span>
                <p className="font-body text-body-m text-text-secondary mt-1">Step frequency improvement</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── REFLECTION ───────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="06" label="Reflection" heading="What I'd build next" />
          </Reveal>
          <ul className="flex flex-col gap-4 max-w-2xl">
            {[
              "A 30+ patient clinical trial — 11 days with one patient is promising, not conclusive.",
              "Persistent coaching mode in the app that adapts training schedules based on daily gait data.",
              "Better patient-doctor data export — the handoff between home rehab and clinical review is underdesigned.",
              "Collect leg-shape data from more older users to refine strap sizing and silicone pad ergonomics.",
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="flex items-start gap-3">
                  <span className="text-pm-accent mt-1.5 flex-shrink-0">→</span>
                  <p className="font-body text-body-m text-text-secondary">{item}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── NEXT ─────────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <Link href="/work/accident-insight-beam" className="group flex items-center justify-between py-6 hover:opacity-70 transition-opacity">
              <div>
                <span className="section-label text-text-tertiary block mb-2">Next Project</span>
                <span className="font-display text-display-s text-text-primary">Accident Insight Beam →</span>
                <p className="font-body text-body-m text-text-secondary mt-1">Roadside safety · UX Research · Systems Design</p>
              </div>
              <span className="text-text-tertiary text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
