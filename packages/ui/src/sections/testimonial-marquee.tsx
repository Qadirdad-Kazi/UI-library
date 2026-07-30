"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionBlockGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  type SectionDensityProps,
} from "../utils/section";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  avatarColor?: string;
}

export interface TestimonialMarqueeProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  testimonials: Testimonial[];
  className?: string;
  /** Seconds for one full loop. Default 40 */
  duration?: number;
  pauseOnHover?: boolean;
}

function Card({ t, compact }: { t: Testimonial; compact?: boolean }) {
  return (
    <div
      className={cn(
        "group/tcard relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition duration-300 hover:border-white/20 hover:bg-white/[0.045]",
        compact ? "w-[260px] p-4" : "w-[340px] p-6"
      )}
    >
      <p className="text-sm leading-relaxed text-white/75">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span
          aria-hidden
          className="grid size-9 place-items-center rounded-full text-xs font-semibold text-white"
          style={{
            background: `linear-gradient(135deg, ${
              t.avatarColor ?? "#2dd4bf"
            }, #67e8f9)`,
          }}
        >
          {t.author.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-medium text-white">{t.author}</div>
          {t.role && <div className="text-xs text-white/45">{t.role}</div>}
        </div>
      </div>
    </div>
  );
}

export function TestimonialMarquee({
  eyebrow = "Loved by builders",
  title,
  testimonials,
  className,
  duration = 40,
  pauseOnHover = true,
  compact: compactProp,
}: TestimonialMarqueeProps) {
  const compact = useCompactMode(compactProp);
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB =
    testimonials.slice(half).length > 0 ? testimonials.slice(half) : rowA;

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        sectionPadding(compact),
        className
      )}
    >
      <div
        className={cn(
          sectionInset(compact, "max-w-2xl"),
          "text-center",
          sectionBlockGap(compact)
        )}
      >
        {eyebrow && <ShimmerBadge tone="teal">{eyebrow}</ShimmerBadge>}
        {title && (
          <h2
            className={cn(
              "mt-4 text-balance text-white",
              sectionHeading(compact)
            )}
          >
            {title}
          </h2>
        )}
      </div>

      <div className="relative space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row
          items={rowA}
          duration={duration}
          reverse={false}
          compact={compact}
          pauseOnHover={pauseOnHover}
        />
        {!compact && (
          <Row
            items={rowB}
            duration={duration * 1.2}
            reverse
            compact={compact}
            pauseOnHover={pauseOnHover}
          />
        )}
      </div>

      <style>{`
        @keyframes nebula-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes nebula-marquee-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function Row({
  items,
  duration,
  reverse,
  compact,
  pauseOnHover,
}: {
  items: Testimonial[];
  duration: number;
  reverse: boolean;
  compact?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group/row flex gap-4 overflow-hidden",
        pauseOnHover && "hover:[&>[data-marquee]]:[animation-play-state:paused]"
      )}
    >
      <div
        data-marquee
        className="flex shrink-0 gap-4 motion-reduce:[animation:none!important]"
        style={{
          animation: `${
            reverse ? "nebula-marquee-reverse" : "nebula-marquee"
          } ${duration}s linear infinite`,
        }}
      >
        {items.concat(items).map((t, i) => (
          <Card key={`a-${i}`} t={t} compact={compact} />
        ))}
      </div>
    </div>
  );
}
