"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShimmerBadge } from "@nebula/ui";
import {
  ArrowUpRight,
  Sparkles,
  LayoutGrid,
  Users,
  MessageCircle,
  BadgeDollarSign,
  Mail,
  PanelBottom,
  Menu,
  HelpCircle,
  UserCircle,
  TrendingUp,
  Building,
  Clock,
  FileText,
  Megaphone,
  ImageIcon,
  Layers,
  Type,
  Box,
  type LucideIcon,
} from "lucide-react";
import {
  CATEGORIES,
  COMPONENTS,
  type CategoryMeta,
} from "@/lib/components-registry";
import { CategoryThumbnail } from "@/components/category-thumbnails";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  LayoutGrid,
  Users,
  MessageCircle,
  BadgeDollarSign,
  Mail,
  PanelBottom,
  Menu,
  HelpCircle,
  UserCircle,
  TrendingUp,
  Building,
  Clock,
  FileText,
  Megaphone,
  Image: ImageIcon,
  Layers,
  Type,
  Box,
};

export function CategorySection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-cat-card]", {
        y: 48,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="components"
      ref={root}
      className="relative scroll-mt-24 py-24 md:py-32"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <ShimmerBadge tone="cyan">Library</ShimmerBadge>
          <h2 className="text-display mt-4 text-balance text-4xl font-semibold leading-tight md:text-5xl">
            Categories curated for{" "}
            <span className="bg-[linear-gradient(110deg,#2dd4bf,#a5b4fc,#f0abfc)] bg-clip-text text-transparent">
              real product surfaces.
            </span>
          </h2>
          <p className="mt-4 text-balance text-white/60 md:text-lg">
            {CATEGORIES.length} categories, every variation drop-in ready. Click any card to
            preview, copy code, and ship.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat, idx) => {
            const items = COMPONENTS.filter((c) => c.category === cat.id);
            const Icon = ICONS[cat.iconName];
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                data-cat-card
                className="group relative block focus-visible:outline-none"
              >
                {/* Outer gradient border */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(140deg, ${cat.accent}66, transparent 50%, ${cat.accent}33)`,
                    filter: "blur(0.5px)",
                  }}
                />

                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a14]/80 p-5 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
                  {/* Big numeric index */}
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-4 select-none font-mono text-7xl font-bold leading-none tracking-tighter opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.12]"
                    style={{ color: cat.accent }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Thumbnail preview */}
                  <CategoryThumbnail id={cat.id} accent={cat.accent} />

                  {/* Header row */}
                  <div className="mt-5 flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] transition-colors"
                        style={{ color: cat.accent }}
                      >
                        {Icon ? <Icon className="size-4" /> : <Sparkles className="size-4" />}
                      </span>
                      <h3 className="text-display text-xl font-semibold">
                        {cat.label}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-4 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>

                  <p className="mt-2 text-sm text-white/55">
                    {cat.description}
                  </p>

                  {/* Components in this category */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {items.slice(0, 3).map((c) => (
                      <span
                        key={c.slug}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/65"
                      >
                        {c.name}
                      </span>
                    ))}
                    {items.length > 3 && (
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/40">
                        +{items.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      {items.length} variation{items.length === 1 ? "" : "s"}
                    </span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] transition-opacity duration-300"
                      style={{ color: cat.accent }}
                    >
                      Browse →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
