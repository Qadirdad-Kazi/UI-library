"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface AboutMissionValue {
  title: string;
  description: string;
}

export interface AboutMissionProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  highlight?: ReactNode;
  paragraphs?: string[];
  values?: AboutMissionValue[];
  className?: string;
}

const VALUE_ACCENTS = [
  { from: "#7c3aed", to: "#a78bfa" }, // violet
  { from: "#0891b2", to: "#22d3ee" }, // cyan
  { from: "#be185d", to: "#f472b6" }, // pink
  { from: "#b45309", to: "#fbbf24" }, // amber
  { from: "#047857", to: "#34d399" }, // emerald
  { from: "#1d4ed8", to: "#60a5fa" }, // blue
];

export function AboutMission({
  eyebrow = "Our mission",
  title,
  highlight,
  paragraphs = [],
  values = [],
  compact: compactProp,
  className,
}: AboutMissionProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section
      className={cn("relative overflow-hidden", sectionPadding(compact), className)}
    >
      {/* Top gradient rule */}
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[500px] max-w-4xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, rgba(34,211,238,0.05) 50%, transparent 80%)",
        }}
      />

      <div className={sectionInset(compact, "max-w-4xl")}>
        {eyebrow && (
          <div className="text-center">
            <ShimmerBadge tone="violet">{eyebrow}</ShimmerBadge>
          </div>
        )}

        <h2 className={cn("mt-6 text-balance text-center", sectionHeading(compact))}>
          {title}
          {highlight ? (
            <>
              {" "}
              <span className="bg-[linear-gradient(110deg,#a78bfa,#22d3ee,#f472b6,#a78bfa)] bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shift_6s_ease_infinite]">
                {highlight}
              </span>
            </>
          ) : null}
        </h2>

        {paragraphs.length > 0 && (
          <div
            className={cn(
              "mx-auto mt-8 max-w-2xl space-y-4 text-center text-white/60",
              sectionSubheading(compact)
            )}
          >
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {values.length > 0 && (
          <div
            className={cn(
              "mt-14 grid gap-4",
              compact
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            )}
          >
            {values.map((v, i) => {
              const accent = VALUE_ACCENTS[i % VALUE_ACCENTS.length];
              return (
                <div
                  key={v.title}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20",
                    compact ? "p-5" : "p-6"
                  )}
                  style={{
                    background: `linear-gradient(135deg, ${accent.from}14 0%, rgba(255,255,255,0.01) 60%)`,
                  }}
                >
                  {/* Glow orb top-right */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: accent.from }}
                  />

                  {/* Index number */}
                  <div
                    className="mb-4 font-mono text-4xl font-bold leading-none tracking-tighter opacity-20"
                    style={{ color: accent.to }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Accent line */}
                  <div
                    className="mb-4 h-px w-12 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
                    }}
                  />

                  <h3
                    className={cn(
                      "font-semibold tracking-tight",
                      compact ? "text-base" : "text-lg"
                    )}
                  >
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
