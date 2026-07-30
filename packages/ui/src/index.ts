// ─── Primitives ──────────────────────────────────────────────────────────────

export { GradientButton } from "./components/gradient-button";
export type {
  GradientButtonProps,
  GradientButtonVariant,
  GradientButtonSize,
} from "./components/gradient-button";

export { BorderBeam } from "./components/border-beam";
export type { BorderBeamProps } from "./components/border-beam";

export { RainbowButton } from "./components/rainbow-button";
export type { RainbowButtonProps } from "./components/rainbow-button";

export { GlowCard } from "./components/glow-card";
export type { GlowCardProps } from "./components/glow-card";

export { NeonInput } from "./components/neon-input";
export type { NeonInputProps } from "./components/neon-input";

export { ShimmerBadge } from "./components/shimmer-badge";
export type { ShimmerBadgeProps } from "./components/shimmer-badge";

export { GlassModal } from "./components/glass-modal";
export type { GlassModalProps, GlassModalSize } from "./components/glass-modal";

export { NeonTextarea } from "./components/neon-textarea";
export type { NeonTextareaProps } from "./components/neon-textarea";

export { GlowToggle } from "./components/glow-toggle";
export type { GlowToggleProps, GlowToggleSize } from "./components/glow-toggle";

export { NeonSelect } from "./components/neon-select";
export type {
  NeonSelectProps,
  NeonSelectOption,
} from "./components/neon-select";

export { GlowAvatar } from "./components/glow-avatar";
export type { GlowAvatarProps, GlowAvatarSize } from "./components/glow-avatar";

export { AnimatedCounter } from "./components/animated-counter";
export type { AnimatedCounterProps } from "./components/animated-counter";

export { GradientDivider } from "./components/gradient-divider";
export type {
  GradientDividerProps,
  GradientDividerVariant,
} from "./components/gradient-divider";

export { SkeletonLoader } from "./components/skeleton-loader";
export type {
  SkeletonLoaderProps,
  SkeletonVariant,
} from "./components/skeleton-loader";

export { GlowTooltip } from "./components/glow-tooltip";
export type {
  GlowTooltipProps,
  GlowTooltipSide,
} from "./components/glow-tooltip";

export { ShimmerLink } from "./components/shimmer-link";
export type { ShimmerLinkProps } from "./components/shimmer-link";

export { GlowProgress } from "./components/glow-progress";
export type {
  GlowProgressProps,
  GlowProgressVariant,
  GlowProgressSize,
} from "./components/glow-progress";

export { ToastProvider, useToast } from "./components/toast";
export type {
  ToastProviderProps,
  ToastItem,
  ToastType,
  ToastOptions,
} from "./components/toast";

export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs";
export type {
  TabsProps,
  TabsTriggerProps,
  TabsContentProps,
} from "./components/tabs";

export { Alert } from "./components/alert";
export type { AlertProps, AlertVariant } from "./components/alert";

export { Sheet } from "./components/sheet";
export type { SheetProps, SheetSide } from "./components/sheet";

export { MagneticButton } from "./components/magnetic-button";
export type { MagneticButtonProps } from "./components/magnetic-button";

export { FormField } from "./components/form-field";
export type { FormFieldProps } from "./components/form-field";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/accordion";
export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./components/accordion";

// ─── Sections ────────────────────────────────────────────────────────────────

export { HeroAurora } from "./sections/hero-aurora";
export type { HeroAuroraProps } from "./sections/hero-aurora";

export { HeroSplit } from "./sections/hero-split";
export type { HeroSplitProps } from "./sections/hero-split";

export { HeroMinimal } from "./sections/hero-minimal";
export type { HeroMinimalProps } from "./sections/hero-minimal";

export { FeaturesBento } from "./sections/features-bento";
export type {
  FeaturesBentoProps,
  FeaturesBentoFeature,
} from "./sections/features-bento";

export { FeaturesList } from "./sections/features-list";
export type { FeaturesListProps, FeaturesListItem } from "./sections/features-list";

export { AboutMission } from "./sections/about-mission";
export type {
  AboutMissionProps,
  AboutMissionValue,
} from "./sections/about-mission";

export { TestimonialMarquee } from "./sections/testimonial-marquee";
export type {
  TestimonialMarqueeProps,
  Testimonial,
} from "./sections/testimonial-marquee";

export { TestimonialsGrid } from "./sections/testimonials-grid";
export type {
  TestimonialsGridProps,
  TestimonialsGridItem,
} from "./sections/testimonials-grid";

export { PricingTiers } from "./sections/pricing-tiers";
export type { PricingTiersProps, PricingTier } from "./sections/pricing-tiers";

