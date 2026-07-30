"use client";

import {
  HeroAurora,
  HeroSplit,
  HeroMinimal,
  FeaturesBento,
  FeaturesList,
  AboutMission,
  TestimonialMarquee,
  TestimonialsGrid,
  PricingTiers,
  PricingComparison,
  ContactForm,
  ContactCards,
  FooterCosmic,
  NavbarGlass,
  NavbarFloating,
  FaqAccordion,
  TeamGrid,
  StatsSection,
  LogoCloud,
  TimelineSection,
  BlogCards,
  CtaBanner,
  GalleryGrid,
  GradientButton,
  GlowCard,
  NeonInput,
  ShimmerBadge,
  GlassModal,
  NeonTextarea,
  GlowToggle,
  NeonSelect,
  GlowAvatar,
  AnimatedCounter,
  GradientDivider,
  SkeletonLoader,
  GlowTooltip,
  ShimmerLink,
  GlowProgress,
  ToastProvider,
  useToast,
  ParticleField,
  AuroraBackground,
  GridBeam,
  GradientMesh,
  Spotlight,
  RetroGrid,
  DotPattern,
  MatrixRain,
  TypewriterText,
  GradientTextReveal,
  WordRotator,
  TextScramble,
  BlurReveal,
  NumberTicker,
  cn,
  BorderBeam,
  RainbowButton,
  SparklesText,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  Sheet,
  MagneticButton,
  FormField,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@nebula/ui";
import {
  Bot,
  Wand2,
  ShieldCheck,
  Zap,
  Github,
  Twitter,
  Gauge,
  Shield,
  Workflow,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";
import { useState, type ComponentType } from "react";

export type DemoProps = { preview?: boolean };

/* ----------------------- Demo: Hero Aurora ----------------------- */

export function HeroAuroraDemo() {
  return (
    <div className="w-full">
      <HeroAurora
        badge="v1.0 · Now in beta"
        title="Build cinematic UI"
        highlight="without the headache."
        description="A premium component library that ships with motion, depth, and taste baked in."
        primaryCta={{ label: "Get started", href: "#" }}
        secondaryCta={{ label: "Read the docs", href: "#" }}
        stats={[
          { value: "12+", label: "Components" },
          { value: "100%", label: "TypeScript" },
          { value: "0kb", label: "Runtime CSS" },
        ]}
        className="min-h-[420px]"
      />
    </div>
  );
}

/* ----------------------- Demo: Hero Split ----------------------- */

export function HeroSplitDemo() {
  return (
    <div className="w-full">
      <HeroSplit
        badge="Early access"
        title="The fastest way to launch a product"
        description="Pair a focused message with a sign-up form. Convert visitors before they scroll."
        bullets={["No credit card", "Cancel anytime", "Free for 14 days"]}
        formTitle="Join the waitlist"
        formCta="Request access"
        className="py-12 md:py-12"
      />
    </div>
  );
}

export function HeroMinimalDemo() {
  return (
    <div className="w-full">
      <HeroMinimal
        badge="Just launched"
        title="A cleaner hero for focused pages."
        description="Great for product updates, changelogs, and simple landing pages."
        cta={{ label: "See docs", href: "#" }}
        className="py-12"
      />
    </div>
  );
}

/* ----------------------- Demo: Features Bento ----------------------- */

export function FeaturesBentoDemo({ preview }: DemoProps = {}) {
  return (
    <div className="w-full">
      <FeaturesBento
        compact={preview}
        eyebrow="Capabilities"
        title="Everything you need to ship."
        description="Beautiful primitives, accessible by default, themeable down to a token."
        features={[
          {
            title: "AI-aware motion",
            description:
              "Components that respond to scroll, focus, and intent — not just hover.",
            icon: <Bot className="size-5" />,
            glowColor: "#a78bfa",
            span: "wide",
          },
          {
            title: "Type-safe API",
            description: "Every prop is typed. Autocomplete-first.",
            icon: <ShieldCheck className="size-5" />,
            glowColor: "#22d3ee",
          },
          {
            title: "Tailwind v4",
            description: "Zero runtime CSS, full theming via @theme tokens.",
            icon: <Wand2 className="size-5" />,
            glowColor: "#f472b6",
          },
          {
            title: "Lightning fast",
            description: "Tree-shakable, no heavy deps, built for SSR.",
            icon: <Zap className="size-5" />,
            glowColor: "#fbbf24",
            span: "wide",
          },
        ]}
        className={preview ? "py-0" : "py-10"}
      />
    </div>
  );
}

export function FeaturesListDemo({ preview }: DemoProps = {}) {
  return (
    <div className="w-full">
      <FeaturesList
        compact={preview}
        items={[
          {
            title: "Live theming",
            description: "Change tokens once and every section adapts instantly.",
            icon: <Gauge className="size-4" />,
          },
          {
            title: "Built-in security patterns",
            description: "Input and CTA defaults keep UX sane and predictable.",
            icon: <Shield className="size-4" />,
          },
          {
            title: "Composable workflows",
            description: "Mix primitives and sections without design drift.",
            icon: <Workflow className="size-4" />,
          },
        ]}
        className={preview ? "py-0" : "py-10"}
      />
    </div>
  );
}

/* ----------------------- Demo: About Mission ----------------------- */

export function AboutMissionDemo() {
  return (
    <div className="w-full">
      <AboutMission
        eyebrow="Our mission"
        title="We craft software that"
        highlight="feels handmade."
        paragraphs={[
          "Nebula began as a side project — a way to ship marketing pages that didn't look like every other dashboard.",
          "Today we power product launches for teams who care about the difference between fine and exceptional.",
        ]}
        values={[
          { title: "Care", description: "Every component is hand-tuned for motion." },
          { title: "Speed", description: "Ship today, polish tomorrow." },
          { title: "Open", description: "MIT licensed and contribution-friendly." },
        ]}
        className="py-12"
      />
    </div>
  );
}

/* ----------------------- Demo: Testimonial Marquee ----------------------- */

export function TestimonialMarqueeDemo() {
  return (
    <div className="w-full">
      <TestimonialMarquee
        eyebrow="Loved by builders"
        title="Don't take our word for it."
        testimonials={[
          {
            quote:
              "Nebula cut our marketing-page build time in half. The motion just works.",
            author: "Aria Chen",
            role: "Head of Design, Lumen",
            avatarColor: "#a78bfa",
          },
          {
            quote:
              "It's the first component library that actually looks like the Figma file.",
            author: "Marcus Wei",
            role: "Engineering, Orbital Pay",
            avatarColor: "#22d3ee",
          },
          {
            quote:
              "We replaced four different libraries with Nebula and shipped 30% faster.",
            author: "Priya Shah",
            role: "Founder, Seraph",
            avatarColor: "#f472b6",
          },
          {
            quote:
              "Beautiful by default — and configurable when you need it.",
            author: "Diego Morales",
            role: "Lead Engineer, Nimbus",
            avatarColor: "#fbbf24",
          },
          {
            quote:
              "The component docs sold our team in five minutes flat.",
            author: "Hana Kobayashi",
            role: "Product, Astra",
            avatarColor: "#34d399",
          },
        ]}
        className="py-10"
      />
    </div>
  );
}

export function TestimonialsGridDemo() {
  return (
    <div className="w-full">
      <TestimonialsGrid
        items={[
          {
            quote: "The components feel handcrafted. We shipped in days, not weeks.",
            author: "Ari Kim",
            role: "Product Designer",
            accent: "#a78bfa",
          },
          {
            quote: "Easy to theme, easy to extend, and surprisingly lightweight.",
            author: "Ben Soto",
            role: "Frontend Engineer",
            accent: "#22d3ee",
          },
          {
            quote: "Our conversion page got visually upgraded overnight.",
            author: "Lina Noor",
            role: "Growth Lead",
            accent: "#f472b6",
          },
        ]}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Pricing Tiers ----------------------- */

export function PricingTiersDemo() {
  return (
    <div className="w-full">
      <PricingTiers
        eyebrow="Pricing"
        title="Start free. Scale beautifully."
        description="Every plan ships with the full component library."
        tiers={[
          {
            name: "Hobby",
            price: "$0",
            period: "/mo",
            description: "Solo projects and side hustles.",
            features: ["All components", "Community support", "MIT license"],
            cta: { label: "Start free", href: "#" },
          },
          {
            name: "Pro",
            price: "$29",
            period: "/mo",
            description: "For teams shipping weekly.",
            features: [
              "All Hobby features",
              "Priority email support",
              "Private templates",
              "Figma kit access",
            ],
            cta: { label: "Upgrade", href: "#" },
            featured: true,
          },
          {
            name: "Studio",
            price: "$99",
            period: "/mo",
            description: "For agencies and design teams.",
            features: [
              "All Pro features",
              "Dedicated Slack channel",
              "Custom theming",
              "Onboarding session",
            ],
            cta: { label: "Contact sales", href: "#" },
          },
        ]}
        className="py-10"
      />
    </div>
  );
}

export function PricingComparisonDemo() {
  return (
    <div className="w-full">
      <PricingComparison
        plans={[
          { name: "Starter", price: "$0", ctaLabel: "Start" },
          { name: "Pro", price: "$29", ctaLabel: "Upgrade", featured: true },
          { name: "Scale", price: "$99", ctaLabel: "Contact" },
        ]}
        rows={[
          { feature: "Projects", values: ["3", "Unlimited", "Unlimited"] },
          { feature: "Team members", values: ["2", "10", "Unlimited"] },
          { feature: "Support SLA", values: ["Community", "24h", "4h"] },
          { feature: "Custom themes", values: ["-", "Yes", "Yes"] },
        ]}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Contact Form ----------------------- */

export function ContactFormDemo() {
  return (
    <div className="w-full">
      <ContactForm
        eyebrow="Contact"
        title="Let's build something."
        description="Tell us about your project. We'll get back to you in one business day."
        details={[
          { label: "Email", value: "hello@nebula.dev" },
          { label: "Discord", value: "discord.gg/nebula" },
          { label: "Hours", value: "Mon–Fri · 9–6 PT" },
        ]}
        className="py-10"
      />
    </div>
  );
}

export function ContactCardsDemo() {
  return (
    <div className="w-full">
      <ContactCards
        items={[
          {
            title: "Email",
            value: "hello@nebula.dev",
            description: "General support and product questions",
            icon: <Mail className="size-4" />,
            accent: "#22d3ee",
          },
          {
            title: "Discord",
            value: "discord.gg/nebula",
            description: "Community chat and quick help",
            icon: <MessageSquare className="size-4" />,
            accent: "#a78bfa",
          },
          {
            title: "Sales",
            value: "+1 (415) 555-0142",
            description: "Enterprise plans and onboarding",
            icon: <Phone className="size-4" />,
            accent: "#f472b6",
          },
        ]}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Footer Cosmic ----------------------- */

export function FooterCosmicDemo() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10">
      <FooterCosmic
        brand="Nebula"
        tagline="Cinematic React UI for builders."
        columns={[
          {
            title: "Product",
            links: [
              { label: "Components", href: "#" },
              { label: "Categories", href: "#" },
              { label: "Pricing", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Careers", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Docs", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "Changelog", href: "#" },
            ],
          },
        ]}
        socials={[
          {
            label: "GitHub",
            href: "#",
            icon: <Github className="size-4" />,
          },
          {
            label: "Twitter",
            href: "#",
            icon: <Twitter className="size-4" />,
          },
        ]}
        newsletter={{
          title: "Subscribe to our newsletter",
          description: "Component drops and case studies, monthly.",
          cta: "Subscribe",
        }}
        copyright={`© ${new Date().getFullYear()} Nebula. MIT licensed.`}
      />
    </div>
  );
}

/* ----------------------- Demo: Navbar Glass ----------------------- */

export function NavbarGlassDemo({ preview }: DemoProps = {}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/10",
        preview ? "min-h-[140px]" : "h-[200px]"
      )}
    >
      <NavbarGlass
        embedded={preview}
        logo="Acme"
        links={[
          { label: "Products", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Docs", href: "#" },
        ]}
        cta={{ label: "Sign up", href: "#" }}
      />
      {!preview && (
        <div className="flex h-full items-center justify-center pt-16 text-sm text-white/30">
          Scroll the page to see the blur effect
        </div>
      )}
    </div>
  );
}

export function NavbarFloatingDemo({ preview }: DemoProps = {}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10",
        preview ? "min-h-[100px] py-6" : "h-[200px]"
      )}
    >
      <NavbarFloating
        embedded={preview}
        links={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "Blog", href: "#" },
        ]}
        cta={{ label: "Get started", href: "#" }}
      />
    </div>
  );
}

