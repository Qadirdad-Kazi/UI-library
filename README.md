# Nebula UI

A cinematic, AI-powered React component library with **53 production-ready components** — sections, animated backgrounds, text effects, and primitives.

This monorepo contains:

- **`apps/web`** — Next.js 15 showcase site (Hero · Components · Categories · Playground · Case Studies · Docs)
- **`packages/ui`** — `@nebula/ui`, the publishable component library

## Quick start

```bash
pnpm install
pnpm dev          # runs the showcase site at http://localhost:3000
pnpm build        # builds both the library and the site
pnpm build:ui     # builds just the library
```

## Component Library

### Primitives (16)

| Component | Description |
|-----------|-------------|
| `GradientButton` | Animated gradient button with 4 color variants and shimmer hover |
| `GlowCard` | Mouse-tracking radial glow card |
| `NeonInput` | Text input with neon focus glow |
| `ShimmerBadge` | Animated shimmer status badge |
| `GlassModal` | Glassmorphism modal with focus trap |
| `NeonTextarea` | Multi-line textarea with neon glow |
| `GlowToggle` | Toggle switch with glow trail |
| `NeonSelect` | Custom dropdown with keyboard navigation |
| `GlowAvatar` | Avatar with animated glow ring |
| `AnimatedCounter` | Number count-up on scroll |
| `GradientDivider` | Gradient horizontal separator |
| `SkeletonLoader` | Shimmer loading placeholder |
| `GlowTooltip` | Tooltip with neon glow border |
| `ShimmerLink` | Link with gradient underline on hover |
| `GlowProgress` | Progress bar with animated glow |
| `Toast` | Notification system with `useToast()` hook |

### Page Sections (23)

| Component | Description |
|-----------|-------------|
| `HeroAurora` | Gradient cinematic hero with animated headline |
| `HeroSplit` | Two-column hero with copy + form |
| `HeroMinimal` | Centered hero with concise CTA |
| `NavbarGlass` | Sticky glass navbar with mobile menu |
| `NavbarFloating` | Centered floating pill navbar |
| `FeaturesBento` | Asymmetric bento grid of features |
| `FeaturesList` | Editorial-style feature rows |
| `AboutMission` | Mission statement with gradient emphasis |
| `TestimonialMarquee` | Auto-scrolling testimonial wall |
| `TestimonialsGrid` | Balanced quote grid |
| `PricingTiers` | Three-tier pricing with glow |
| `PricingComparison` | Plan comparison table |
| `FaqAccordion` | Expandable FAQ with smooth animation |
| `TeamGrid` | Team grid with glow cards |
| `StatsSection` | Animated stat counters |
| `LogoCloud` | Auto-scrolling logo marquee |
| `TimelineSection` | Vertical timeline with glow nodes |
| `BlogCards` | Article preview cards |
| `CtaBanner` | Call-to-action gradient banner |
| `GalleryGrid` | Masonry gallery with lightbox |
| `ContactForm` | Glass contact panel |
| `ContactCards` | Multi-channel contact cards |
| `FooterCosmic` | Mega footer with cosmic gradient |

### Animated Backgrounds (8)

| Component | Description |
|-----------|-------------|
| `ParticleField` | Canvas particles with mouse attraction |
| `AuroraBackground` | Animated morphing color blobs |
| `GridBeam` | Animated beam through a dot grid |
| `GradientMesh` | Smooth animated mesh gradient |
| `Spotlight` | Mouse-following spotlight reveal |
| `RetroGrid` | Perspective 3D retro grid |
| `DotPattern` | Dot pattern with radial fade |
| `MatrixRain` | Code-rain character cascade |

### Text Animations (6)

| Component | Description |
|-----------|-------------|
| `TypewriterText` | Character-by-character typing animation |
| `GradientTextReveal` | Text reveal with gradient sweep |
| `WordRotator` | Cycling words with smooth transition |
| `TextScramble` | Scrambled letters resolving to text |
| `BlurReveal` | Content deblurring on scroll |
| `NumberTicker` | Animated number ticker/odometer |

## Tech stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 · shadcn/ui primitives
- React Three Fiber + drei (3D AI sphere)
- GSAP + ScrollTrigger (cinematic scroll animations)
- Lenis (buttery smooth scroll)
- Shiki (syntax-highlighted code snippets)
- tsup (library build pipeline)

## Publishing the library

```bash
cd packages/ui
pnpm build
npm publish --access public
```

## Project structure

```
.
├── apps/
│   └── web/                     # Next.js showcase site
│       ├── app/                 # App Router pages
│       │   ├── page.tsx         # Hero + category grid (landing)
│       │   ├── components/      # Component showcase pages
│       │   ├── categories/      # Category pages with listed components
│       │   ├── playground/      # Interactive playground
│       │   ├── case-studies/    # Real-world examples
│       │   └── docs/            # Installation & guides
│       └── components/          # Site-level UI (hero, nav, smooth-scroll)
└── packages/
    └── ui/                      # @nebula/ui library
        └── src/
            ├── components/      # Primitives (16 components)
            ├── sections/        # Page sections (23 components)
            ├── backgrounds/     # Animated backgrounds (8 components)
            ├── text/            # Text animations (6 components)
            └── index.ts         # Barrel exports
```

## License

MIT — see [LICENSE](./LICENSE) for details.
