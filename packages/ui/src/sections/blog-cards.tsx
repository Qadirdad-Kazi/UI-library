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
  eyebrow?: ReactNode;
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
  eyebrow,
  title = "Latest articles",
  description,
  posts,
  columns = 3,
  compact: compactProp,
  className,
}: BlogCardsProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[360px] max-w-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45,212,191,0.1) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact)}>
        {(eyebrow || title || description) && (
          <div className={cn("mx-auto max-w-2xl text-center", sectionBlockGap(compact))}>
            {eyebrow && <ShimmerBadge tone="teal">{eyebrow}</ShimmerBadge>}
            {title && (
              <h2
                className={cn(
                  "text-balance text-white",
                  eyebrow ? "mt-4" : "",
                  sectionHeading(compact)
                )}
              >
                {title}
              </h2>
            )}
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
        )}

        <div
          className={cn(
            "grid gap-6",
            compact ? compactColClasses[columns] : colClasses[columns]
          )}
        >
          {posts.map((post) => (
            <a key={post.href} href={post.href} className="group">
              <GlowCard
                glowColor="#2dd4bf"
                intensity="low"
                className="flex h-full flex-col p-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0"
              >
                {post.image && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                <div
                  className={cn(
                    "flex flex-1 flex-col",
                    compact ? "p-5" : "p-6"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    {post.category && (
                      <ShimmerBadge tone="teal">{post.category}</ShimmerBadge>
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
                  <h3 className="mt-3 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-teal-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-white/55 transition-colors group-hover:text-teal-300">
                    Read more
                    <svg
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
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