/* ----------------------- Demo: FAQ Accordion ----------------------- */

export function FaqAccordionDemo() {
  return (
    <div className="w-full">
      <FaqAccordion
        title="Got questions?"
        description="Here are some common ones."
        items={[
          {
            question: "Is Nebula UI free?",
            answer: "Yes! The library is MIT licensed and free for personal and commercial use.",
          },
          {
            question: "Does it work with Next.js?",
            answer: "Absolutely. Nebula UI is built with Next.js 15 App Router in mind and supports React Server Components.",
          },
          {
            question: "Can I customize the styles?",
            answer: "Every component accepts a className prop merged through tailwind-merge. You can override any style.",
          },
        ]}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Team Grid ----------------------- */

export function TeamGridDemo() {
  return (
    <div className="w-full">
      <TeamGrid
        title="Meet our team"
        description="The people behind Nebula UI."
        members={[
          { name: "Aria Chen", role: "Design Lead", glowColor: "#a78bfa" },
          { name: "Marcus Wei", role: "Engineering", glowColor: "#22d3ee" },
          { name: "Priya Shah", role: "Product", glowColor: "#f472b6" },
        ]}
        columns={3}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Stats Section ----------------------- */

export function StatsSectionDemo() {
  return (
    <div className="w-full">
      <StatsSection
        title="By the numbers"
        stats={[
          { value: 50, suffix: "+", label: "Components" },
          { value: 1200, suffix: "+", label: "Downloads" },
          { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
          { value: 4.9, prefix: "★ ", label: "Rating", decimals: 1 },
        ]}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Logo Cloud ----------------------- */

function LogoPlaceholder({ text }: { text: string }) {
  return <span className="text-sm font-semibold tracking-wider">{text}</span>;
}

export function LogoCloudDemo() {
  return (
    <div className="w-full">
      <LogoCloud
        title="Trusted by teams worldwide"
        logos={[
          { logo: <LogoPlaceholder text="ACME" />, alt: "Acme" },
          { logo: <LogoPlaceholder text="LUMEN" />, alt: "Lumen" },
          { logo: <LogoPlaceholder text="ORBITAL" />, alt: "Orbital" },
          { logo: <LogoPlaceholder text="SERAPH" />, alt: "Seraph" },
          { logo: <LogoPlaceholder text="NIMBUS" />, alt: "Nimbus" },
          { logo: <LogoPlaceholder text="ASTRA" />, alt: "Astra" },
        ]}
        speed="normal"
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Timeline ----------------------- */

export function TimelineSectionDemo() {
  return (
    <div className="w-full">
      <TimelineSection
        title="Our journey"
        events={[
          { date: "Jan 2024", title: "Project started", description: "First commit to the repository.", accent: "#a78bfa" },
          { date: "Jun 2024", title: "v0.1 released", description: "12 components launched.", accent: "#22d3ee" },
          { date: "Jan 2025", title: "v0.5 released", description: "50+ components with backgrounds and animations.", accent: "#f472b6" },
          { date: "Jun 2025", title: "1.0 launch", description: "Production-ready with CLI, docs, and playground.", accent: "#fbbf24" },
        ]}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Blog Cards ----------------------- */

export function BlogCardsDemo() {
  return (
    <div className="w-full">
      <BlogCards
        title="Latest from the blog"
        posts={[
          {
            title: "Building cinematic UI with React",
            excerpt: "How we designed Nebula UI to feel alive with motion and depth.",
            date: "May 2025",
            category: "Design",
            href: "#",
            readTime: "5 min",
          },
          {
            title: "The future of component libraries",
            excerpt: "Why copy-paste is beating npm install in 2025.",
            date: "Apr 2025",
            category: "Engineering",
            href: "#",
            readTime: "8 min",
          },
          {
            title: "Accessibility in motion-rich UI",
            excerpt: "Making sure beautiful animations don't compromise usability.",
            date: "Mar 2025",
            category: "Accessibility",
            href: "#",
            readTime: "6 min",
          },
        ]}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: CTA Banner ----------------------- */

export function CtaBannerDemo() {
  return (
    <div className="w-full">
      <CtaBanner
        title="Ready to build something beautiful?"
        description="Get started with Nebula UI today. Free and open source."
        primaryCta={{ label: "Get started", href: "#" }}
        secondaryCta={{ label: "View docs", href: "#" }}
        variant="aurora"
      />
    </div>
  );
}

/* ----------------------- Demo: Gallery Grid ----------------------- */

export function GalleryGridDemo() {
  return (
    <div className="w-full">
      <GalleryGrid
        title="Gallery"
        images={[
          { src: "https://picsum.photos/seed/neb1/600/400", alt: "Project 1", caption: "Dashboard design" },
          { src: "https://picsum.photos/seed/neb2/400/600", alt: "Project 2", caption: "Mobile app" },
          { src: "https://picsum.photos/seed/neb3/600/400", alt: "Project 3", caption: "Landing page" },
          { src: "https://picsum.photos/seed/neb4/400/500", alt: "Project 4", caption: "Brand identity" },
          { src: "https://picsum.photos/seed/neb5/600/350", alt: "Project 5", caption: "Marketing site" },
          { src: "https://picsum.photos/seed/neb6/500/400", alt: "Project 6", caption: "E-commerce" },
        ]}
        columns={3}
        className="py-10"
      />
    </div>
  );
}

/* ----------------------- Demo: Backgrounds ----------------------- */

export function ParticleFieldDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05050a]">
      <ParticleField particleCount={60} color="#7c3aed" speed={0.5} interactive />
      <div className="relative z-10 flex h-full items-center justify-center text-white/60 text-sm">
        Move your mouse over the particles
      </div>
    </div>
  );
}

export function AuroraBackgroundDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05050a]">
      <AuroraBackground colors={["#7c3aed", "#22d3ee", "#ec4899"]} speed="normal" />
      <div className="relative z-10 flex h-full items-center justify-center text-white/80 text-lg font-semibold">
        Aurora Background
      </div>
    </div>
  );
}

export function GridBeamDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05050a]">
      <GridBeam beamColor="#22d3ee" speed="normal" />
      <div className="relative z-10 flex h-full items-center justify-center text-white/80 text-lg font-semibold">
        Grid Beam
      </div>
    </div>
  );
}

export function GradientMeshDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05050a]">
      <GradientMesh colors={["#7c3aed", "#22d3ee", "#ec4899", "#f97316"]} speed="normal" />
      <div className="relative z-10 flex h-full items-center justify-center text-white/80 text-lg font-semibold">
        Gradient Mesh
      </div>
    </div>
  );
}

export function SpotlightDemo() {
  return (
    <Spotlight
      size={400}
      color="#7c3aed"
      className="h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05050a]"
    >
      <div className="flex h-full items-center justify-center text-white/80 text-lg font-semibold">
        Move your cursor here
      </div>
    </Spotlight>
  );
}

export function RetroGridDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05050a]">
      <RetroGrid color="rgba(139, 92, 246, 0.3)" />
      <div className="relative z-10 flex h-full items-center justify-center text-white/80 text-lg font-semibold">
        Retro Grid
      </div>
    </div>
  );
}