export { PricingComparison } from "./sections/pricing-comparison";
export type {
  PricingComparisonProps,
  PricingComparisonPlan,
  PricingComparisonRow,
} from "./sections/pricing-comparison";

export { ContactForm } from "./sections/contact-form";
export type { ContactFormProps, ContactFormItem } from "./sections/contact-form";

export { ContactCards } from "./sections/contact-cards";
export type { ContactCardsProps, ContactCardsItem } from "./sections/contact-cards";

export { FooterCosmic } from "./sections/footer-cosmic";
export type { FooterCosmicProps, FooterColumn } from "./sections/footer-cosmic";

export { NavbarGlass } from "./sections/navbar-glass";
export type { NavbarGlassProps, NavbarGlassLink } from "./sections/navbar-glass";

export { NavbarFloating } from "./sections/navbar-floating";
export type {
  NavbarFloatingProps,
  NavbarFloatingLink,
} from "./sections/navbar-floating";

export { FaqAccordion } from "./sections/faq-accordion";
export type {
  FaqAccordionProps,
  FaqAccordionItem,
} from "./sections/faq-accordion";

export { TeamGrid } from "./sections/team-grid";
export type { TeamGridProps, TeamMember } from "./sections/team-grid";

export { StatsSection } from "./sections/stats-section";
export type { StatsSectionProps, StatItem } from "./sections/stats-section";

export { LogoCloud } from "./sections/logo-cloud";
export type {
  LogoCloudProps,
  LogoCloudItem,
} from "./sections/logo-cloud";

export { TimelineSection } from "./sections/timeline-section";
export type {
  TimelineSectionProps,
  TimelineEvent,
} from "./sections/timeline-section";

export { BlogCards } from "./sections/blog-cards";
export type { BlogCardsProps, BlogPost } from "./sections/blog-cards";

export { CtaBanner } from "./sections/cta-banner";
export type { CtaBannerProps, CtaBannerVariant } from "./sections/cta-banner";

export { GalleryGrid } from "./sections/gallery-grid";
export type { GalleryGridProps, GalleryImage } from "./sections/gallery-grid";

// ─── Backgrounds ─────────────────────────────────────────────────────────────

export { ParticleField } from "./backgrounds/particle-field";
export type { ParticleFieldProps } from "./backgrounds/particle-field";

export { AuroraBackground } from "./backgrounds/aurora-background";
export type { AuroraBackgroundProps } from "./backgrounds/aurora-background";

export { GridBeam } from "./backgrounds/grid-beam";
export type { GridBeamProps } from "./backgrounds/grid-beam";

export { GradientMesh } from "./backgrounds/gradient-mesh";
export type { GradientMeshProps } from "./backgrounds/gradient-mesh";

export { Spotlight } from "./backgrounds/spotlight";
export type { SpotlightProps } from "./backgrounds/spotlight";

export { RetroGrid } from "./backgrounds/retro-grid";
export type { RetroGridProps } from "./backgrounds/retro-grid";

export { DotPattern } from "./backgrounds/dot-pattern";
export type { DotPatternProps } from "./backgrounds/dot-pattern";

export { MatrixRain } from "./backgrounds/matrix-rain";
export type { MatrixRainProps } from "./backgrounds/matrix-rain";

// ─── Text Animations ────────────────────────────────────────────────────────

export { TypewriterText } from "./text/typewriter-text";
export type { TypewriterTextProps } from "./text/typewriter-text";

export { SparklesText } from "./text/sparkles-text";
export type { SparklesTextProps } from "./text/sparkles-text";

export { GradientTextReveal } from "./text/gradient-text-reveal";
export type { GradientTextRevealProps } from "./text/gradient-text-reveal";

export { WordRotator } from "./text/word-rotator";
export type { WordRotatorProps } from "./text/word-rotator";

export { TextScramble } from "./text/text-scramble";
export type { TextScrambleProps, TextScrambleTrigger } from "./text/text-scramble";

export { BlurReveal } from "./text/blur-reveal";
export type { BlurRevealProps } from "./text/blur-reveal";

export { NumberTicker } from "./text/number-ticker";
export type { NumberTickerProps } from "./text/number-ticker";

// ─── Utils ───────────────────────────────────────────────────────────────────

export { cn } from "./utils/cn";

export { CompactModeProvider, useCompactMode } from "./utils/compact-context";
export type { SectionDensityProps } from "./utils/section";

export { usePrefersReducedMotion, useInView } from "./utils/motion";

export { Slot } from "./utils/slot";
