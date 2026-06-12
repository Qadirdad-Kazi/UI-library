export type ComponentCategory =
  | "hero-section"
  | "features"
  | "about-us"
  | "testimonials"
  | "pricing"
  | "contact"
  | "footer"
  | "navbar"
  | "faq"
  | "team"
  | "stats"
  | "logo-cloud"
  | "timeline"
  | "blog"
  | "cta"
  | "gallery"
  | "backgrounds"
  | "text-animations"
  | "primitives";

export type ComponentRegistryEntry = {
  slug: string;
  name: string;
  category: ComponentCategory;
  tagline: string;
  description: string;
  importStatement: string;
  installCommand: string;
};

export type CategoryMeta = {
  id: ComponentCategory;
  label: string;
  description: string;
  accent: string;
  iconName: string;
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "primitives",
    label: "Primitives",
    description: "Building-block components: buttons, inputs, badges, modals, and more.",
    accent: "#a78bfa",
    iconName: "Box",
  },
  {
    id: "hero-section",
    label: "Hero Section",
    description: "Cinematic openings that set the tone in two seconds.",
    accent: "#a78bfa",
    iconName: "Sparkles",
  },
  {
    id: "navbar",
    label: "Navbar",
    description: "Glass-morphism navigation bars with mobile menus.",
    accent: "#818cf8",
    iconName: "Menu",
  },
  {
    id: "features",
    label: "Features",
    description: "Bento grids and feature blocks with depth and motion.",
    accent: "#22d3ee",
    iconName: "LayoutGrid",
  },
  {
    id: "about-us",
    label: "About Us",
    description: "Mission statements and brand story sections.",
    accent: "#f472b6",
    iconName: "Users",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    description: "Marquees and quote walls that build social proof.",
    accent: "#fbbf24",
    iconName: "MessageCircle",
  },
  {
    id: "pricing",
    label: "Pricing",
    description: "Tier cards with featured highlights and clear CTAs.",
    accent: "#34d399",
    iconName: "BadgeDollarSign",
  },
  {
    id: "faq",
    label: "FAQ",
    description: "Expandable accordions for frequently asked questions.",
    accent: "#fb923c",
    iconName: "HelpCircle",
  },
  {
    id: "team",
    label: "Team",
    description: "Meet-the-team grids with glow cards and avatars.",
    accent: "#f472b6",
    iconName: "UserCircle",
  },
  {
    id: "stats",
    label: "Stats",
    description: "Animated counter metrics that impress at a glance.",
    accent: "#22d3ee",
    iconName: "TrendingUp",
  },
  {
    id: "logo-cloud",
    label: "Logo Cloud",
    description: "Auto-scrolling partner and client logo marquees.",
    accent: "#94a3b8",
    iconName: "Building",
  },
  {
    id: "timeline",
    label: "Timeline",
    description: "Vertical timelines with glow nodes and alternating layout.",
    accent: "#a78bfa",
    iconName: "Clock",
  },
  {
    id: "blog",
    label: "Blog Cards",
    description: "Article previews with images, categories, and read-more.",
    accent: "#22d3ee",
    iconName: "FileText",
  },
  {
    id: "cta",
    label: "CTA Banner",
    description: "Call-to-action banners with gradient backgrounds.",
    accent: "#f472b6",
    iconName: "Megaphone",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Forms and contact panels with neon-glow inputs.",
    accent: "#60a5fa",
    iconName: "Mail",
  },
  {
    id: "gallery",
    label: "Gallery",
    description: "Masonry image grids with lightbox viewer.",
    accent: "#fbbf24",
    iconName: "Image",
  },
  {
    id: "footer",
    label: "Footer",
    description: "Mega footers and minimal closers with cosmic flair.",
    accent: "#c084fc",
    iconName: "PanelBottom",
  },
  {
    id: "backgrounds",
    label: "Backgrounds",
    description: "Animated backgrounds: particles, aurora, grids, and more.",
    accent: "#7c3aed",
    iconName: "Layers",
  },
  {
    id: "text-animations",
    label: "Text Animations",
    description: "Typewriters, scramblers, tickers, and reveal effects.",
    accent: "#22d3ee",
    iconName: "Type",
  },
];

