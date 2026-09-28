import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WorkSection } from "@/components/sections/WorkSection";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";

export const metadata: Metadata = {
  title: "Qingyun Yao — Product & UX Designer",
  description:
    "I design human-centered digital experiences, combining user research, interaction design, and emerging technologies to solve real-world problems.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <SkillsMarquee />
      <AboutStrip />
    </>
  );
}
