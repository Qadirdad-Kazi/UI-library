"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShimmerBadge, GradientButton } from "@nebula/ui";
import { ArrowRight, Sparkles } from "lucide-react";

const AiSphere = dynamic(
  () => import("./ai-sphere").then((m) => m.AiSphere),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 grid place-items-center">
        <div className="size-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.6),rgba(34,211,238,0.2)_50%,transparent_70%)] blur-2xl" />
      </div>
    ),
  }
);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 size-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="absolute inset-0 -z-10">
        <AiSphere className="size-full" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-3xl">
          <div data-hero-anim className="mb-6">
            <ShimmerBadge tone="violet">
              <Sparkles className="size-3" />
              v0.1 · Cinematic React UI
            </ShimmerBadge>
          </div>

          <h1
            data-hero-anim
            className="text-display text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Components that{" "}
            <span className="bg-[linear-gradient(110deg,#a78bfa_10%,#22d3ee_40%,#f472b6_70%,#a78bfa_100%)] bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shift_6s_ease_infinite]">
              feel alive.
            </span>
          </h1>

          <p
            data-hero-anim
            className="mt-6 max-w-xl text-balance text-lg text-white/70 md:text-xl"
          >
            Nebula is a premium React library of 3D-aware, motion-rich UI primitives.
            Browse section categories, open live demos, and copy the code into your
            project in seconds.
          </p>

          <div data-hero-anim className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#components">
              <GradientButton variant="aurora" size="lg">
                Explore components
                <ArrowRight className="size-4" />
              </GradientButton>
            </Link>
            <Link
              href="/docs"
              className="group inline-flex h-14 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 text-base font-medium text-white/90 backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              Read the docs
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div data-hero-anim className="mt-12 flex items-center gap-8 text-sm text-white/50">
            <div>
              <div className="text-2xl font-semibold text-white">12+</div>
              <div>Components</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-semibold text-white">100%</div>
              <div>TypeScript</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-semibold text-white">0kb</div>
              <div>Runtime CSS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
