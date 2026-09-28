import type { ProjectMeta, SkillCategory } from "@/types";

export const projects: ProjectMeta[] = [
  {
    id: "between-feelings",
    hero: {
    src: "/images/bf-cover-focused.jpg",
    alt: "Between Feelings app — primary screen showing New Log entry form with AI follow-up questions visible, supporting Pattern Summary and Chat screens, dark violet background",
    fit: "cover",
    position: "object-center",
  },
    slug: "between-feelings",
    number: "01",
    title: "Between Feelings",
    subtitle: "AI-powered emotion tracker that surfaces behavioral patterns from structured logs",
    description:
      "An emotion-reflection experience for university students and working professionals navigating emotional stress. Users log emotional experiences through a structured interview process, receive AI-generated follow-up questions, and over time see patterns emerge — without ever being diagnosed, advised, or judged.",
    role: "Product Designer & Full-Stack Engineer",
    // TODO(timeline): Earlier case study says 12 weeks; confirm whether this was a phase within the resume dates.
    timeline: "Jan — May 2026",
    year: "2026",
    stat: "3",
    statLabel: "AI interactions designed",
    tags: [
      { label: "Product Design", type: "domain" },
      { label: "Interaction Design", type: "domain" },
      { label: "Gemini AI", type: "tech" },
      { label: "Flask + PostgreSQL", type: "tech" },
      { label: "UI Design", type: "domain" },
    ],
    accentColor: "#9B7FBF",
    bgColor: "#0D0B14",
    textColor: "#E8E0F0",
    featured: true,
    size: "full",
  },
  {
    id: "pulse-of-motion",
    hero: {
    src: "/images/pm-3d-render.jpg",
    alt: "Pulse of Motion — 3D product render of knee-mounted wearable rehabilitation device with speaker, silicone pads, and adjustable strap",
    fit: "cover",
    position: "object-center",
  },
    slug: "pulse-of-motion",
    number: "02",
    title: "Pulse of Motion",
    subtitle: "Wearable rehab device using rhythmic cues to improve post-stroke gait",
    description:
      "A knee-mounted wearable device that emits alternating rhythmic tones to guide stroke patients toward a healthy, symmetrical gait during home rehabilitation.",
    role: "HCI Designer & Hardware Prototyper",
    timeline: "12 weeks",
    year: "2024",
    stat: "20%",
    statLabel: "prototype stride improvement · Day 4–11",
    tags: [
      { label: "HCI Design", type: "domain" },
      { label: "Health Technology", type: "domain" },
      { label: "Hardware Prototype", type: "tech" },
      { label: "Arduino", type: "tech" },
    ],
    accentColor: "#3D7AB5",
    bgColor: "#F0F5FA",
    textColor: "#0F0E0C",
    featured: true,
    size: "half",
  },
  {
    id: "accident-insight-beam",
    hero: {
    src: "/images/ai-scenario-render.jpg",
    alt: "Accident Insight Beam — highway accident scenario: driver presses guardrail emergency button, activating red light warning strip for approaching vehicles",
    fit: "cover",
    position: "object-center",
  },
    slug: "accident-insight-beam",
    number: "03",
    title: "Accident Insight Beam",
    subtitle: "Roadside emergency alert system reducing secondary highway collisions",
    description:
      "A guardrail-mounted emergency system that, when activated, illuminates a sequential light strip shifting from green to red as approaching vehicles close in — transforming passive infrastructure into active safety.",
    role: "Product Designer & UX Researcher",
    // TODO(timeline): Earlier case study says 5 weeks; confirm phase dates within the resume project range.
    timeline: "May 2024 — Aug 2025",
    year: "2024–2025",
    // TODO(source): Provide the original source, population, geography and timeframe for >60% secondary-collision mortality.
    stat: ">60%",
    statLabel: "secondary collision mortality",
    tags: [
      { label: "Product Design", type: "domain" },
      { label: "UX Research", type: "method" },
      { label: "Systems Design", type: "domain" },
    ],
    accentColor: "#C8382A",
    bgColor: "#0A0A0A",
    textColor: "#F0F0F0",
    featured: true,
    size: "half",
  },
  {
    id: "moonpath-keeper",
    hero: {
    src: "/images/mk-game-art.jpg",
    alt: "Moonpath Keeper — 2D moonlit beach game scene: deep blue ocean, layered coastal cliffs, dark night sky",
    fit: "cover",
    position: "object-top",
  },
    slug: "moonpath-keeper",
    number: "04",
    title: "Moonpath Keeper",
    subtitle: "Interactive science-museum game teaching children about light pollution",
    description:
      "Players adjust streetlight brightness using physical Bluetooth switches to help hatchling sea turtles navigate a moonlit beach toward the ocean — learning through consequence, not lecture.",
    role: "Game Designer & Interaction Designer",
    timeline: "10 weeks",
    year: "2024",
    stat: "88%",
    statLabel: "hatchlings lost to artificial light",
    tags: [
      { label: "Game Design", type: "domain" },
      { label: "Interaction Design", type: "domain" },
      { label: "Unity", type: "tech" },
      { label: "Bluetooth Hardware", type: "tech" },
    ],
    accentColor: "#C4A84A",
    bgColor: "#0A1628",
    textColor: "#E8E4D0",
    featured: true,
    size: "full",
  },
];

export const skillCategories: SkillCategory[] = [
  { name: "Design", type: "design", skills: ["Figma", "Wireframing", "User Flows", "Low-/High-Fidelity Prototyping", "Interaction Design", "Responsive Design"] },
  { name: "UX Research", type: "research", skills: ["User Interviews", "Surveys", "Usability Testing", "Heuristic Evaluation", "Accessibility"] },
  { name: "Technical", type: "engineering", skills: ["HTML", "CSS", "JavaScript", "Java", "Python", "SQL", "Git", "GitHub", "Unity"] },
];

export const marqueeItems = skillCategories.flatMap(category => category.skills);
