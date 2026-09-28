import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArtifactImage } from "@/components/ui/ImageTreatments";

export const metadata: Metadata = {
  title: "Moonpath Keeper",
  description:
    "Interactive science-museum game teaching children about artificial light pollution through guiding hatchling sea turtles home.",
};

export default function MoonpathKeeperPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="relative bg-mk-bg overflow-hidden">
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <Image
            src="/images/mk-game-art.jpg"
            alt="Moonpath Keeper 2D Unity game environment"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, #0A1628 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container-content pb-16 -mt-8 relative z-10">
          <Reveal>
            <span className="font-mono text-mono-s text-[#4A3A20] block mb-4">
              04
            </span>
            <h1 className="font-display text-display-m md:text-display-l text-[#E8E4D0] mb-4">
              Moonpath Keeper
            </h1>
            <p className="font-body text-body-l text-[#9B9070] max-w-[560px] mb-8">
              An interactive science-museum game teaching players about
              artificial light pollution by putting them in control of the
              lights that endanger sea turtles.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-[#1A2A40]">
              {[
                {
                  label: "Role",
                  value: "Game Designer & Interaction Designer",
                },
                { label: "Domain", value: "Environmental Education" },
                { label: "Timeline", value: "10 weeks · 2024" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="section-label text-[#4A3A20] block mb-1">
                    {label}
                  </span>
                  <span className="font-body text-body-m font-medium text-[#E8E4D0]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1/1K", label: "Hatchlings survive to adulthood" },
              { value: "88%", label: "Crawl toward artificial light" },
              { value: "100K+", label: "Lost per year to artificial lights" },
              { value: "3", label: "Difficulty levels via moon phases" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="pb-6 border-b border-border md:border-0">
                  <span
                    className="stat-number block"
                    style={{ color: "#C4A84A" }}
                  >
                    {s.value}
                  </span>
                  <span className="font-body text-body-m text-text-secondary mt-1 block">
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="01"
              label="The Problem"
              heading="Artificial light is a design problem for sea turtles."
            />
          </Reveal>

          <Reveal className="mb-8">
            <ArtifactImage
              src="/images/mk-turtle-data.jpg"
              alt="Sea turtle mortality data, multiple threats analysis, and hatchling storyboard"
              caption="Mortality scale · Multiple threats analysis · Hatchling storyboard"
              bgColor="bg-[#0A0A0A]"
              aspectRatio="16/7"
            />
          </Reveal>

          <Reveal>
            <p className="font-body text-body-l text-text-secondary leading-relaxed max-w-3xl">
              Artificial light pollution is one of the few sea turtle threats
              that can be directly addressed through design intervention. The
              goal of Moonpath Keeper is to turn that invisible environmental
              issue into a physical, playable experience.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <ArtifactImage
              src="/images/mk-game-screens.jpg"
              alt="Moonpath Keeper game UI showing Start Journey and Choose Level screens"
              caption="Game UI — Start Journey + Choose Level screens"
              bgColor="bg-mk-bg"
              aspectRatio="16/9"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="02"
              label="Design Analysis"
              heading="Why a game? Why now?"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <ArtifactImage
                src="/images/mk-analysis-right.jpg"
                alt="Existing physical and political solutions for turtle protection"
                caption="Physical + political solutions exist — public awareness still limited"
                bgColor="bg-background"
                aspectRatio="4/3"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-body text-body-l text-text-secondary leading-relaxed mb-6">
                Existing solutions reduce harm but don&apos;t build public
                understanding. Light curfews and turtle-friendly bulbs only work
                if people care enough to follow them.
              </p>
              <div className="bg-mk-bg border border-[#1A2A40] rounded-card p-6">
                <p className="font-display text-[22px] text-[#E8E4D0] leading-snug">
                  &ldquo;Play should teach without lecturing. The player should
                  discover they&apos;re killing the turtle before the game tells
                  them.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="03"
              label="Game Design"
              heading="References, mechanics, difficulty"
            />
          </Reveal>

          <Reveal className="mb-8">
            <ArtifactImage
              src="/images/mk-game-design.jpg"
              alt="Game design process from references to gameplay mechanics and flowchart"
              caption="Research → scene setup → gameplay → difficulty system → flowchart"
              bgColor="bg-surface"
              aspectRatio="16/7"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                level: "Level 1",
                moon: "Waning Gibbous",
                brightness: "High (3)",
                desc: "Most moonlight — easiest to keep turtle on track",
              },
              {
                level: "Level 2",
                moon: "Last Quarter",
                brightness: "Medium (2)",
                desc: "Less moonlight — careful light management required",
              },
              {
                level: "Level 3",
                moon: "Waning Crescent",
                brightness: "Low (1)",
                desc: "Nearly no moonlight — almost every light must be off",
              },
            ].map((l, i) => (
              <Reveal key={l.level} delay={i * 0.08}>
                <div className="bg-mk-bg border border-[#1A2A40] rounded-card p-5">
                  <p className="font-body text-body-m font-semibold text-[#E8E4D0] mb-1">
                    {l.level} — {l.moon}
                  </p>
                  <span
                    className="tag mb-3 inline-block"
                    style={{
                      color: "#C4A84A",
                      borderColor: "#C4A84A30",
                    }}
                  >
                    Brightness {l.brightness}
                  </span>
                  <p className="font-body text-body-s text-[#9B9070]">
                    {l.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-mk-bg">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="04"
              label="Game Flow"
              heading="Start screen to final result"
              dark
            />
          </Reveal>

          <Reveal>
            <ArtifactImage
              src="/images/mk-full-flow.jpg"
              alt="Complete game flow from start screen to level selection, gameplay, warning, win, and game over states"
              caption="Artificial Light < Moonlight → turtle moves · Too bright → WARNING · Time out → GAME OVER"
              bgColor="bg-[#0A1628]"
              aspectRatio="16/7"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal><SectionHeader number="05" label="Key Design Decisions" heading="Make the consequences tangible" /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Physical switches instead of touchscreen controls", body: "Each of the three dome switches maps to a streetlight. The physical act of switching a light makes the relationship between a player’s action and the turtle’s path tangible. The design intent is responsibility and engagement through direct control." },
              { title: "Moon phases instead of time alone", body: "The original time-only difficulty system evolved into three moon phases. Less moonlight requires more careful control of artificial light, connecting the challenge to the environmental idea the game teaches." },
              { title: "Consequences before explanation", body: "The turtle moves when artificial light is lower than moonlight. The warning, movement and win/lose states make the effect of lighting choices visible, letting players learn through the game’s response." },
            ].map(item => <Reveal key={item.title}><div className="bg-surface border border-border rounded-card p-6"><h3 className="font-body text-body-m font-semibold text-text-primary mb-3">{item.title}</h3><p className="font-body text-body-m text-text-secondary">{item.body}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="06"
              label="Hardware & Testing"
              heading="Physical controls, digital consequence"
            />
          </Reveal>

          <Reveal className="mb-8">
            <ArtifactImage
              src="/images/mk-unity-test.jpg"
              alt="Unity scripts and physical museum testing setup with three Bluetooth switches"
              caption="Unity scripts · Museum installation test with 3 Bluetooth switches"
              bgColor="bg-[#0A0A0A]"
              aspectRatio="16/7"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <p className="font-body text-body-l text-text-secondary leading-relaxed mb-6">
                Three large dome Bluetooth switches on a black table. Each
                controls one streetlight on the beach. Pressing a switch
                doesn&apos;t feel like a UI button — it feels like flipping a
                real streetlight.
              </p>
              <p className="font-body text-body-m text-text-secondary">
                The design intent is to connect physical control with responsibility
                for the turtle&apos;s survival. The project documents this rationale;
                it does not document a comparative touchscreen study.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-2">
                {[
                  "MoonController — countdown timer, triggers lose on timeout",
                  "LightController — reads Bluetooth input, controls streetlight brightness",
                  "TurtleController — moves when artificial light < moonlight",
                  "TurtleAnimation — animator parameters driven by movement state",
                  "GameManager — win/lose states, level transitions",
                  "SoundManager — warning sounds, win/lose audio, ambient ocean",
                ].map((s) => (
                  <div
                    key={s}
                    className="flex items-start gap-2 py-1.5 border-b border-border last:border-0"
                  >
                    <span className="text-mk-accent mt-1 flex-shrink-0 text-xs">
                      →
                    </span>
                    <p className="font-mono text-mono-s text-text-secondary">
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <SectionHeader
              number="07"
              label="Reflection"
              heading="What made it work"
            />
          </Reveal>

          <ul className="flex flex-col gap-4 max-w-2xl">
            {[
              "Physical switches were the key insight — pressing a button to turn off a light makes players feel directly responsible.",
              "The moon phase difficulty system was a late idea — originally difficulty was time-only. Moon phases added narrative and scientific accuracy simultaneously.",
              "The WARNING state was more effective than expected — players worked harder to avoid it than to win.",
              "Next: multi-player mode where one player controls lights and another guides the turtle with a joystick.",
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="flex items-start gap-3">
                  <span className="text-mk-accent mt-1.5 flex-shrink-0">
                    →
                  </span>
                  <p className="font-body text-body-m text-text-secondary">
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-content">
          <Reveal>
            <Link
              href="/about"
              className="group flex items-center justify-between py-6 hover:opacity-70 transition-opacity"
            >
              <div>
                <span className="section-label text-text-tertiary block mb-2">
                  About the designer
                </span>
                <span className="font-display text-display-s text-text-primary">
                  About Me →
                </span>
                <p className="font-body text-body-m text-text-secondary mt-1">
                  Cornell MPS · Penn State HCDD · Product & UX Designer
                </p>
              </div>
              <span className="text-text-tertiary text-3xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}