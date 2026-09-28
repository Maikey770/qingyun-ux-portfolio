import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProjectNumber(n: string): string {
  return n.padStart(2, "0");
}

// Stagger delay for Framer Motion children
export function staggerDelay(index: number, base = 0.08): number {
  return index * base;
}