export function DotPatternDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#05050a]">
      <DotPattern dotSize={1.5} spacing={20} color="rgba(139,92,246,0.4)" />
      <div className="relative z-10 flex h-full items-center justify-center text-white/80 text-lg font-semibold">
        Dot Pattern
      </div>
    </div>
  );
}

export function MatrixRainDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      <MatrixRain color="#22d3ee" speed={1} fontSize={14} />
      <div className="relative z-10 flex h-full items-center justify-center text-white/80 text-lg font-semibold">
        Matrix Rain
      </div>
    </div>
  );
}

/* ----------------------- Demo: Text Animations ----------------------- */

export function TypewriterTextDemo() {
  return (
    <div className="flex h-[120px] w-full items-center justify-center text-center text-3xl font-semibold">
      Build{" "}
      <TypewriterText
        text={["beautiful UIs", "faster products", "amazing experiences"]}
        speed={60}
        className="ml-2 text-violet-400"
      />
    </div>
  );
}

export function GradientTextRevealDemo() {
  return (
    <div className="flex h-[120px] w-full items-center justify-center text-center text-3xl font-semibold">
      <GradientTextReveal gradient="linear-gradient(110deg, #a78bfa, #22d3ee, #f472b6)">
        Nebula UI — Cinematic Components
      </GradientTextReveal>
    </div>
  );
}

