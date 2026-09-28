import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerReveal, StaggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecisionCard } from "@/components/ui/DecisionCard";
import { PhoneFrame } from "@/components/ui/ImageTreatments";

export const metadata: Metadata = {
  title: "Between Feelings",
  description:
    "Product and UX design for an AI-powered emotion tracker. Surfaces behavioral patterns from structured logs without giving advice, diagnosis, or judgment.",
};

const decisions = [
  {
    number: "01",
    title: "Structured fields vs. free-form journaling",
    decision: "6 required structured fields: label, description, date, trigger, intensity, sleep quality",
    alternatives: "Blank text entry; optional fields; a single long-form text box",
    rationale: "Structured fields reduce blank-page paralysis AND give the AI consistent, parseable data. A free-form 'how do you feel?' produces noisy input that resists pattern detection.",
  },
  {
    number: "02",
    title: "AI questions before the log is saved",
    decision: "Follow-up questions generated mid-flow, before the log commits to the database",
    alternatives: "Questions after saving; no questions; questions on a separate page",
    rationale: "Inserting AI reflection at the logging moment deepens the quality of the log itself. The Q&A is stored alongside the log as enrichment data — the reflection shapes the memory.",
  },
  {
    number: "03",
    title: "No advice, ever — enforced at system prompt level",
    decision: "Hard constraint written into the system prompt: no advice, diagnosis, or judgment",
    alternatives: "Gentle suggestions; optional advice mode; user-controlled guidance",
    rationale: "This is an ethical design decision, not a feature gap. Mental health AI that gives advice creates liability and potential harm. The constraint was written as a hard rule, not a guideline.",
  },
  {
    number: "04",
    title: "Async pattern generation with polling",
    decision: "Background thread + in-memory cache; first request returns 202 and starts generation; UI polls",
    alternatives: "Synchronous generation (blocks HTTP); generate on login; scheduled jobs",
    rationale: "Gemini API calls on full log histories take 3–8 seconds. Blocking creates timeouts. The async model gives users a designed 'generating' state — a UX decision expressed in backend architecture.",
  },
  {
    number: "05",
    title: "Full log history as chat context",
    decision: "Every chat message sends the complete log history to Gemini as context",
    alternatives: "RAG/vector search; summarization first; session memory only",
    rationale: "At personal-use scale (20–100 logs), full context injection is accurate and avoids retrieval errors that could mislead users about their own patterns. Token cost is the tradeoff.",
  },
];

