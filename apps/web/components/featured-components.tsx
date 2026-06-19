"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShimmerBadge, GradientButton } from "@nebula/ui";
import { ArrowRight, Eye, Copy, Check } from "lucide-react";
import { COMPONENTS } from "@/lib/components-registry";
import { DEMO_COMPONENTS } from "@/components/demos";

const FEATURED_SLUGS = [
  "hero-aurora",
  "features-bento",
  "pricing-tiers",
  "testimonial-marquee",
];

export function FeaturedComponents() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(FEATURED_SLUGS[0]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-feat-root]", {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const activeComponent = COMPONENTS.find((c) => c.slug === active);
  const ActiveDemo = DEMO_COMPONENTS[active];

  const handleCopy = async () => {
    if (!activeComponent) return;
    try {
      await navigator.clipboard.writeText(activeComponent.importStatement);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section ref={root} className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <ShimmerBadge tone="amber">Featured</ShimmerBadge>
          <h2 className="text-display mt-4 text-balance text-4xl font-semibold leading-tight md:text-5xl">
            See them in motion.
          </h2>
          <p className="mt-4 text-balance text-white/60 md:text-lg">
            Pick a section. Watch it render. Copy the import. Done.
          </p>
        </div>

        <div data-feat-root className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl">
            {/* Tab strip */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {FEATURED_SLUGS.map((slug) => {
                  const c = COMPONENTS.find((x) => x.slug === slug);
                  if (!c) return null;
                  const isActive = active === slug;
                  return (
                    <button
                      key={slug}
                      onClick={() => setActive(slug)}
                      className={
                        "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition " +
                        (isActive
                          ? "bg-white/10 text-white"
                          : "text-white/55 hover:bg-white/5 hover:text-white")
                      }
                    >
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full ring-1 ring-violet-400/30"
                        />
                      )}
                      {c.name}
                    </button>
                  );
                })}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      Copy import
                    </>
                  )}
                </button>
                {activeComponent && (
                  <Link
                    href={`/components/${active}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Eye className="size-3" />
                    View component
                  </Link>
                )}
              </div>
            </div>

            {/* Window chrome + preview */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_top,rgba(124,58,237,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.12),transparent_55%)]"
              />
              <div className="border-b border-white/[0.06] px-4 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/60" />
                  <span className="size-2.5 rounded-full bg-amber-400/60" />
                  <span className="size-2.5 rounded-full bg-emerald-400/60" />
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {active}.tsx · live preview
                  </span>
                </div>
              </div>

              <div className="relative max-h-[640px] overflow-hidden">
                <div className="origin-top scale-[0.96]">
                  {ActiveDemo ? (
                    <ActiveDemo />
                  ) : (
                    <div className="grid h-64 place-items-center text-sm text-white/40">
                      No preview
                    </div>
                  )}
                </div>
                {/* Bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent" />
              </div>
            </div>

            {/* Footer with description + CTA */}
            {activeComponent && (
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-white/[0.02] px-6 py-5">
                <div>
                  <h3 className="text-display text-lg font-semibold">
                    {activeComponent.name}
                  </h3>
                  <p className="text-sm text-white/55">
                    {activeComponent.tagline}
                  </p>
                </div>
                <Link href={`/components/${active}`}>
                  <GradientButton variant="aurora" size="md">
                    Open showcase
                    <ArrowRight className="size-4" />
                  </GradientButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
