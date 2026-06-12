"use client";

import { type ReactNode } from "react";
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
  copyright?: ReactNode;
  className?: string;
}

export function FooterCosmic({
  brand = "Nebula",
  tagline = "Cinematic React UI for builders.",
  columns = [],
  socials = [],
  newsletter,
  copyright,
  compact: compactProp,
  className,
}: FooterCosmicProps) {
  const compact = useCompactMode(compactProp);

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-white/10 bg-[var(--color-bg,#05050a)]",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
      />
      {!compact && (
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]"
        />
      )}

      <div className={cn("relative", sectionInset(compact), compact ? "py-8" : "py-16")}>
        <div className={cn("grid gap-12", !compact && "lg:grid-cols-[1.4fr_2fr]")}>
          <div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid size-9 place-items-center rounded-lg bg-[conic-gradient(from_0deg,#7c3aed,#22d3ee,#ec4899,#7c3aed)]"
              >
                <span className="size-3 rounded-sm bg-[var(--color-bg,#05050a)]" />
              </span>
              <span className="text-xl font-semibold tracking-tight">{brand}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">{tagline}</p>

            {!compact && newsletter && (
              <form className="mt-8 max-w-md">
                <h4 className="text-sm font-semibold">{newsletter.title}</h4>
                {newsletter.description && (
                  <p className="mt-1 text-xs text-white/50">
                    {newsletter.description}
                  </p>
                )}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <NeonInput
                    name="email"
                    type="email"
                    placeholder="you@nebula.dev"
                    accent="violet"
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
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="transition hover:text-white"
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
            !compact && "mt-14"
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
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
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