export default function BetweenFeelingsPage() {
  return (
    <div className="bf-page min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-0 md:pt-52 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #6B4E8A 0%, transparent 70%)", transform: "translate(25%, -30%)" }}
          aria-hidden="true"
        />
        <div className="container-content relative">
          {/* Title block */}
          <div className="max-w-2xl mb-12">
            <Reveal>
              <span className="font-mono text-mono-s text-[#6B6080] block mb-6">01</span>
              <h1 className="font-display text-display-m md:text-display-l text-[#E8E0F0] mb-4">
                Between Feelings
              </h1>
              <p className="font-body text-body-l text-[#9B90B0] mb-8">
                An AI-powered emotion tracker that surfaces behavioral patterns from
                structured logs — without ever giving advice, diagnosis, or judgment.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-5 pt-8 border-t border-[#2D2540]">
                {[
                  { label: "Role", value: "Product Designer & Full-Stack Engineer" },
                  { label: "Focus", value: "User flows · Interaction design · UI design" },
                  { label: "Timeline", value: "Jan — May 2026" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="section-label text-[#6B6080] block mb-1">{label}</span>
                    <span className="font-body text-body-m font-medium text-[#E8E0F0]">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Hero — focused product visual */}
          <Reveal delay={0.2}>
            <div className="relative w-full aspect-[16/7] rounded-card overflow-hidden">
              <Image
                src="/images/bf-cover-focused.jpg"
                alt="Between Feelings app — New Log entry form as primary screen with AI follow-up questions, Pattern Summary, and Chat screens supporting"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="01" label="The Problem" heading="Most people don't know what they're feeling — or why." dark />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <Reveal>
              <p className="font-body text-body-l text-[#9B90B0] leading-relaxed mb-6">
                University students and working professionals can name the feeling but
                not the cause. Journaling apps capture data without synthesis. Therapy
                is inaccessible. Most mental health apps push advice before understanding.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ["Journaling apps", "No structure or pattern recognition — abandoned in 2 weeks"],
                  ["Therapy", "Effective but inaccessible — cost, waitlists, stigma"],
                  ["Mental health apps", "Prescriptive — advice before understanding"],
                ].map(([k, v]) => (
                  <div key={k as string} className="bg-[#1A1525] border border-[#2D2540] rounded-lg px-4 py-3">
                    <p className="font-body text-body-s font-medium text-[#E8E0F0] mb-0.5">{k}</p>
                    <p className="font-body text-body-s text-[#9B90B0]">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-[#1A1525] border border-[#9B7FBF]/40 rounded-card p-8 h-full flex flex-col justify-center">
                <span className="section-label text-[#9B7FBF] block mb-3">Core Design Constraint</span>
                <p className="font-display text-display-s text-[#E8E0F0] mb-3">
                  This product must never give advice, diagnosis, or judgment.
                </p>
                <p className="font-body text-body-m text-[#9B90B0]">
                  Written into the system prompt before any feature was built.
                  It shaped every subsequent decision — from AI language to UI copy.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── USER RESEARCH ────────────────────────────────────────────── */}
      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="02" label="User Research" heading="Two personas, one gap" dark />
          </Reveal>
          {/* TODO(research): Add the original research protocol, persona provenance and supporting notes; no methods or participant counts are documented. */}
          <Reveal className="mb-8">
            <div className="bg-[#1A1525] border border-[#2D2540] rounded-card p-6">
              <h3 className="font-body text-body-m font-semibold text-[#E8E0F0] mb-3">Research Methods</h3>
              <p className="font-body text-body-m text-[#9B90B0]">The available project documentation includes two personas, their needs and pain points, and a comparison of journaling apps, therapy and mental health apps. The latest resume reports user research with university students and iteration through usability testing; the case-study materials do not specify protocols, participant counts or testing findings. The persona statements below provide design context; they are not presented as verified interview transcripts.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {[
              {
                initial: "S", name: "Sarah, 23", role: "Grad Student · Academic Pressure",
                quote: "I write in my journal but I never go back and read it. I don't see anything.",
                need: "See her own patterns without being told what to do",
                pain: "Journaling is too open-ended — she doesn't know what to write",
              },
              {
                initial: "V", name: "Victor, 31", role: "Product Manager · Work Stress",
                quote: "I want to understand my triggers, not talk about my childhood.",
                need: "Private, structured outlet that surfaces insight, not noise",
                pain: "Doesn't want therapy stigma; wants data-driven self-awareness",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="bg-[#1A1525] border border-[#2D2540] rounded-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#E8E0F0] font-display text-[22px] flex-shrink-0" style={{ backgroundColor: "#6B4E8A" }}>
                      {p.initial}
                    </div>
                    <div>
                      <p className="font-body text-body-m font-semibold text-[#E8E0F0]">{p.name}</p>
                      <p className="font-body text-caption text-[#9B90B0]">{p.role}</p>
                    </div>
                  </div>
                  <blockquote className="font-body text-body-m italic text-[#9B90B0] border-l-2 border-[#6B4E8A] pl-4 mb-4">
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                  <dl className="flex flex-col gap-2">
                    <div>
                      <dt className="font-body text-[10px] uppercase tracking-[0.08em] text-[#6B6080] mb-0.5">Need</dt>
                      <dd className="font-body text-body-s text-[#E8E0F0]">{p.need}</dd>
                    </div>
                    <div>
                      <dt className="font-body text-[10px] uppercase tracking-[0.08em] text-[#6B6080] mb-0.5">Pain Point</dt>
                      <dd className="font-body text-body-s text-[#9B90B0]">{p.pain}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mb-6">
            <SectionHeader number="03" label="Insights" heading="From documented needs to design choices" dark />
          </Reveal>
          {/* TODO(research): Verify the existing two-week journal-abandonment claim and the evidence supporting these insights. */}
          <StaggerReveal>
            {[
              "Users abandon open-ended journals within 2 weeks — blank pages offer no scaffolding.",
              "The trigger is more revealing than the emotion. Most users name the feeling but not the cause.",
              "Immediate advice-giving creates resistance. People want to be understood before being helped.",
            ].map((insight, i) => (
              <StaggerChild key={i}>
                <div className="flex items-start gap-5 py-4 border-b border-[#2D2540] last:border-0">
                  <span className="font-mono text-mono-s text-[#9B7FBF] mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-body text-body-l text-[#E8E0F0]">{insight}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {[
              { evidence: "Sarah persona: open-ended journaling makes it hard to know what to write.", insight: "Log entry needs scaffolding.", decision: "Use structured fields instead of a blank page." },
              { evidence: "Victor persona: wants to understand triggers and see patterns.", insight: "Reflection needs context beyond an emotion label.", decision: "Capture triggers and surface patterns across logs." },
              { evidence: "Both personas seek self-understanding without being told what to do.", insight: "Keep reflection non-prescriptive.", decision: "Use follow-up questions and a no-advice constraint." },
            ].map(item => (
              <Reveal key={item.evidence}>
                <dl className="bg-[#1A1525] border border-[#2D2540] rounded-card p-5 space-y-4">
                  {[["Documented evidence · persona", item.evidence], ["Insight", item.insight], ["Design decision", item.decision]].map(([label, text]) => (
                    <div key={label}><dt className="section-label text-[#9B7FBF] mb-2">{label}</dt><dd className="font-body text-body-s text-[#9B90B0]">{text}</dd></div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal><SectionHeader number="04" label="User Flow" heading="Reflection before saving" dark />
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {["Login", "New Log · six structured fields", "AI follow-up · reflect before saving", "Pattern Summary · reflect across logs", "Chat · explore log history"].map((step, i) => <li key={step} className="bg-[#1A1525] border border-[#2D2540] rounded-card p-5 font-body text-body-m text-[#E8E0F0]"><span className="font-mono text-[#9B7FBF] block mb-2">{String(i + 1).padStart(2, "0")}</span>{step}</li>)}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal><SectionHeader number="05" label="Iterations" heading="Refinements and next steps" dark />
            {/* TODO(iterations): Add dated design versions and evaluation evidence when available. The existing documentation lists future refinements, not a validated iteration history. */}
            <p className="font-body text-body-l text-[#9B90B0] max-w-3xl mb-5">The current design uses structured fields and follow-up questions before saving. The documented next refinements are a mobile-first log entry redesign, clearer visual connections between questions and log fields, and automatic pattern refresh after saving. These are proposed next steps, not tested iterations.</p>
          </Reveal>
        </div>
      </section>

      {/* ── PRODUCT — REAL SCREENSHOTS ───────────────────────────────── */}
      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="06" label="UI Design" heading="Real screens from the shipped app" dark />
          </Reveal>

          {/* 5 screens — uniform grid, top-aligned, consistent gap */}
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-start">
              <PhoneFrame
                src="/images/bf-screen-login.jpg"
                alt="Between Feelings login screen — plum header, beige background, username and password fields"
                caption="Login"
                frameColor="#2D1A35"
                width={160}
              />
              <PhoneFrame
                src="/images/bf-screen-new-log.jpg"
                alt="New Log screen — 6 structured fields: description, feeling label, trigger, intensity slider, sleep quality slider"
                caption="New Log"
                frameColor="#2D1A35"
                width={160}
              />
              <PhoneFrame
                src="/images/bf-screen-followup.jpg"
                alt="AI Follow-up screen — generated question Q2 in pink card, user answer textarea, step counter 3/4"
                caption="AI Follow-up"
                frameColor="#2D1A35"
                width={160}
              />
              <PhoneFrame
                src="/images/bf-screen-patterns.jpg"
                alt="Pattern Summary screen — Weekly Reflection heading, Short Summary, Quick Insights, View Detailed Summary"
                caption="Patterns"
                frameColor="#2D1A35"
                width={160}
              />
              <PhoneFrame
                src="/images/bf-screen-chat.jpg"
                alt="AI Chat screen — user question, AI response analyzing logs without giving advice"
                caption="Chat"
                frameColor="#2D1A35"
                width={160}
              />
            </div>
            <p className="font-body text-caption text-[#6B6080] mt-4 text-center">
              Login → New Log (6 fields) → AI Follow-up Questions → Pattern Summary → Chat
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal><SectionHeader number="07" label="Usability Testing" heading="What still needs validation" dark />
            {/* TODO(usability): Add documented tasks, methods, observations and resulting design changes. No usability-test results are available in the existing project. */}
            <p className="font-body text-body-l text-[#9B90B0] max-w-3xl">The available documentation shows the implemented screens and interaction decisions, and the latest resume reports iteration through usability testing. Detailed test methods, tasks and results are not included in the case-study materials. The proposed refinements above remain to be evaluated.</p>
          </Reveal>
        </div>
      </section>

      {/* ── DESIGN DECISIONS ─────────────────────────────────────────── */}
      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="08" label="Design Decisions" heading="Why, not just what" dark />
          </Reveal>

          {/* Decision 1 + screenshot inline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Reveal>
              <DecisionCard {...decisions[0]} dark accentColor="#9B7FBF" />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-2">
                <PhoneFrame
                  src="/images/bf-screen-logs.jpg"
                  alt="Between Feelings log history — 5 log entries with emotion labels, dates, triggers, and intensity bar indicators"
                  frameColor="#1A0F22"
                  className="max-w-[200px] mx-auto"
                  width={160}
                />
                <p className="font-body text-caption text-[#6B6080] text-center">
                  Log history: each entry structured, searchable, ready for AI analysis
                </p>
              </div>
            </Reveal>
          </div>

          {/* Decisions 2–5 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {decisions.slice(1, 3).map((d, i) => (
              <Reveal key={d.number} delay={i * 0.06}>
                <DecisionCard {...d} dark accentColor="#9B7FBF" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ───────────────────────────────────────────────── */}
      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <SectionHeader number="09" label="Outcome" heading="What shipped and what comes next" dark />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: "7", label: "Core features shipped", sub: "End-to-end functional" },
              { value: "3", label: "AI interactions designed", sub: "Follow-up, patterns, chat" },
              { value: "0", label: "Clinical claims made", sub: "Ethical constraint upheld" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="pb-6 border-b border-[#2D2540] md:border-0">
                  <span className="stat-number text-[#E8E0F0] block">{stat.value}</span>
                  <span className="font-body text-body-m text-[#9B90B0] block mt-1">{stat.label}</span>
                  <span className="font-body text-caption text-[#6B6080]">{stat.sub}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10">
            <Reveal>
              <h3 className="font-body text-[10px] uppercase tracking-[0.1em] text-[#6B6080] mb-5">What I'd build next</h3>
              <ul className="flex flex-col gap-4">
                {[
                  "pgvector on Neon so chat scales beyond token limits for power users",
                  "Mobile-first log entry redesign — the emotional moment happens on a phone",
                  "Auto-refresh patterns after a new log saves, not on page load",
                  "Follow-up questions with visual hierarchy connecting each question to the relevant log field",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#9B7FBF] mt-1.5 flex-shrink-0">→</span>
                    <p className="font-body text-body-m text-[#9B90B0]">{item}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-body text-[10px] uppercase tracking-[0.1em] text-[#6B6080] mb-5">What this project taught me</h3>
              <ul className="flex flex-col gap-4">
                {[
                  "Prompt engineering is design — every word is a UX decision with behavioral consequences",
                  "Ethical constraints should be designed first, not added later",
                  "MVC pays off — adding chat required zero changes to existing logic",
                  "Backend architecture is a UX decision — the threading model exists for users, not servers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#9B7FBF] mt-1.5 flex-shrink-0">→</span>
                    <p className="font-body text-body-m text-[#9B90B0]">{item}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <details className="border-t border-[#2D2540]">
        <summary className="container-content py-8 cursor-pointer font-body text-body-l text-[#E8E0F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7FBF]">How I Built It <span className="block font-body text-body-s text-[#9B90B0] mt-2">AI architecture · Prompt engineering · Database &amp; API · Technical challenges</span></summary>
        <div className="container-content pb-8"><p className="font-body text-body-m text-[#9B90B0] mb-6">Python · Flask · PostgreSQL · Gemini AI · 11 REST API endpoints</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{decisions.slice(3).map(d => <DecisionCard key={d.number} {...d} dark accentColor="#9B7FBF" />)}</div>
        </div>
      {/* ── AI ARCHITECTURE ──────────────────────────────────────────── */}
      <section className="py-8 border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <h3 className="font-body text-body-l font-semibold text-[#E8E0F0] mb-6">AI Architecture — Three AI features, one system</h3>
          </Reveal>

          <Reveal className="mb-8">
            <div className="code-block overflow-x-auto">
              <pre className="font-mono text-[12px] leading-relaxed text-[#C8C0D8]">{`CLIENT (HTML/JS)                        NEON POSTGRESQL
new_log.html                            ┌─────────────────┐
patterns.html      HTTP (JSON)          │  emotion_logs   │
chat.html    ─────────────────────┐     │  log_id  PK     │
                                  │     │  user_id        │
FLASK SERVER  server.py           │     │  label          │
├── Validation layer              ▼     │  description    │
├── Thread manager     CONTROLLER ──────│  trigger        │
└── Route handlers     controller.py   │  intensity      │
      │                    │           │  sleep_quality  │
      │              TEXT GENERATION   │  follow_up_qa   │
      │              text_gen.py       └─────────────────┘
      │                    │
      │              PROMPT GENERATION
      │              prompt_gen.py
      │                    │
      └──────────────► GEMINI API  (llm_client.py)`}</pre>
            </div>
          </Reveal>

          {/* Three AI features — each with a screenshot */}
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                letter: "A", name: "Follow-up Questions",
                input: "Single log (pre-save)",
                output: "Exactly 3 contextual questions",
                constraint: "Enforced in prompt AND parser",
                color: "#9B7FBF",
                screen: "/images/bf-screen-followup.jpg",
                screenAlt: "Follow-up questions screen showing AI-generated Q2 in pink card",
              },
              {
                letter: "B", name: "Pattern Summary",
                input: "Full log history",
                output: "hero_summary · quick_insights · detailed_summary",
                constraint: "JSON schema validated, async 202 polling",
                color: "#6B4E8A",
                screen: "/images/bf-screen-patterns.jpg",
                screenAlt: "Pattern summary screen showing weekly reflection, short summary, and quick insights",
              },
              {
                letter: "C", name: "Chat",
                input: "User message + full log history",
                output: "1–3 paragraphs, no advice",
                constraint: "System prompt: no advice, no diagnosis",
                color: "#4A3560",
                screen: "/images/bf-screen-chat.jpg",
                screenAlt: "Chat screen showing user question and AI response analyzing log data",
              },
            ].map((feat) => (
              <StaggerChild key={feat.letter}>
                <div className="bg-[#1A1525] border border-[#2D2540] rounded-card overflow-hidden h-full flex flex-col">
                  {/* Mini phone preview */}
                  <div className="bg-[#0D0B14] flex items-center justify-center py-4">
                    <div className="rounded-xl overflow-hidden" style={{ width: 120 }}>
                      <img
                        src={feat.screen}
                        alt={feat.screenAlt}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-7 rounded flex items-center justify-center font-mono text-mono-s text-[#E8E0F0] flex-shrink-0" style={{ backgroundColor: feat.color }}>
                        {feat.letter}
                      </span>
                      <h3 className="font-body text-body-m font-semibold text-[#E8E0F0]">{feat.name}</h3>
                    </div>
                    <dl className="flex flex-col gap-3">
                      {[
                        { term: "Input", def: feat.input },
                        { term: "Output", def: feat.output },
                        { term: "Key constraint", def: feat.constraint },
                      ].map(({ term, def }) => (
                        <div key={term}>
                          <dt className="font-mono text-[10px] text-[#6B6080] mb-1">{term}</dt>
                          <dd className="font-body text-body-s text-[#9B90B0]">{def}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── PROMPT ENGINEERING ───────────────────────────────────────── */}
      <section className="py-8 border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <h3 className="font-body text-body-l font-semibold text-[#E8E0F0] mb-6">Prompt Engineering — Designing the AI's personality</h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <Reveal className="lg:col-span-3">
              <div className="code-block h-full">
                <p className="font-mono text-[10px] text-[#6B6080] mb-4 uppercase tracking-widest">System Prompt</p>
                <pre className="font-mono text-[12px] text-[#C8C0D8] leading-relaxed whitespace-pre-wrap">{`You analyze user-provided data to identify 
patterns, clarify information, and surface 
meaningful structure. 

You operate only on the information given. 
You do not introduce assumptions, external 
knowledge, or unsupported conclusions.

You do not provide advice, diagnosis, or 
judgment. You do not guide or evaluate the 
user. Your role is to extract and 
communicate information clearly.

Style: neutral, pattern-focused, structured, 
clear, softened, non-judgmental, 
conversational but restrained.`}</pre>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-2 flex flex-col gap-3">
              {[
                { phrase: '"only on the information given"', meaning: "Prevents hallucinating patterns not in the data" },
                { phrase: '"no advice, diagnosis, or judgment"', meaning: "The core ethical constraint — written first" },
                { phrase: '"softened and non-judgmental"', meaning: "Every response uses this affective register" },
                { phrase: '"conversational but restrained"', meaning: "Prevents the AI becoming a chatbot character" },
              ].map((ann) => (
                <div key={ann.phrase} className="bg-[#1A1525] border border-[#2D2540] rounded-lg p-4">
                  <p className="font-mono text-[11px] text-[#9B7FBF] mb-1.5">{ann.phrase}</p>
                  <p className="font-body text-body-s text-[#9B90B0]">{ann.meaning}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-[#1A1525] border border-[#2D2540] rounded-card p-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-body text-body-m font-semibold text-[#E8E0F0] mb-2">Prompt instruction = request</h3>
                  <p className="font-body text-body-s text-[#9B90B0] mb-4">The prompt asks for exactly 3 questions. Models sometimes return 2 or 4.</p>
                  <div className="code-block text-[11px]">
                    <pre className="text-[#C8C0D8]">{`# In the prompt:
"Return exactly 3 questions.
No additional text."`}</pre>
                  </div>
                </div>
                <div>
                  <h3 className="font-body text-body-m font-semibold text-[#E8E0F0] mb-2">Parser check = guarantee</h3>
                  <p className="font-body text-body-s text-[#9B90B0] mb-4">If the model ignores the prompt, the parser fails loudly — not silently.</p>
                  <div className="code-block text-[11px]">
                    <pre className="text-[#C8C0D8]">{`if len(parsed) != 3:
    raise InvalidFollowup
    QuestionsError(
        "Must contain exactly 3."
    )`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DATABASE & API ────────────────────────────────────────────── */}
      <section className="py-8 border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <h3 className="font-body text-body-l font-semibold text-[#E8E0F0] mb-6">Database & API — Structure that enables the product</h3>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal>
              <h3 className="font-body text-[10px] uppercase tracking-[0.1em] text-[#6B6080] mb-3">emotion_logs schema</h3>
              <div className="code-block">
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-[#2D2540]">
                      <th className="text-left py-2 pr-4 text-[#6B6080] font-normal">Column</th>
                      <th className="text-left py-2 pr-4 text-[#6B6080] font-normal">Type</th>
                      <th className="text-left py-2 text-[#6B6080] font-normal">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["log_id", "SERIAL PK", "DB-generated, RETURNING"],
                      ["user_id", "INTEGER", "FK to users"],
                      ["label", "TEXT", "Emotion label"],
                      ["description", "TEXT", "Situation narrative"],
                      ["date", "DATE", "Normalized from ISO"],
                      ["trigger", "TEXT", "Perceived cause"],
                      ["intensity", "INTEGER", "Self-rated 1–5"],
                      ["sleep_quality", "TEXT", "Poor/Average/Good"],
                      ["follow_up_qa", "TEXT", "AI Q&A serialized"],
                    ].map(([col, type, note]) => (
                      <tr key={col} className="border-b border-[#2D2540]/50">
                        <td className="py-1.5 pr-4 text-[#9B7FBF] font-medium">{col}</td>
                        <td className="py-1.5 pr-4 text-[#7FB5A0]">{type}</td>
                        <td className="py-1.5 text-[#9B90B0]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-body text-[10px] uppercase tracking-[0.1em] text-[#6B6080] mb-3">Key API design decisions</h3>
              <div className="flex flex-col gap-4">
                {[
                  { title: "202 Accepted for pattern polling", desc: "Semantically distinguishes 'still processing' from failure. The UI polls and treats 202 as a designed loading state." },
                  { title: "RETURNING log_id on INSERT", desc: "New log ID returned in one query — no separate SELECT, no race condition." },
                  { title: "Transactional writes with rollback", desc: "Any error rolls back the full log, preventing partial saves that would corrupt pattern analysis." },
                  { title: "Shared validator for two endpoints", desc: "'Generate questions' and 'Save log' share _validate_new_log_payload() — prevents drift between flows." },
                ].map((item) => (
                  <div key={item.title} className="bg-[#1A1525] border border-[#2D2540] rounded-lg p-4">
                    <p className="font-mono text-[11px] text-[#9B7FBF] mb-1">{item.title}</p>
                    <p className="font-body text-body-s text-[#9B90B0]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL CHALLENGES ─────────────────────────────────────── */}
      <section className="py-8 border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <h3 className="font-body text-body-l font-semibold text-[#E8E0F0] mb-6">Technical Challenges — Three honest problems</h3>
          </Reveal>
          <StaggerReveal className="flex flex-col gap-5">
            {[
              {
                title: "LLM output parsing reliability",
                problem: "Gemini sometimes wraps JSON in markdown fences, or returns Python list literals with unexpected whitespace.",
                solution: "Strip markdown fences before parsing. ast.literal_eval for follow-up questions, json.loads for patterns. Typed exceptions returned as 502.",
                lesson: "Treat model output as an untrusted third-party API. Validate everything. Fail loudly.",
              },
              {
                title: "Async pattern generation UX",
                problem: "Pattern generation over full log history takes 3–8 seconds. Synchronous requests time out.",
                solution: "Background thread + in-memory cache. First request returns 202. Polls return 202 (loading) or 200 (data). The UI shows a designed 'generating' state.",
                lesson: "Backend architecture is a UX decision. The threading model protects the user's experience.",
              },
              {
                title: "Prompt + parser contract",
                problem: "Prompt says exactly 3 questions. Model sometimes returns 2 or 4. Parser trusting the prompt means silent UI corruption.",
                solution: "Parser enforces independently: if len(parsed) != 3 → raise exception. Prompt and parser agree. Disagreement fails loudly.",
                lesson: "A prompt instruction is a request. A parser check is a guarantee. Both are required.",
              },
            ].map((c, i) => (
              <StaggerChild key={c.title}>
                <div className="bg-[#1A1525] border border-[#2D2540] rounded-card p-6">
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-mono-s text-[#9B7FBF] flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1">
                      <h3 className="font-body text-body-m font-semibold text-[#E8E0F0] mb-4">{c.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { label: "Problem", text: c.problem, color: "#C8382A" },
                          { label: "Solution", text: c.solution, color: "#3D7AB5" },
                          { label: "Design Lesson", text: c.lesson, color: "#9B7FBF" },
                        ].map(({ label, text, color }) => (
                          <div key={label}>
                            <span className="font-body text-[10px] uppercase tracking-[0.08em] block mb-1.5" style={{ color }}>{label}</span>
                            <p className="font-body text-body-s text-[#9B90B0]">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerReveal>
        </div>
      </section>

      </details>

      {/* ── NEXT PROJECT ─────────────────────────────────────────────── */}
      <section className="section-padding border-t border-[#2D2540]">
        <div className="container-content">
          <Reveal>
            <Link href="/work/pulse-of-motion" className="group flex items-center justify-between py-6 hover:opacity-70 transition-opacity">
              <div>
                <span className="section-label text-[#6B6080] block mb-2">Next Project</span>
                <span className="font-display text-display-s text-[#E8E0F0]">Pulse of Motion →</span>
                <p className="font-body text-body-m text-[#9B90B0] mt-1">Wearable rehab device · HCI Design · Hardware + Software</p>
              </div>
              <span className="text-[#6B6080] text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
