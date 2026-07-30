import { cn } from "./cn";

/** Shared spacing + typography tokens for full-page vs card/preview layouts */
export function sectionPadding(compact?: boolean, className?: string) {
  return cn(compact ? "py-8" : "py-24", className);
}

export function sectionInset(compact?: boolean, maxWidth = "max-w-6xl") {
  return cn("mx-auto w-full", maxWidth, compact ? "px-4" : "px-6");
}

export function sectionHeading(compact?: boolean) {
  return cn(
    "font-semibold leading-tight tracking-tight",
    compact ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"
  );
}

export function sectionHeroHeading(compact?: boolean) {
  return cn(
    "font-semibold leading-tight tracking-tight",
    compact ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl lg:text-7xl"
  );
}

export function sectionSubheading(compact?: boolean) {
  return cn("text-white/55", compact ? "text-sm" : "md:text-lg");
}

export function sectionHeaderGap(compact?: boolean) {
  return compact ? "mb-6" : "mb-10";
}

export function sectionBlockGap(compact?: boolean) {
  return compact ? "mb-8" : "mb-16";
}

export function sectionGridGap(compact?: boolean) {
  return compact ? "mt-6" : "mt-14";
}

export type SectionDensityProps = {
  /** Tighter layout for previews, sidebars, and nested embeds */
  compact?: boolean;
};
