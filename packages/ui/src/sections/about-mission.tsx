"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionGridGap,
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
    <section className={cn("relative overflow-hidden", sectionPadding(compact), className)}>
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
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
          <div className={cn("mx-auto mt-8 max-w-2xl space-y-4 text-center", sectionSubheading(compact))}>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {values.length > 0 && (
          <div
            className={cn(
              "grid gap-4",
              sectionGridGap(compact),
              compact ? "grid-cols-1 sm:grid-cols-2" : "md:grid-cols-3"
            )}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className={cn(
                  "rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur",
                  compact ? "p-5" : "p-6"
                )}
              >
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/60">{v.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
