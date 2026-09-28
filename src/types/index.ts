// ─── PROJECT TYPES ──────────────────────────────────────────────────────────

export type ProjectId = string;

export interface ProjectTag {
  label: string;
  type: "domain" | "tech" | "method";
}

export interface ProjectMeta {
  id: ProjectId;
  hero: { src: string; alt: string; fit: "cover" | "contain"; position?: string; padding?: string };
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  timeline: string;
  year: string;
  stat: string;
  statLabel: string;
  tags: ProjectTag[];
  accentColor: string;
  bgColor: string;
  textColor: string;
  featured: boolean;
  size: "full" | "half";
}

// ─── CASE STUDY SECTION TYPES ───────────────────────────────────────────────

export interface CaseStudyStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface DecisionCard {
  number: string;
  title: string;
  decision: string;
  alternatives: string;
  rationale: string;
}

export interface Persona {
  name: string;
  age: string;
  role: string;
  initial: string;
  color: string;
  quote: string;
  need: string;
  painPoint: string;
}

// ─── NAVIGATION TYPES ────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// ─── SKILL TYPES ─────────────────────────────────────────────────────────────

export interface SkillCategory {
  name: string;
  skills: string[];
  type: "design" | "engineering" | "ai" | "research";
}
