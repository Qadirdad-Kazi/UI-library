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
import { GlowCard } from "../components/glow-card";
import { GlowAvatar } from "../components/glow-avatar";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  socials?: { icon: ReactNode; href: string }[];
  glowColor?: string;
}

export interface TeamGridProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  members: TeamMember[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const colClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

const compactColClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2",
  4: "grid-cols-1 sm:grid-cols-2",
} as const;

export function TeamGrid({
  eyebrow,
  title = "Meet the team",
  description,
  members,
  columns = 3,
  compact: compactProp,
  className,
}: TeamGridProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[360px] max-w-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,106,245,0.1) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact)}>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <ShimmerBadge tone="violet">{eyebrow}</ShimmerBadge>}
          <h2
            className={cn(
              "text-balance text-white",
              eyebrow ? "mt-4" : "",
              sectionHeading(compact)
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-4 text-balance text-white/55",
                sectionSubheading(compact)
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div
          className={cn(
            "grid gap-6",
            sectionGridGap(compact),
            compact ? compactColClasses[columns] : colClasses[columns]
          )}
        >
          {members.map((member) => (
            <GlowCard
              key={member.name}
              glowColor={member.glowColor ?? "#7c6af5"}
              intensity="low"
              className={cn(
                "flex flex-col items-center text-center",
                compact ? "p-5" : "p-8"
              )}
            >
              <GlowAvatar
                src={member.avatar}
                alt={member.name}
                size={compact ? "lg" : "xl"}
                glowColor={member.glowColor ?? "#7c6af5"}
                clipGlow={compact}
              />
              <h3 className="mt-5 text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-white/55">{member.role}</p>
              {member.bio && (
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {member.bio}
                </p>
              )}
              {member.socials && member.socials.length > 0 && (
                <div className="mt-4 flex items-center gap-2">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid size-8 place-items-center rounded-lg border border-white/10 text-white/40 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