export const COMPONENTS: ComponentRegistryEntry[] = [
  // ── Primitives ───────────────────────────────
  {
    slug: "gradient-button",
    name: "Gradient Button",
    category: "primitives",
    tagline: "Animated gradient button with shimmer hover",
    description:
      "A gradient CTA button with 4 color variants, animated background shift, shimmer sweep on hover, and configurable glow.",
    importStatement: 'import { GradientButton } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "glow-card",
    name: "Glow Card",
    category: "primitives",
    tagline: "Mouse-tracking radial glow card",
    description:
      "A card with mouse-tracking radial glow spotlight, configurable intensity, and gradient border mask.",
    importStatement: 'import { GlowCard } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "neon-input",
    name: "Neon Input",
    category: "primitives",
    tagline: "Text input with neon focus glow",
    description:
      "A styled text input with neon-glow focus ring, label, error state, and 3 accent colors.",
    importStatement: 'import { NeonInput } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "shimmer-badge",
    name: "Shimmer Badge",
    category: "primitives",
    tagline: "Animated shimmer status badge",
    description:
      "A pill badge with a continuous shimmer sweep animation and 3 tone options.",
    importStatement: 'import { ShimmerBadge } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "glass-modal",
    name: "Glass Modal",
    category: "primitives",
    tagline: "Glassmorphism modal with focus trap",
    description:
      "A modal dialog with backdrop blur, focus trap, keyboard handling, animated entrance, and gradient top border.",
    importStatement: 'import { GlassModal } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "neon-textarea",
    name: "Neon Textarea",
    category: "primitives",
    tagline: "Multi-line textarea with neon glow",
    description:
      "A multi-line textarea matching the NeonInput design system with 3 accent colors and error state.",
    importStatement: 'import { NeonTextarea } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "glow-toggle",
    name: "Glow Toggle",
    category: "primitives",
    tagline: "Animated toggle switch with glow trail",
    description:
      "An accessible toggle/switch component with glow effect when active, 3 sizes, and ARIA role=switch.",
    importStatement: 'import { GlowToggle } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "neon-select",
    name: "Neon Select",
    category: "primitives",
    tagline: "Custom dropdown with neon focus",
    description:
      "A styled dropdown select with keyboard navigation, neon glow focus ring, and ARIA combobox pattern.",
    importStatement: 'import { NeonSelect } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "glow-avatar",
    name: "Glow Avatar",
    category: "primitives",
    tagline: "Avatar with animated glow ring",
    description:
      "An avatar component with animated glow border ring, fallback initials, and 4 size options.",
    importStatement: 'import { GlowAvatar } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "animated-counter",
    name: "Animated Counter",
    category: "primitives",
    tagline: "Number count-up on scroll",
    description:
      "A number counter with scroll-triggered animation, cubic easing, prefix/suffix, and decimal support.",
    importStatement: 'import { AnimatedCounter } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "gradient-divider",
    name: "Gradient Divider",
    category: "primitives",
    tagline: "Gradient horizontal separator",
    description:
      "A horizontal gradient line separator with 4 color variants and configurable spacing.",
    importStatement: 'import { GradientDivider } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "skeleton-loader",
    name: "Skeleton Loader",
    category: "primitives",
    tagline: "Shimmer loading placeholder",
    description:
      "A loading skeleton with shimmer animation supporting text, circular, and rectangular variants.",
    importStatement: 'import { SkeletonLoader } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "glow-tooltip",
    name: "Glow Tooltip",
    category: "primitives",
    tagline: "Tooltip with neon glow border",
    description:
      "A tooltip with neon border, glassmorphism backdrop, 4 placement options, and accessible focus trigger.",
    importStatement: 'import { GlowTooltip } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "shimmer-link",
    name: "Shimmer Link",
    category: "primitives",
    tagline: "Link with gradient underline on hover",
    description:
      "An animated link with gradient shimmer underline on hover and optional external link icon.",
    importStatement: 'import { ShimmerLink } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "glow-progress",
    name: "Glow Progress",
    category: "primitives",
    tagline: "Progress bar with animated glow",
    description:
      "A progress bar with gradient fill, animated glow effect, and optional label display.",
    importStatement: 'import { GlowProgress } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "toast",
    name: "Toast Notification",
    category: "primitives",
    tagline: "Neon toast notification system",
    description:
      "A complete toast notification system with provider, useToast() hook, auto-dismiss, and 4 types.",
    importStatement:
      'import { ToastProvider, useToast } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  // ── Sections ─────────────────────────────────
  {
    slug: "hero-aurora",
    name: "Hero Aurora",
    category: "hero-section",
    tagline: "Gradient cinematic hero with animated headline",
    description:
      "A bold landing hero with a shifting aurora gradient headline, badge, dual CTAs, and a stat strip.",
    importStatement: 'import { HeroAurora } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "hero-split",
    name: "Hero Split",
    category: "hero-section",
    tagline: "Two-column hero with copy + form",
    description:
      "A split-screen hero pairing headline and CTAs with a sign-up form. Great for SaaS launches.",
    importStatement: 'import { HeroSplit } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "hero-minimal",
    name: "Hero Minimal",
    category: "hero-section",
    tagline: "Centered hero with concise CTA",
    description:
      "A clean, centered hero with badge, short copy, and one focused call to action.",
    importStatement: 'import { HeroMinimal } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "navbar-glass",
    name: "Navbar Glass",
    category: "navbar",
    tagline: "Sticky glass navbar with mobile menu",
    description:
      "A sticky glass navbar with blur-on-scroll, gradient bottom border, and responsive hamburger menu.",
    importStatement: 'import { NavbarGlass } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "navbar-floating",
    name: "Navbar Floating",
    category: "navbar",
    tagline: "Centered floating pill navbar",
    description:
      "A centered floating pill-shaped navbar with glassmorphism and gradient CTA button.",
    importStatement: 'import { NavbarFloating } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "features-bento",
    name: "Features Bento",
    category: "features",
    tagline: "Asymmetric bento grid of features",
    description:
      "An asymmetric bento layout with hover spotlights and a featured tile.",
    importStatement: 'import { FeaturesBento } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "features-list",
    name: "Features List",
    category: "features",
    tagline: "Editorial-style feature rows",
    description:
      "A clean stacked list of key features with icon slots and concise descriptions.",
    importStatement: 'import { FeaturesList } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "about-mission",
    name: "About Mission",
    category: "about-us",
    tagline: "Mission statement with gradient emphasis",
    description:
      "A scroll-aware mission statement section with gradient highlights and a values strip.",
    importStatement: 'import { AboutMission } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "testimonial-marquee",
    name: "Testimonial Marquee",
    category: "testimonials",
    tagline: "Edge-fading scrolling testimonial wall",
    description:
      "A two-row marquee of testimonial cards with edge fade masks. Pause on hover.",
    importStatement: 'import { TestimonialMarquee } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "testimonials-grid",
    name: "Testimonials Grid",
    category: "testimonials",
    tagline: "Balanced quote grid with spotlight cards",
    description:
      "A responsive testimonials grid using glow cards for social proof sections.",
    importStatement: 'import { TestimonialsGrid } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "pricing-tiers",
    name: "Pricing Tiers",
    category: "pricing",
    tagline: "Three-tier pricing with glow",
    description:
      "A pricing section with three tiers, featured highlight, and per-feature checkmarks.",
    importStatement: 'import { PricingTiers } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "pricing-comparison",
    name: "Pricing Comparison",
    category: "pricing",
    tagline: "Plan comparison table",
    description:
      "A comparison table layout for pricing pages with feature availability across plans.",
    importStatement: 'import { PricingComparison } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "faq-accordion",
    name: "FAQ Accordion",
    category: "faq",
    tagline: "Expandable FAQ with smooth animation",
    description:
      "An expandable FAQ section with smooth CSS grid animation and accessible ARIA controls.",
    importStatement: 'import { FaqAccordion } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "team-grid",
    name: "Team Grid",
    category: "team",
    tagline: "Meet-the-team section with glow cards",
    description:
      "A team grid section with GlowCard hover effects, GlowAvatar, and configurable columns.",
    importStatement: 'import { TeamGrid } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "stats-section",
    name: "Stats Section",
    category: "stats",
    tagline: "Animated stat counters",
    description:
      "An animated stats section with scroll-triggered counters and hover glow effects.",
    importStatement: 'import { StatsSection } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "logo-cloud",
    name: "Logo Cloud",
    category: "logo-cloud",
    tagline: "Auto-scrolling partner logo marquee",
    description:
      "An auto-scrolling logo marquee with edge fade, grayscale-to-color hover, and seamless loop.",
    importStatement: 'import { LogoCloud } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "timeline-section",
    name: "Timeline Section",
    category: "timeline",
    tagline: "Vertical timeline with glow nodes",
    description:
      "A vertical timeline with glowing accent dots, gradient line, and alternating left/right layout.",
    importStatement: 'import { TimelineSection } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "blog-cards",
    name: "Blog Cards",
    category: "blog",
    tagline: "Article preview cards with image",
    description:
      "Blog card grid with image, category badge, excerpt, hover lift, and read-more link.",
    importStatement: 'import { BlogCards } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "cta-banner",
    name: "CTA Banner",
    category: "cta",
    tagline: "Full-width gradient CTA banner",
    description:
      "A full-width call-to-action banner with gradient background, dual CTAs, and 3 variants.",
    importStatement: 'import { CtaBanner } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "contact-form",
    name: "Contact Form",
    category: "contact",
    tagline: "Glass contact panel with neon inputs",
    description:
      "A glassy contact form section with neon-focus inputs and gradient submit button.",
    importStatement: 'import { ContactForm } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "contact-cards",
    name: "Contact Cards",
    category: "contact",
    tagline: "Multi-channel contact cards",
    description:
      "A compact contact section using responsive cards for email, chat, and sales channels.",
    importStatement: 'import { ContactCards } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "gallery-grid",
    name: "Gallery Grid",
    category: "gallery",
    tagline: "Masonry gallery with lightbox",
    description:
      "A masonry image grid with lightbox viewer, keyboard navigation, and caption support.",
    importStatement: 'import { GalleryGrid } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "footer-cosmic",
    name: "Footer Cosmic",
    category: "footer",
    tagline: "Mega footer with cosmic gradient",
    description:
      "A 4-column mega footer with brand strip, gradient top border, newsletter capture, and social row.",
    importStatement: 'import { FooterCosmic } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  // ── Backgrounds ──────────────────────────────
  {
    slug: "particle-field",
    name: "Particle Field",
    category: "backgrounds",
    tagline: "Canvas particles with mouse attraction",
    description:
      "Canvas-based floating particles with mouse attraction physics and inter-particle connections.",
    importStatement: 'import { ParticleField } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "aurora-background",
    name: "Aurora Background",
    category: "backgrounds",
    tagline: "Animated morphing color blobs",
    description:
      "Animated color blobs morphing in the background with configurable colors, speed, and blur.",
    importStatement: 'import { AuroraBackground } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "grid-beam",
    name: "Grid Beam",
    category: "backgrounds",
    tagline: "Animated beam through a dot grid",
    description:
      "An animated beam traveling through a dot grid pattern with configurable speed and colors.",
    importStatement: 'import { GridBeam } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "gradient-mesh",
    name: "Gradient Mesh",
    category: "backgrounds",
    tagline: "Smooth animated mesh gradient",
    description:
      "A smooth animated mesh gradient background with 4 color stops and gentle rotation.",
    importStatement: 'import { GradientMesh } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "spotlight",
    name: "Spotlight",
    category: "backgrounds",
    tagline: "Mouse-following spotlight reveal",
    description:
      "A mouse-following spotlight reveal effect that can wrap any content as a container.",
    importStatement: 'import { Spotlight } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "retro-grid",
    name: "Retro Grid",
    category: "backgrounds",
    tagline: "Perspective 3D retro grid",
    description:
      "A perspective 3D grid receding into the horizon with scrolling animation.",
    importStatement: 'import { RetroGrid } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "dot-pattern",
    name: "Dot Pattern",
    category: "backgrounds",
    tagline: "Dot pattern with radial fade",
    description:
      "A dot pattern background with configurable size, spacing, and radial fade mask.",
    importStatement: 'import { DotPattern } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "matrix-rain",
    name: "Matrix Rain",
    category: "backgrounds",
    tagline: "Code-rain character cascade",
    description:
      "A canvas-based matrix rain effect with configurable characters, color, and speed.",
    importStatement: 'import { MatrixRain } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  // ── Text Animations ──────────────────────────
  {
    slug: "typewriter-text",
    name: "Typewriter Text",
    category: "text-animations",
    tagline: "Character-by-character typing animation",
    description:
      "Typewriter text animation with multi-word rotation, configurable speed, and blinking cursor.",
    importStatement: 'import { TypewriterText } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "gradient-text-reveal",
    name: "Gradient Text Reveal",
    category: "text-animations",
    tagline: "Text reveal with gradient sweep",
    description:
      "Text fading from solid white to a gradient on scroll with configurable timing.",
    importStatement: 'import { GradientTextReveal } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "word-rotator",
    name: "Word Rotator",
    category: "text-animations",
    tagline: "Cycling words with smooth transition",
    description:
      "A cycling word rotator with smooth vertical slide transition and configurable interval.",
    importStatement: 'import { WordRotator } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "text-scramble",
    name: "Text Scramble",
    category: "text-animations",
    tagline: "Scrambled letters resolving to text",
    description:
      "A text scramble/decode effect with auto, hover, and scroll trigger modes.",
    importStatement: 'import { TextScramble } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "blur-reveal",
    name: "Blur Reveal",
    category: "text-animations",
    tagline: "Content deblurring on scroll",
    description:
      "Content deblurring on scroll into view with configurable delay and duration.",
    importStatement: 'import { BlurReveal } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
  {
    slug: "number-ticker",
    name: "Number Ticker",
    category: "text-animations",
    tagline: "Animated number ticker/odometer",
    description:
      "Animated number ticker with scroll-triggered animation, direction control, and exponential easing.",
    importStatement: 'import { NumberTicker } from "@nebula/ui";',
    installCommand: "npm install @nebula/ui",
  },
];

export function getComponent(slug: string) {
  return COMPONENTS.find((c) => c.slug === slug);
}

export function getCategory(id: ComponentCategory) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getComponentsByCategory(category: ComponentCategory) {
  return COMPONENTS.filter((c) => c.category === category);
}
