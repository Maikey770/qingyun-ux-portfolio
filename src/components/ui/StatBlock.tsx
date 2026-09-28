"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
  dark?: boolean;
}

export function StatBlock({ value, label, sublabel, className, dark = false }: StatBlockProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "stat-number",
          dark ? "text-[#E8E0F0]" : "text-text-primary"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "font-body text-body-m",
          dark ? "text-[#9B90B0]" : "text-text-secondary"
        )}
      >
        {label}
      </span>
      {sublabel && (
        <span
          className={cn(
            "font-body text-caption",
            dark ? "text-[#6B6080]" : "text-text-tertiary"
          )}
        >
          {sublabel}
        </span>
      )}
    </div>
  );
}

interface StatsRowProps {
  stats: Array<{ value: string; label: string; sublabel?: string }>;
  className?: string;
  dark?: boolean;
}

export function StatsRow({ stats, className, dark = false }: StatsRowProps) {
  return (
    <div
      className={cn(
        "grid gap-8",
        stats.length === 2 && "grid-cols-2",
        stats.length === 3 && "grid-cols-1 sm:grid-cols-3",
        stats.length === 4 && "grid-cols-2 sm:grid-cols-4",
        className
      )}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col gap-1 pb-8 border-b",
            dark ? "border-[#2D2540]" : "border-border",
            "sm:border-b-0 sm:pb-0",
            i < stats.length - 1 && "sm:border-r sm:pr-8"
          )}
        >
          <StatBlock {...stat} dark={dark} />
        </div>
      ))}
    </div>
  );
}