export function WordRotatorDemo() {
  return (
    <div className="flex h-[120px] w-full items-center justify-center text-center text-3xl font-semibold">
      We make{" "}
      <WordRotator words={["design", "code", "magic", "impact"]} className="mx-2 text-cyan-400" interval={2000} />{" "}
      happen.
    </div>
  );
}

export function TextScrambleDemo() {
  return (
    <div className="flex h-[120px] w-full flex-col items-center justify-center gap-4 text-center">
      <TextScramble text="NEBULA UI LIBRARY" className="text-3xl font-bold tracking-wider text-violet-400" trigger="auto" />
      <TextScramble text="Hover to scramble me" className="text-lg text-white/60" trigger="hover" />
    </div>
  );
}

export function BlurRevealDemo() {
  return (
    <div className="flex h-[120px] w-full items-center justify-center text-center">
      <BlurReveal duration={1000}>
        <span className="text-3xl font-semibold">This text blurs in on scroll</span>
      </BlurReveal>
    </div>
  );
}

export function NumberTickerDemo() {
  return (
    <div className="flex h-[120px] w-full items-center justify-center gap-12 text-center">
      <div>
        <NumberTicker value={42069} className="text-4xl font-bold" />
        <div className="mt-1 text-sm text-white/50">Downloads</div>
      </div>
      <div>
        <NumberTicker value={99.99} decimalPlaces={2} className="text-4xl font-bold" />
        <div className="mt-1 text-sm text-white/50">Score</div>
      </div>
    </div>
  );
}

/* ---- Primitives demos (simple previews for showcase pages) ---- */

export function GradientButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-12">
      <GradientButton variant="aurora">Aurora</GradientButton>
      <GradientButton variant="sunset">Sunset</GradientButton>
      <GradientButton variant="ocean">Ocean</GradientButton>
      <GradientButton variant="void">Void</GradientButton>
    </div>
  );
}

export function GlowCardDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 py-10">
      <GlowCard glowColor="#7c3aed"><h3 className="text-lg font-semibold">Violet Glow</h3><p className="mt-1 text-sm text-white/60">Hover to see the tracking glow.</p></GlowCard>
      <GlowCard glowColor="#22d3ee" intensity="high"><h3 className="text-lg font-semibold">Cyan Glow</h3><p className="mt-1 text-sm text-white/60">High intensity for impact.</p></GlowCard>
    </div>
  );
}

export function NeonInputDemo() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4 py-10">
      <NeonInput label="Email" placeholder="you@nebula.dev" accent="violet" />
      <NeonInput label="Password" type="password" placeholder="••••••••" accent="cyan" />
    </div>
  );
}

export function ShimmerBadgeDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-12">
      <ShimmerBadge tone="violet">Violet</ShimmerBadge>
      <ShimmerBadge tone="cyan">Cyan</ShimmerBadge>
      <ShimmerBadge tone="amber">Amber</ShimmerBadge>
    </div>
  );
}

export function GlassModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-xl bg-[#08080e]">
      {/* Blurred background so the modal looks in-context */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_70%)]" />

      {/* Trigger button — shown when modal is closed */}
      {!open && (
        <GradientButton onClick={() => setOpen(true)}>Open Modal</GradientButton>
      )}

      {/* Inline modal panel (not using fixed positioning) */}
      {open && (
        <div
          className="absolute inset-0 grid place-items-center bg-black/60 backdrop-blur-sm animate-[fade-in_200ms_ease-out]"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_60px_-10px_rgba(139,92,246,0.3)] backdrop-blur-xl animate-[scale-fade-in_300ms_ease-out] mx-4">
            {/* Gradient top border */}
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60 transition hover:bg-white/[0.08] hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Welcome to Nebula</h2>
              <p className="mt-2 text-sm text-white/60">This is a glassmorphism modal with focus trap and keyboard handling.</p>
              <div className="mt-6 space-y-4">
                <NeonInput label="Your name" placeholder="Enter your name" accent="violet" />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2 text-sm text-white/60 transition hover:text-white"
                  >
                    Cancel
                  </button>
                  <GradientButton size="sm" onClick={() => setOpen(false)}>Confirm</GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function GlowProgressDemo() {
  return (
    <div className="w-full max-w-md mx-auto space-y-6 py-10">
      <GlowProgress value={75} variant="aurora" showLabel />
      <GlowProgress value={50} variant="ocean" size="lg" />
      <GlowProgress value={30} variant="sunset" size="sm" />
    </div>
  );
}

export function GlowAvatarDemo() {
  return (
    <div className="flex items-end gap-6 justify-center py-12">
      <GlowAvatar alt="Jane Doe" size="sm" glowColor="#7c3aed" />
      <GlowAvatar alt="John Smith" size="md" glowColor="#22d3ee" />
      <GlowAvatar alt="Alice W" size="lg" glowColor="#ec4899" />
      <GlowAvatar alt="Bob K" size="xl" glowColor="#f97316" />
    </div>
  );
}

export function GradientDividerDemo() {
  return (
    <div className="w-full max-w-md mx-auto py-8 space-y-1">
      {(["aurora", "sunset", "ocean", "subtle"] as const).map((v) => (
        <div key={v}>
          <div className="flex items-center justify-between px-1 pb-2 pt-4">
            <span className="text-[11px] uppercase tracking-[0.15em] text-white/35">{v}</span>
          </div>
          <GradientDivider variant={v} spacing="none" />
        </div>
      ))}
    </div>
  );
}

export function SkeletonLoaderDemo() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-6 py-10">
      <div className="flex items-center gap-4">
        <SkeletonLoader variant="circular" width={48} height={48} />
        <div className="flex-1"><SkeletonLoader variant="text" count={2} /></div>
      </div>
      <SkeletonLoader variant="rectangular" height={120} />
    </div>
  );
}

export function NeonTextareaDemo() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4 py-10">
      <NeonTextarea
        label="Message"
        placeholder="Type your message here..."
        accent="violet"
        rows={3}
      />
      <NeonTextarea
        label="Notes"
        placeholder="Focus to see the neon glow..."
        accent="cyan"
        rows={2}
      />
    </div>
  );
}

