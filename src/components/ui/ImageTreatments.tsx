import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── IMAGE TREATMENT SYSTEM ───────────────────────────────────────────────────
//
// Rule: the CONTAINER adapts to the IMAGE, not the other way around.
//
// FullBleedImage   → hero sections, decorative covers. object-cover ok.
// ArtifactImage    → PDF slides, research boards, diagrams, charts.
//                    Container height matches image's natural aspect ratio.
//                    object-contain. No giant empty frames.
// PortraitArtifact → Tall/vertical images. Constrained width so they don't
//                    create huge horizontal empty areas.
// GalleryGrid      → Mixed-size adaptive layout. No forced equal heights.
// PhoneFrame       → Mobile app screenshots in phone bezels.
// ─────────────────────────────────────────────────────────────────────────────

// ─── 1. FULL BLEED IMAGE ──────────────────────────────────────────────────────
// Decorative hero images, game backgrounds, product renders — cropping is fine.

interface FullBleedImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: string;           // Tailwind height class, e.g. "h-80"
  objectPosition?: string;   // Tailwind object-position class
  sizes?: string;
  priority?: boolean;
  overlay?: string;          // CSS gradient string for text overlay
}

export function FullBleedImage({
  src,
  alt,
  className,
  height = "h-80",
  objectPosition = "object-center",
  sizes = "100vw",
  priority = false,
  overlay,
}: FullBleedImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-card", height, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover transition-transform duration-500 group-hover:scale-[1.02]", objectPosition)}
        sizes={sizes}
        priority={priority}
      />
      {overlay && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: overlay }} aria-hidden="true" />
      )}
    </div>
  );
}

// ─── 2. ARTIFACT IMAGE ────────────────────────────────────────────────────────
// PDF slides, research boards, diagrams, charts — NEVER crop.
// The container height is determined by the image's aspect ratio (w/h).
// Pass `aspectRatio` as a CSS aspect-ratio value, e.g. "16/9", "4/3", "3/4".

interface ArtifactImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  bgColor?: string;
  aspectRatio?: string;      // CSS aspect-ratio, e.g. "16/9", "4/3", "1/1"
  maxWidth?: string;         // Tailwind max-w class to constrain wide images
  sizes?: string;
  priority?: boolean;
  padding?: string;
}

export function ArtifactImage({
  src,
  alt,
  caption,
  className,
  bgColor = "bg-surface",
  aspectRatio,
  maxWidth,
  sizes = "(max-width: 768px) 100vw, 80vw",
  priority = false,
  padding = "p-3",
}: ArtifactImageProps) {
  return (
    <figure className={cn(maxWidth, className)}>
      <div
        className={cn("relative w-full rounded-card overflow-hidden", bgColor, padding)}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes={sizes}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="font-body text-caption text-text-tertiary mt-2 text-center px-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── 3. PORTRAIT ARTIFACT ─────────────────────────────────────────────────────
// For tall/vertical images (aspect ratio taller than 1:1).
// Constrained width so they don't create massive horizontal empty areas.
// Pair with text by placing inside a grid.

interface PortraitArtifactProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  bgColor?: string;
  aspectRatio?: string;      // defaults to "3/4"
  sizes?: string;
}

export function PortraitArtifact({
  src,
  alt,
  caption,
  className,
  bgColor = "bg-surface",
  aspectRatio = "3/4",
  sizes = "(max-width: 768px) 80vw, 35vw",
}: PortraitArtifactProps) {
  return (
    <figure className={cn(className)}>
      <div
        className={cn("relative w-full rounded-card overflow-hidden", bgColor)}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2"
          sizes={sizes}
        />
      </div>
      {caption && (
        <figcaption className="font-body text-caption text-text-tertiary mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── 4. GALLERY GRID ──────────────────────────────────────────────────────────
// Adaptive layout for mixed-content galleries.
// Each item specifies its own aspect ratio. No forced equal heights.

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;     // "16/9" | "4/3" | "1/1" | "3/4"
  bgColor?: string;
  span?: 1 | 2;             // column span (2 = wider)
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3;
  className?: string;
}

export function GalleryGrid({ items, columns = 3, className }: GalleryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, i) => (
        <figure
          key={i}
          className={cn(item.span === 2 && "sm:col-span-2")}
        >
          <div
            className={cn(
              "relative w-full rounded-card overflow-hidden",
              item.bgColor ?? "bg-surface"
            )}
            style={{ aspectRatio: item.aspectRatio ?? "4/3" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          {item.caption && (
            <figcaption className="font-body text-caption text-text-tertiary mt-2">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

// ─── 5. PHONE FRAME ──────────────────────────────────────────────────────────
// Mobile screenshots. The phone dimensions are fixed; image fills inside.

interface PhoneFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  frameColor?: string;
  width?: number;           // display width in px, e.g. 180
}

export function PhoneFrame({
  src,
  alt,
  caption,
  className,
  frameColor = "#2D1A35",
  width = 180,
}: PhoneFrameProps) {
  // Natural phone aspect ratio 9:19.5 ≈ 0.462
  const height = Math.round(width / 0.462);

  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <div
        className="rounded-[1.5rem] overflow-hidden shadow-card-hover flex-shrink-0"
        style={{ backgroundColor: frameColor, padding: 3, width, height }}
      >
        <div className="rounded-[1.3rem] overflow-hidden w-full h-full relative">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes={`${width}px`}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="font-body text-caption text-text-tertiary mt-2 text-center" style={{ maxWidth: width }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── 6. SCREENSHOT FRAME ─────────────────────────────────────────────────────
// Browser-chrome wrapper for desktop screenshots.

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  url?: string;
  dark?: boolean;
  aspectRatio?: string;
}

export function ScreenshotFrame({
  src,
  alt,
  caption,
  className,
  url,
  dark = false,
  aspectRatio = "16/9",
}: ScreenshotFrameProps) {
  return (
    <figure className={cn("rounded-card overflow-hidden shadow-card", className)}>
      <div className={cn("flex items-center gap-2 px-3 py-2 border-b",
        dark ? "bg-[#1A1525] border-[#2D2540]" : "bg-surface border-border"
      )}>
        <div className="flex gap-1.5" aria-hidden="true">
          {[1, 2, 3].map(i => (
            <div key={i} className={cn("w-2.5 h-2.5 rounded-full", dark ? "bg-[#2D2540]" : "bg-border")} />
          ))}
        </div>
        {url && (
          <span className={cn("font-mono text-[10px] ml-2", dark ? "text-[#6B6080]" : "text-text-tertiary")}>
            {url}
          </span>
        )}
      </div>
      <div
        className={cn("relative w-full", dark ? "bg-[#0D0B14]" : "bg-background")}
        style={{ aspectRatio }}
      >
        <Image src={src} alt={alt} fill className="object-contain" sizes="80vw" />
      </div>
      {caption && (
        <div className={cn("px-4 py-2 border-t", dark ? "bg-[#1A1525] border-[#2D2540]" : "bg-surface border-border")}>
          <p className={cn("font-body text-caption", dark ? "text-[#6B6080]" : "text-text-tertiary")}>{caption}</p>
        </div>
      )}
    </figure>
  );
}
