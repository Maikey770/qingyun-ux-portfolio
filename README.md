# Qingyun Yao — Portfolio

Product & UX Designer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 15** — App Router, server components
- **TypeScript** — Full type safety
- **Tailwind CSS 3** — Utility-first styling with design tokens
- **Framer Motion** — Scroll-triggered animations, page transitions
- **next/font** — Optimized Google Fonts (Instrument Serif, Inter, JetBrains Mono)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, font loading, metadata
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── not-found.tsx       # 404 page
│   └── work/
│       ├── between-feelings/page.tsx
│       ├── pulse-of-motion/page.tsx
│       ├── accident-insight-beam/page.tsx
│       └── moonpath-keeper/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Fixed nav with scroll behavior + mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Homepage hero
│   │   ├── WorkSection.tsx # Project card grid
│   │   ├── ProjectCard.tsx # Individual project cards
│   │   ├── AboutStrip.tsx  # Homepage about section
│   │   └── SkillsMarquee.tsx
│   ├── project/
│   │   └── ProjectHero.tsx # Reusable project page hero
│   └── ui/
│       ├── Reveal.tsx      # Scroll-triggered animation wrappers
│       ├── SectionHeader.tsx
│       ├── StatBlock.tsx
│       └── DecisionCard.tsx
├── data/
│   └── projects.ts         # All project metadata + skills data
├── lib/
│   └── utils.ts            # cn() utility + helpers
└── types/
    └── index.ts            # TypeScript types
```

## Customization

### Swap Display Font
In `src/app/globals.css`, change one variable:
```css
--font-display: 'DM Serif Display';  /* or 'Cormorant Garamond' */
```
And update the import in `src/app/layout.tsx` to import the new font from `next/font/google`.

### Add Headshot
1. Add your photo to `public/images/about/headshot.jpg`
2. In `src/app/about/page.tsx`, set `SHOW_HEADSHOT = true`

### Update Contact Info
Edit email, LinkedIn, and GitHub links in:
- `src/components/layout/Footer.tsx`
- `src/app/about/page.tsx`

### Add Resume
The current resume is `public/Qingyun_Yao_Resume.pdf`. Desktop navigation, mobile navigation and About all open this same file in a new tab. Replace the asset without modifying the PDF contents.

### Add Selected Work
Add a complete entry to `src/data/projects.ts`, including its `hero` image configuration and `size` (`full` or `half`). Add the corresponding case-study route and images, then set `featured: true` when ready to publish. Consecutive half-width projects share a row; full-width projects retain their own row. No homepage component changes are needed.

MyChart UX Research — Healthcare Communication and Nighttime Mobility Cane Redesign are documented in the latest resume, but have no case-study assets here. They are intentionally absent from the live project list. Add them only when their content and assets are ready.

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Design System

See the Tailwind config (`tailwind.config.ts`) and globals CSS (`src/app/globals.css`) for the complete token system:

- **Colors**: All CSS custom properties, easily swappable per theme
- **Typography**: Three typefaces in strict semantic roles
- **Spacing**: 4px base unit, 8px grid rhythm
- **Motion**: All animations respect `prefers-reduced-motion`
- **Dark theme**: Between Feelings page uses `.bf-page` class for full dark mode