export function GlowToggleDemo() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <GlowToggle
        checked={darkMode}
        onChange={setDarkMode}
        label="Enable dark mode"
        accent="violet"
      />
      <GlowToggle
        checked={notifications}
        onChange={setNotifications}
        label="Send notifications"
        accent="cyan"
        size="lg"
      />
      <GlowToggle checked={false} label="Disabled toggle" accent="pink" disabled />
    </div>
  );
}

export function NeonSelectDemo() {
  const [plan, setPlan] = useState("");

  return (
    <div className="w-full max-w-sm mx-auto py-10">
      <NeonSelect
        label="Choose a plan"
        placeholder="Select plan..."
        value={plan}
        onChange={setPlan}
        accent="violet"
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro — $19/mo" },
          { value: "team", label: "Team — $49/mo" },
          { value: "enterprise", label: "Enterprise", disabled: true },
        ]}
      />
    </div>
  );
}

export function AnimatedCounterDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-10 text-center">
      <div>
        <div className="text-3xl font-bold md:text-4xl">
          <AnimatedCounter value={1247} suffix="+" triggerOnScroll={false} />
        </div>
        <div className="mt-1 text-xs text-white/50">Users</div>
      </div>
      <div>
        <div className="text-3xl font-bold md:text-4xl">
          <AnimatedCounter value={99.9} suffix="%" decimals={1} triggerOnScroll={false} />
        </div>
        <div className="mt-1 text-xs text-white/50">Uptime</div>
      </div>
      <div>
        <div className="text-3xl font-bold md:text-4xl">
          <AnimatedCounter value={53} prefix="$" suffix="M" triggerOnScroll={false} />
        </div>
        <div className="mt-1 text-xs text-white/50">Revenue</div>
      </div>
    </div>
  );
}

export function GlowTooltipDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-10">
      <GlowTooltip content="Violet tooltip on top" side="top" accent="violet">
        <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm transition hover:border-violet-400/40 hover:bg-violet-500/10">
          Hover me (top)
        </span>
      </GlowTooltip>
      <GlowTooltip content="Cyan tooltip on right" side="right" accent="cyan">
        <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm transition hover:border-cyan-400/40 hover:bg-cyan-500/10">
          Hover me (right)
        </span>
      </GlowTooltip>
      <GlowTooltip content="Pink tooltip below" side="bottom" accent="pink">
        <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm transition hover:border-pink-400/40 hover:bg-pink-500/10">
          Hover me (bottom)
        </span>
      </GlowTooltip>
    </div>
  );
}

export function ShimmerLinkDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 py-12">
      <ShimmerLink href="#">Violet link</ShimmerLink>
      <ShimmerLink href="#" accent="cyan">
        Cyan link
      </ShimmerLink>
      <ShimmerLink href="https://nebula-ui.dev" accent="pink" external>
        External link
      </ShimmerLink>
    </div>
  );
}

function ToastDemoButtons() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <GradientButton
        variant="aurora"
        size="sm"
        onClick={() =>
          toast({ type: "success", title: "Success!", message: "Your changes have been saved." })
        }
      >
        Success
      </GradientButton>
      <GradientButton
        variant="sunset"
        size="sm"
        onClick={() =>
          toast({ type: "error", title: "Error", message: "Something went wrong." })
        }
      >
        Error
      </GradientButton>
      <GradientButton
        variant="ocean"
        size="sm"
        onClick={() =>
          toast({ type: "warning", message: "Your trial expires in 3 days." })
        }
      >
        Warning
      </GradientButton>
      <GradientButton
        variant="void"
        size="sm"
        onClick={() => toast({ type: "info", message: "New update available!" })}
      >
        Info
      </GradientButton>
    </div>
  );
}

export function ToastDemo() {
  return (
    <ToastProvider position="bottom-right">
      <div className="py-12">
        <ToastDemoButtons />
      </div>
    </ToastProvider>
  );
}

/* ----------------------- Demo: Border Beam ----------------------- */

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#05050a] p-6">
      <span className="text-sm text-white/50">Card with Border Beam</span>
      <BorderBeam duration={5} borderWidth={2} colorFrom="#a78bfa" colorTo="#22d3ee" />
    </div>
  );
}

/* ----------------------- Demo: Rainbow Button ----------------------- */

export function RainbowButtonDemo() {
  return (
    <div className="flex w-full items-center justify-center py-10">
      <RainbowButton onClick={() => alert("Rainbow Button Clicked!")}>
        Rainbow Button
      </RainbowButton>
    </div>
  );
}

/* ----------------------- Demo: Sparkles Text ----------------------- */

export function SparklesTextDemo() {
  return (
    <div className="flex w-full items-center justify-center py-12">
      <SparklesText
        text="Sparkles Text"
        className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        sparklesCount={8}
        color="#fbbf24"
      />
    </div>
  );
}


export function TabsDemo() {
  return (
    <div className="mx-auto w-full max-w-md py-10">
      <Tabs defaultValue="overview">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <GlowCard glowColor="#2dd4bf" className="mt-2">
            <p className="text-sm text-white/65">
              Polished tabs with keyboard-friendly triggers and smooth content
              transitions.
            </p>
          </GlowCard>
        </TabsContent>
        <TabsContent value="analytics">
          <GlowCard glowColor="#7c6af5" className="mt-2">
            <p className="text-sm text-white/65">
              Switch panels without remounting your whole layout.
            </p>
          </GlowCard>
        </TabsContent>
        <TabsContent value="settings">
          <GlowCard glowColor="#f472b6" className="mt-2">
            <p className="text-sm text-white/65">
              Ideal for docs, dashboards, and component playgrounds.
            </p>
          </GlowCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export function AlertDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-3 py-10">
      <Alert variant="info" title="Heads up">
        Nebula styles now ship with the package via @nebula/ui/styles.css.
      </Alert>
      <Alert variant="success" title="Deployed">
        Your production build completed successfully.
      </Alert>
      <Alert variant="warning" title="Review required">
        Two accessibility checks need attention before release.
      </Alert>
      {visible && (
        <Alert variant="error" title="Action failed" onDismiss={() => setVisible(false)}>
          Could not sync preferences. Try again in a moment.
        </Alert>
      )}
    </div>
  );
}

export function SheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center py-10">
      <GradientButton variant="ocean" onClick={() => setOpen(true)}>
        Open sheet
      </GradientButton>
      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        title="Account settings"
        description="Manage profile, billing, and notifications."
      >
        <div className="space-y-4">
          <NeonInput label="Display name" defaultValue="Nebula" accent="teal" />
          <NeonInput label="Email" defaultValue="hello@nebula.dev" accent="teal" />
          <GradientButton className="w-full" onClick={() => setOpen(false)}>
            Save changes
          </GradientButton>
        </div>
      </Sheet>
    </div>
  );
}

