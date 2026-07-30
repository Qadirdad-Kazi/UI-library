# Nebula UI

A production-ready cinematic React component library — **60+ components** across primitives, page sections, animated backgrounds, and text effects.

This monorepo contains:

- **`apps/web`** — Next.js 15 showcase site
- **`packages/ui`** — `@nebula/ui`, the publishable component library

## Quick start

```bash
pnpm install
pnpm dev          # showcase site at http://localhost:3000
pnpm build        # library + site
pnpm build:ui     # library only
```

## Install in your app

```bash
npm install @nebula/ui
```

```css
/* globals.css */
@import "tailwindcss";
@import "@nebula/ui/styles.css";
```

```tsx
import { GradientButton, GlowCard, Tabs, TabsList, TabsTrigger, TabsContent } from "@nebula/ui";

export function Example() {
  return (
    <GlowCard glowColor="#2dd4bf">
      <GradientButton variant="aurora">Ship it</GradientButton>
    </GlowCard>
  );
}
```

## What's included

### Primitives
Buttons, cards, inputs, badges, modal, sheet, tabs, accordion, alert, toast, toggle, select, avatar, progress, tooltip, skeleton, magnetic button, form field, and more.

### Page sections
Heroes, navbars, features, pricing, FAQ, team, stats, testimonials, timeline, blog, gallery, CTA, contact, footer.

### Backgrounds & text
Particle field, aurora, mesh, spotlight, retro grid, matrix rain, typewriter, scramble, blur reveal, number ticker, sparkles text.

## Production notes

- **Packaged CSS** — keyframes and tokens ship via `@nebula/ui/styles.css`
- **`asChild`** — compose `GradientButton` with Next.js `Link` safely
- **Reduced motion** — continuous animations respect `prefers-reduced-motion`
- **Focus management** — modal/sheet trap focus and restore on close
- **TypeScript** — full exported prop types

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · GSAP · Lenis · Shiki · tsup

## License

MIT
