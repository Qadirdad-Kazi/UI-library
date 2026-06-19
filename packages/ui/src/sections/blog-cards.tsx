"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionBlockGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { GlowCard } from "../components/glow-card";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface BlogPost {
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category?: string;
  href: string;
  readTime?: string;
}

export interface BlogCardsProps extends SectionDensityProps {
  title?: ReactNode;
  description?: ReactNode;
  posts: BlogPost[];
  columns?: 2 | 3;
  className?: string;
}

const colClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
} as const;

const compactColClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2",
} as const;

export function BlogCards({
  title = "Latest articles",
  description,
  posts,
  columns = 3,
  compact: compactProp,
  className,
}: BlogCardsProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn(sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        {(title || description) && (
          <div className={cn("text-center", sectionBlockGap(compact))}>
            {title && (
              <h2 className={sectionHeading(compact)}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn("mt-4", sectionSubheading(compact))}>{description}</p>
            )}
          </div>
        )}

        <div className={cn("grid gap-6", compact ? compactColClasses[columns] : colClasses[columns])}>
          {posts.map((post) => (
            <a key={post.href} href={post.href} className="group">
              <GlowCard
                glowColor="#22d3ee"
                intensity="low"
                className="flex h-full flex-col p-0 transition-transform duration-300 group-hover:-translate-y-1"
              >
                {post.image && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                <div className={cn("flex flex-1 flex-col", compact ? "p-5" : "p-6")}>
                  <div className="flex items-center gap-3">
                    {post.category && (
                      <ShimmerBadge tone="cyan">{post.category}</ShimmerBadge>
                    )}
                    <span className="text-xs text-white/40">{post.date}</span>
                    {post.readTime && (
                      <>
                        <span className="text-xs text-white/20">·</span>
                        <span className="text-xs text-white/40">
                          {post.readTime}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-tight transition-colors group-hover:text-cyan-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-white/60 transition-colors group-hover:text-white">
                    Read more
                    <svg
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </GlowCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
