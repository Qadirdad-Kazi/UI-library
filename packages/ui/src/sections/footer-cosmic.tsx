"use client";

import { type ReactNode, type FormEvent } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import { sectionInset, type SectionDensityProps } from "../utils/section";
import { GradientButton } from "../components/gradient-button";
import { NeonInput } from "../components/neon-input";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterCosmicProps extends SectionDensityProps {
  brand?: ReactNode;
  tagline?: string;
  columns?: FooterColumn[];
  socials?: { label: string; href: string; icon: ReactNode }[];
  newsletter?: { title: string; description?: string; cta?: string };
  onNewsletterSubmit?: (email: string) => void;
  copyright?: ReactNode;
  className?: string;
}

export function FooterCosmic({
  brand = "Nebula",
  tagline = "Cinematic React UI for builders.",
  columns = [],
  socials = [],
  newsletter,
  onNewsletterSubmit,
  copyright,
  compact: compactProp,
  className,
}: FooterCosmicProps) {
  const compact = useCompactMode(compactProp);

  const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onNewsletterSubmit?.(String(data.get("email") ?? ""));
  };

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-white/10 bg-[var(--color-bg,#06060d)]",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
      />
      {!compact && (
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-teal-500/8 blur-[120px]"
        />
      )}

      <div
        className={cn(
          "relative",
          sectionInset(compact),
          compact ? "py-8" : "py-16"
        )}
      >
        <div
          className={cn("grid gap-12", !compact && "lg:grid-cols-[1.4fr_2fr]")}
        >
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid size-9 place-items-center rounded-lg bg-[conic-gradient(from_0deg,#2dd4bf,#67e8f9,#a78bfa,#2dd4bf)]"
              >
                <span className="size-3 rounded-sm bg-[var(--color-bg,#06060d)]" />
              </span>
              <span className="text-xl font-semibold tracking-tight text-white">
                {brand}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {tagline}
            </p>

            {!compact && newsletter && (
              <form className="mt-8 max-w-md" onSubmit={handleNewsletter}>
                <h4 className="text-sm font-semibold text-white">
                  {newsletter.title}
                </h4>
                {newsletter.description && (
                  <p className="mt-1.5 text-xs text-white/45">
                    {newsletter.description}
                  </p>
                )}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start">
                  <NeonInput
                    name="email"
                    type="email"
                    required
                    placeholder="you@nebula.dev"
                    accent="teal"
                    className="flex-1"
                  />
                  <GradientButton type="submit" variant="aurora" size="md">
                    {newsletter.cta ?? "Subscribe"}
                  </GradientButton>
                </div>
              </form>
            )}
          </div>

          {!compact && columns.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    {col.title}
                  </h4>
                  <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="transition duration-300 hover:text-teal-200"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center",
            compact ? "mt-8" : "mt-14"
          )}
        >
          <p className="text-xs text-white/40">{copyright}</p>
          {!compact && socials.length > 0 && (
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition duration-300 hover:border-teal-400/30 hover:bg-white/[0.06] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
