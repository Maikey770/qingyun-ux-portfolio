"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/types";

interface ProjectCardProps {
  project: ProjectMeta;
  size: "full" | "half";
  className?: string;
}

export function ProjectCard({ project, size, className }: ProjectCardProps) {
  const hero = project.hero;
  const height = size === "full" ? "h-72 md:h-[26rem]" : "h-52 md:h-64";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn("group", className)}
    >
      <Link
        href={`/work/${project.slug}`}
        className={cn(
          "block rounded-card border border-border overflow-hidden",
          "transition-shadow duration-300",
          "hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
        )}
        aria-label={`View case study: ${project.title} — ${project.subtitle}`}
      >
        {/* Visual area */}
        <div
          className={cn("relative overflow-hidden", height)}
          style={{ backgroundColor: project.bgColor }}
        >
          {hero.fit === "cover" ? (
            // Photographic/render — cover is correct, no text to lose
            <>
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                className={cn(
                  "object-cover transition-transform duration-500 group-hover:scale-[1.02]",
                  hero.position ?? "object-center"
                )}
                sizes={size === "full" ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
              />
              {/* Subtle gradient for text readability at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, transparent 50%, ${project.bgColor}80 100%)` }}
                aria-hidden="true"
              />
            </>
          ) : (
            // UI composite / game screens — contain so nothing is cropped
            <div className={cn(
              "absolute inset-0 flex items-center justify-center",
              hero.padding ?? "p-4"
            )}>
              <Image
                src={hero.src}
                alt={hero.alt}
                width={1244}
                height={520}
                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                sizes={size === "full" ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="bg-background p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-mono-s text-text-tertiary" aria-hidden="true">
                {project.number}
              </span>
              <h3 className="font-display text-display-s text-text-primary">
                {project.title}
              </h3>
            </div>
            <span
              className="text-text-secondary transition-transform duration-250 group-hover:translate-x-1 mt-1 flex-shrink-0"
              aria-hidden="true"
            >
              →
            </span>
          </div>

          <p className="font-body text-body-m text-text-secondary mb-5 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5" aria-hidden="true">
            {project.tags.slice(0, size === "half" ? 3 : 5).map((tag) => (
              <span key={tag.label} className={cn(tag.type === "tech" ? "tag-mono" : "tag")}>
                {tag.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-4 border-t border-border">
            <span className="font-body text-caption text-text-tertiary">
              {project.year} · {project.timeline}
            </span>
            <span className="font-body text-caption text-text-secondary">
              <span className="font-display text-[18px]">{project.stat}</span>
              {" "}{project.statLabel}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