export function MagneticButtonDemo() {
  return (
    <div className="flex items-center justify-center py-12">
      <MagneticButton strength={0.4}>Hover — I follow you</MagneticButton>
    </div>
  );
}

export function FormFieldDemo() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-4 py-10">
      <FormField label="Workspace" hint="Visible to your team" required>
        <NeonInput placeholder="acme-studio" accent="teal" />
      </FormField>
      <FormField label="Invite email" error="Enter a valid email address">
        <NeonInput placeholder="teammate@acme.com" accent="teal" error=" " />
      </FormField>
    </div>
  );
}

export function AccordionDemo() {
  return (
    <div className="mx-auto w-full max-w-lg py-10">
      <Accordion type="single" defaultValue="one">
        <AccordionItem value="one">
          <AccordionTrigger value="one">Is Nebula production-ready?</AccordionTrigger>
          <AccordionContent value="one">
            Yes — components ship with typed APIs, focus management, and reduced-motion
            support for continuous animations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="two">
          <AccordionTrigger value="two">Does it work with Tailwind v4?</AccordionTrigger>
          <AccordionContent value="two">
            Absolutely. Import Tailwind and `@nebula/ui/styles.css`, then drop components
            into any React app.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="three">
          <AccordionTrigger value="three">Can I customize styles?</AccordionTrigger>
          <AccordionContent value="three">
            Every component accepts className and merges via tailwind-merge. Override
            tokens with CSS variables for brand-level theming.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

/* ----------------------- Source strings ----------------------- */

export const DEMO_SOURCE: Record<string, string> = {
  "hero-aurora": `import { HeroAurora } from "@nebula/ui";

export function Example() {
  return (
    <HeroAurora
      badge="v1.0 · Now in beta"
      title="Build cinematic UI"
      highlight="without the headache."
      description="A premium library that ships with motion, depth, and taste baked in."
      primaryCta={{ label: "Get started", href: "/signup" }}
      secondaryCta={{ label: "Read the docs", href: "/docs" }}
      stats={[
        { value: "12+", label: "Components" },
        { value: "100%", label: "TypeScript" },
        { value: "0kb", label: "Runtime CSS" },
      ]}
    />
  );
}`,
  "hero-split": `import { HeroSplit } from "@nebula/ui";

export function Example() {
  return (
    <HeroSplit
      badge="Early access"
      title="The fastest way to launch a product"
      description="Pair a focused message with a sign-up form."
      bullets={["No credit card", "Cancel anytime", "Free for 14 days"]}
      formTitle="Join the waitlist"
      formCta="Request access"
      onSubmit={(email) => console.log(email)}
    />
  );
}`,
  "hero-minimal": `import { HeroMinimal } from "@nebula/ui";

export function Example() {
  return (
    <HeroMinimal
      badge="Just launched"
      title="A cleaner hero for focused pages."
      description="Great for product updates and simple launch pages."
      cta={{ label: "See docs", href: "/docs" }}
    />
  );
}`,
  "features-bento": `import { FeaturesBento } from "@nebula/ui";
import { Bot, Wand2, ShieldCheck, Zap } from "lucide-react";

export function Example() {
  return (
    <FeaturesBento
      eyebrow="Capabilities"
      title="Everything you need to ship."
      features={[
        {
          title: "AI-aware motion",
          description: "Components that respond to scroll, focus, and intent.",
          icon: <Bot className="size-5" />,
          glowColor: "#a78bfa",
          span: "wide",
        },
        {
          title: "Type-safe API",
          description: "Every prop is typed.",
          icon: <ShieldCheck className="size-5" />,
          glowColor: "#22d3ee",
        },
        {
          title: "Tailwind v4",
          description: "Zero runtime CSS, full theming.",
          icon: <Wand2 className="size-5" />,
          glowColor: "#f472b6",
        },
        {
          title: "Lightning fast",
          description: "Tree-shakable, no heavy deps.",
          icon: <Zap className="size-5" />,
          glowColor: "#fbbf24",
          span: "wide",
        },
      ]}
    />
  );
}`,
  "features-list": `import { FeaturesList } from "@nebula/ui";
import { Gauge, Shield, Workflow } from "lucide-react";

export function Example() {
  return (
    <FeaturesList
      items={[
        { title: "Live theming", description: "Token-based setup", icon: <Gauge className="size-4" /> },
        { title: "Security patterns", description: "Sane defaults", icon: <Shield className="size-4" /> },
        { title: "Composable workflows", description: "Mix and match sections", icon: <Workflow className="size-4" /> },
      ]}
    />
  );
}`,
  "about-mission": `import { AboutMission } from "@nebula/ui";

export function Example() {
  return (
    <AboutMission
      eyebrow="Our mission"
      title="We craft software that"
      highlight="feels handmade."
      paragraphs={[
        "Nebula began as a side project.",
        "Today we power launches for teams who care.",
      ]}
      values={[
        { title: "Care",  description: "Every component is hand-tuned." },
        { title: "Speed", description: "Ship today, polish tomorrow." },
        { title: "Open",  description: "MIT and contribution-friendly." },
      ]}
    />
  );
}`,
  "testimonial-marquee": `import { TestimonialMarquee } from "@nebula/ui";

export function Example() {
  return (
    <TestimonialMarquee
      eyebrow="Loved by builders"
      title="Don't take our word for it."
      testimonials={[
        {
          quote: "Nebula cut our marketing-page build time in half.",
          author: "Aria Chen",
          role: "Head of Design, Lumen",
          avatarColor: "#a78bfa",
        },
        // ...more testimonials
      ]}
    />
  );
}`,
  "testimonials-grid": `import { TestimonialsGrid } from "@nebula/ui";

export function Example() {
  return (
    <TestimonialsGrid
      items={[
        {
          quote: "The components feel handcrafted.",
          author: "Ari Kim",
          role: "Product Designer",
          accent: "#a78bfa",
        },
        // ...more testimonials
      ]}
    />
  );
}`,
  "pricing-tiers": `import { PricingTiers } from "@nebula/ui";

export function Example() {
  return (
    <PricingTiers
      eyebrow="Pricing"
      title="Start free. Scale beautifully."
      tiers={[
        {
          name: "Hobby",
          price: "$0",
          period: "/mo",
          features: ["All components", "Community support"],
          cta: { label: "Start free", href: "/signup" },
        },
        {
          name: "Pro",
          price: "$29",
          period: "/mo",
          features: ["Priority support", "Private templates"],
          cta: { label: "Upgrade", href: "/upgrade" },
          featured: true,
        },
        {
          name: "Studio",
          price: "$99",
          period: "/mo",
          features: ["Dedicated Slack", "Custom theming"],
          cta: { label: "Contact sales", href: "/sales" },
        },
      ]}
    />
  );
}`,
  "pricing-comparison": `import { PricingComparison } from "@nebula/ui";

export function Example() {
  return (
    <PricingComparison
      plans={[
        { name: "Starter", price: "$0" },
        { name: "Pro", price: "$29", featured: true },
        { name: "Scale", price: "$99" },
      ]}
      rows={[
        { feature: "Projects", values: ["3", "Unlimited", "Unlimited"] },
        { feature: "Support SLA", values: ["Community", "24h", "4h"] },
      ]}
    />
  );
}`,
  "contact-form": `import { ContactForm } from "@nebula/ui";

export function Example() {
  return (
    <ContactForm
      eyebrow="Contact"
      title="Let's build something."
      description="Tell us about your project."
      details={[
        { label: "Email",   value: "hello@nebula.dev" },
        { label: "Discord", value: "discord.gg/nebula" },
        { label: "Hours",   value: "Mon–Fri · 9–6 PT" },
      ]}
      onSubmit={(data) => console.log(data)}
    />
  );
}`,
  "contact-cards": `import { ContactCards } from "@nebula/ui";
import { Mail, MessageSquare, Phone } from "lucide-react";

export function Example() {
  return (
    <ContactCards
      items={[
        { title: "Email", value: "hello@nebula.dev", icon: <Mail className="size-4" /> },
        { title: "Discord", value: "discord.gg/nebula", icon: <MessageSquare className="size-4" /> },
        { title: "Sales", value: "+1 (415) 555-0142", icon: <Phone className="size-4" /> },
      ]}
    />
  );
}`,
  "footer-cosmic": `import { FooterCosmic } from "@nebula/ui";
import { Github, Twitter } from "lucide-react";

export function Example() {
  return (
    <FooterCosmic
      brand="Nebula"
      tagline="Cinematic React UI for builders."
      columns={[
        {
          title: "Product",
          links: [
            { label: "Components", href: "/components" },
            { label: "Categories", href: "/#components" },
          ],
        },
        // ...more columns
      ]}
      socials={[
        { label: "GitHub",  href: "#", icon: <Github className="size-4" /> },
        { label: "Twitter", href: "#", icon: <Twitter className="size-4" /> },
      ]}
      newsletter={{ title: "Subscribe", cta: "Join" }}
      copyright="© 2025 Nebula. MIT licensed."
    />
  );
}`,
  "neon-textarea": `import { NeonTextarea } from "@nebula/ui";

export function Example() {
  return (
    <NeonTextarea
      label="Message"
      placeholder="Type your message here..."
      accent="violet"
      rows={4}
    />
  );
}`,
  "glow-toggle": `import { useState } from "react";
import { GlowToggle } from "@nebula/ui";

export function Example() {
  const [checked, setChecked] = useState(false);
  return (
    <GlowToggle checked={checked} onChange={setChecked} label="Enable notifications" />
  );
}`,
  "neon-select": `import { useState } from "react";
import { NeonSelect } from "@nebula/ui";

export function Example() {
  const [value, setValue] = useState("");
  return (
    <NeonSelect
      label="Choose a plan"
      value={value}
      onChange={setValue}
      options={[{ value: "free", label: "Free" }, { value: "pro", label: "Pro" }]}
    />
  );
}`,
  "animated-counter": `import { AnimatedCounter } from "@nebula/ui";

export function Example() {
  return <AnimatedCounter value={1247} suffix="+" />;
}`,
  "glow-tooltip": `import { GlowTooltip } from "@nebula/ui";

export function Example() {
  return (
    <GlowTooltip content="Helpful tip" side="top" accent="violet">
      <button>Hover me</button>
    </GlowTooltip>
  );
}`,
  "shimmer-link": `import { ShimmerLink } from "@nebula/ui";

export function Example() {
  return <ShimmerLink href="/docs">Read the docs</ShimmerLink>;
}`,
  toast: `import { ToastProvider, useToast } from "@nebula/ui";

function Demo() {
  const { toast } = useToast();
  return <button onClick={() => toast({ message: "Saved!" })}>Show toast</button>;
}

export function Example() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  );
}`,
  "glass-modal": `import { useState } from "react";
import { GlassModal, GradientButton, NeonInput } from "@nebula/ui";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GradientButton onClick={() => setOpen(true)}>Open Modal</GradientButton>
      <GlassModal
        open={open}
        onClose={() => setOpen(false)}
        title="Welcome to Nebula"
        description="Glassmorphism modal with focus trap and keyboard handling."
      >
        <NeonInput label="Your name" placeholder="Enter your name" />
      </GlassModal>
    </>
  );
}`,
  "border-beam": `import { BorderBeam } from "@nebula/ui";

export function Example() {
  return (
    <div className="relative h-[200px] w-full rounded-2xl border border-white/10 bg-black/40">
      <BorderBeam duration={5} borderWidth={2} colorFrom="#a78bfa" colorTo="#22d3ee" />
    </div>
  );
}`,
  "rainbow-button": `import { RainbowButton } from "@nebula/ui";

export function Example() {
  return (
    <RainbowButton onClick={() => console.log("clicked")}>
      Get Started
    </RainbowButton>
  );
}`,
  "sparkles-text": `import { SparklesText } from "@nebula/ui";

export function Example() {
  return (
    <SparklesText
      text="Sparkles Text"
      className="text-4xl font-bold"
      sparklesCount={8}
      color="#fbbf24"
    />
  );
}`,
};

/* ----------------------- Usage strings ----------------------- */

export const DEMO_USAGE: Record<string, string> = {
  "hero-aurora": `<HeroAurora
  badge={badge}                   // ReactNode (optional)
  title={title}                   // ReactNode  (required)
  highlight={highlight}           // ReactNode (optional gradient phrase)
  description={description}       // ReactNode (optional)
  primaryCta={{ label, href }}    // optional
  secondaryCta={{ label, href }}  // optional
  stats={[{ value, label }]}      // optional
/>`,
  "hero-split": `<HeroSplit
  title={title}
  description={description}
  bullets={["...", "..."]}
  formTitle="Join the waitlist"
  formCta="Request access"
  onSubmit={(email) => {}}
/>`,
  "hero-minimal": `<HeroMinimal
  badge="Just launched"
  title="A cleaner hero"
  description="Focused copy for simple pages"
  cta={{ label, href }}
/>`,
  "features-bento": `<FeaturesBento
  title={title}
  features={[
    { title, description, icon, glowColor, span: "wide" | "default" },
  ]}
/>`,
  "features-list": `<FeaturesList
  items={[
    { title, description, icon },
  ]}
/>`,
  "about-mission": `<AboutMission
  title="We craft software that"
  highlight="feels handmade."
  paragraphs={["...", "..."]}
  values={[{ title, description }]}
/>`,
  "testimonial-marquee": `<TestimonialMarquee
  title="Loved by builders"
  testimonials={[
    { quote, author, role, avatarColor },
  ]}
  duration={40}   // seconds for one full loop
/>`,
  "testimonials-grid": `<TestimonialsGrid
  items={[
    { quote, author, role, accent },
  ]}
/>`,
  "pricing-tiers": `<PricingTiers
  title="Pricing"
  tiers={[
    {
      name, price, period, features: [...],
      cta: { label, href }, featured?: boolean,
    },
  ]}
/>`,
  "pricing-comparison": `<PricingComparison
  plans={[{ name, price, ctaLabel, featured? }]}
  rows={[{ feature, values: ["...", "...", "..."] }]}
/>`,
  "contact-form": `<ContactForm
  title="Contact"
  details={[{ label, value }]}
  onSubmit={({ name, email, message }) => {}}
/>`,
  "contact-cards": `<ContactCards
  items={[
    { title, value, description?, icon?, accent? },
  ]}
/>`,
  "footer-cosmic": `<FooterCosmic
  brand="Nebula"
  tagline="..."
  columns={[{ title, links: [{ label, href }] }]}
  socials={[{ label, href, icon }]}
  newsletter={{ title, description, cta }}
  copyright="..."
/>`,
  "glass-modal": `<GlassModal
  open={open}
  onClose={() => setOpen(false)}
  title="Welcome to Nebula"
  description="Glassmorphism modal with focus trap."
  size="md"              // "sm" | "md" | "lg" | "full"
  persistent={false}     // disable backdrop / escape close
>
  {children}
</GlassModal>`,
  "neon-textarea": `<NeonTextarea
  label="Message"
  placeholder="Type your message here..."
  accent="violet"        // "violet" | "cyan" | "pink"
  rows={4}
  error="Required"       // optional
/>`,
  "glow-toggle": `<GlowToggle
  checked={checked}
  onChange={setChecked}
  label="Enable notifications"
  accent="violet"        // "violet" | "cyan" | "pink"
  size="md"              // "sm" | "md" | "lg"
/>`,
  "neon-select": `<NeonSelect
  label="Choose a plan"
  placeholder="Select plan..."
  value={value}
  onChange={setValue}
  accent="violet"
  options={[{ value, label, disabled? }]}
/>`,
  "animated-counter": `<AnimatedCounter
  value={1247}
  prefix="$"
  suffix="+"
  decimals={0}
  duration={2000}
  triggerOnScroll={true}
/>`,
  "glow-tooltip": `<GlowTooltip
  content="Helpful tip"
  side="top"             // "top" | "right" | "bottom" | "left"
  accent="violet"
  delay={200}
>
  <button>Hover me</button>
</GlowTooltip>`,
  "shimmer-link": `<ShimmerLink
  href="/docs"
  accent="violet"          // "violet" | "cyan" | "pink"
  external                 // optional, adds external icon
>
  Read the docs
</ShimmerLink>`,
  toast: `<ToastProvider position="bottom-right">
  <YourApp />
</ToastProvider>

// Inside a child component:
const { toast } = useToast();
toast({ type: "success", title: "Saved!", message: "Changes applied." });`,
  "border-beam": `<BorderBeam
  duration={6}          // duration of loop in seconds
  borderWidth={1.5}     // width of border stroke in pixels
  colorFrom="#a78bfa"   // start color of gradient
  colorTo="#22d3ee"     // end color of gradient
  delay={0}             // animation delay in seconds
/>`,
  "rainbow-button": `<RainbowButton
  glow={true}           // enable outer hover glow behind button
  onClick={() => {}}    // standard click handler
>
  Button Text
</RainbowButton>`,
  "sparkles-text": `<SparklesText
  text="Typography with flair"
  sparklesCount={6}     // number of sparkles to animate
  color="#fbbf24"       // color of sparkles
/>`,
};

/* ----------------------- Demo registry ----------------------- */

export const DEMO_COMPONENTS: Record<string, ComponentType> = {
  // Original sections
  "hero-aurora": HeroAuroraDemo,
  "hero-split": HeroSplitDemo,
  "hero-minimal": HeroMinimalDemo,
  "features-bento": FeaturesBentoDemo,
  "features-list": FeaturesListDemo,
  "about-mission": AboutMissionDemo,
  "testimonial-marquee": TestimonialMarqueeDemo,
  "testimonials-grid": TestimonialsGridDemo,
  "pricing-tiers": PricingTiersDemo,
  "pricing-comparison": PricingComparisonDemo,
  "contact-form": ContactFormDemo,
  "contact-cards": ContactCardsDemo,
  "footer-cosmic": FooterCosmicDemo,
  // New sections
  "navbar-glass": NavbarGlassDemo,
  "navbar-floating": NavbarFloatingDemo,
  "faq-accordion": FaqAccordionDemo,
  "team-grid": TeamGridDemo,
  "stats-section": StatsSectionDemo,
  "logo-cloud": LogoCloudDemo,
  "timeline-section": TimelineSectionDemo,
  "blog-cards": BlogCardsDemo,
  "cta-banner": CtaBannerDemo,
  "gallery-grid": GalleryGridDemo,
  // Primitives
  "gradient-button": GradientButtonDemo,
  "glow-card": GlowCardDemo,
  "neon-input": NeonInputDemo,
  "shimmer-badge": ShimmerBadgeDemo,
  "glass-modal": GlassModalDemo,
  "neon-textarea": NeonTextareaDemo,
  "glow-toggle": GlowToggleDemo,
  "neon-select": NeonSelectDemo,
  "glow-avatar": GlowAvatarDemo,
  "animated-counter": AnimatedCounterDemo,
  "gradient-divider": GradientDividerDemo,
  "skeleton-loader": SkeletonLoaderDemo,
  "glow-tooltip": GlowTooltipDemo,
  "shimmer-link": ShimmerLinkDemo,
  "glow-progress": GlowProgressDemo,
  toast: ToastDemo,
  "border-beam": BorderBeamDemo,
  "rainbow-button": RainbowButtonDemo,
  "sparkles-text": SparklesTextDemo,
  tabs: TabsDemo,
  alert: AlertDemo,
  sheet: SheetDemo,
  "magnetic-button": MagneticButtonDemo,
  "form-field": FormFieldDemo,
  accordion: AccordionDemo,
  // Backgrounds
  "particle-field": ParticleFieldDemo,
  "aurora-background": AuroraBackgroundDemo,
  "grid-beam": GridBeamDemo,
  "gradient-mesh": GradientMeshDemo,
  "spotlight": SpotlightDemo,
  "retro-grid": RetroGridDemo,
  "dot-pattern": DotPatternDemo,
  "matrix-rain": MatrixRainDemo,
  // Text Animations
  "typewriter-text": TypewriterTextDemo,
  "gradient-text-reveal": GradientTextRevealDemo,
  "word-rotator": WordRotatorDemo,
  "text-scramble": TextScrambleDemo,
  "blur-reveal": BlurRevealDemo,
  "number-ticker": NumberTickerDemo,
};
