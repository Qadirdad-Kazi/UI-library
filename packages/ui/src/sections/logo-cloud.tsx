"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeaderGap,
  sectionInset,
  sectionPadding,
  type SectionDensityProps,
} from "../utils/section";

export interface LogoCloudItem {
  /** SVG element or image element */
  logo: ReactNode;
  alt: string;
  href?: string;
}

export interface LogoCloudProps extends SectionDensityProps {
  title?: ReactNode;
  logos: LogoCloudItem[];
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

const speedClasses = {
  slow: "animate-[scroll-x_40s_linear_infinite]",
  normal: "animate-[scroll-x_25s_linear_infinite]",
  fast: "animate-[scroll-x_15s_linear_infinite]",
} as const;

export function LogoCloud({
  title = "Trusted by industry leaders",
  logos,
  speed = "normal",
  pauseOnHover = true,
  compact: compactProp,
  className,
}: LogoCloudProps) {
  const compact = useCompactMode(compactProp);

  const track = (
    <div
      className={cn(
        "flex w-max gap-12",
        speedClasses[speed],
        "motion-reduce:animate-none",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >
      {[...logos, ...logos].map((item, i) => {
        const content = (
          <div
            className={cn(
              "flex shrink-0 items-center justify-center opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0",
              compact ? "h-10 w-24" : "h-12 w-32"
            )}
          >
            {item.logo}
          </div>
        );

        if (item.href) {
          return (
            <a
              key={`${item.alt}-${i}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.alt}
              className="shrink-0"
            >
              {content}
            </a>
          );
        }

        return (
          <div key={`${item.alt}-${i}`} className="shrink-0" aria-label={item.alt}>
            {content}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className={cn(sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        {title && (
          <div className={cn("text-center", sectionHeaderGap(compact))}>
            <h2 className="text-sm uppercase tracking-[0.2em] text-white/40">
              {title}
            </h2>
          </div>
        )}

        <div
          className={cn(
            "relative overflow-hidden",
            "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          )}
        >
          {track}
        </div>
      </div>
    </section>
  );
}
