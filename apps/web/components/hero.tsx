"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShimmerBadge, GradientButton } from "@nebula/ui";
import { ArrowRight, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

const AiSphere = dynamic(
  () => import("./ai-sphere").then((m) => m.AiSphere),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 grid place-items-center">
        <div className="size-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.45),rgba(124,106,245,0.2)_45%,transparent_70%)] blur-2xl" />
      </div>
    ),
  }
);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!root.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        y: 28,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText("npm install @nebula/ui");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
      <div className="absolute -top-40 left-1/2 size-[620px] -translate-x-1/2 rounded-full bg-teal-400/15 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 size-[480px] rounded-full bg-violet-500/12 blur-[120px]" />
      <div className="absolute bottom-0 left-0 size-[360px] rounded-full bg-cyan-400/8 blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <AiSphere className="size-full" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-3xl">
          <div data-hero-anim className="mb-6">
            <ShimmerBadge tone="teal" pulse>
              <Sparkles className="size-3" />
              v1.0 · Production ready
            </ShimmerBadge>
          </div>

          <h1
            data-hero-anim
            className="text-display text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="block text-white">Nebula</span>
            <span className="mt-1 block bg-[linear-gradient(110deg,#5eead4_0%,#a5b4fc_40%,#f0abfc_75%,#5eead4_100%)] bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:[animation:nebula-gradient-shift_7s_ease_infinite]">
              UI that feels alive.
            </span>
          </h1>

          <p
            data-hero-anim
            className="mt-6 max-w-xl text-balance text-lg text-white/60 md:text-xl"
          >
            A cinematic React library of motion-rich primitives, page sections,
            and animated backgrounds — typed, accessible, and ready to ship.
          </p>

          <div data-hero-anim className="mt-10 flex flex-wrap items-center gap-3">
            <GradientButton asChild variant="aurora" size="lg">
              <Link href="/components">
                Explore components
                <ArrowRight className="size-4" />
              </Link>
            </GradientButton>
            <GradientButton asChild variant="ghost" size="lg" glow={false}>
              <Link href="/docs">Read the docs</Link>
            </GradientButton>
          </div>

          <button
            data-hero-anim
            type="button"
            onClick={copyInstall}
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/35 px-4 py-3 font-mono text-sm text-white/70 backdrop-blur-md transition hover:border-white/20 hover:text-white"
          >
            <span className="text-teal-300/80">$</span>
            <span>npm install @nebula/ui</span>
            {copied ? (
              <Check className="size-3.5 text-emerald-400" />
            ) : (
              <Copy className="size-3.5 text-white/40" />
            )}
          </button>

          <div
            data-hero-anim
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/45"
          >
            <div>
              <div className="text-2xl font-semibold text-white">60+</div>
              <div>Components</div>
            </div>
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <div>
              <div className="text-2xl font-semibold text-white">100%</div>
              <div>TypeScript</div>
            </div>
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <div>
              <div className="text-2xl font-semibold text-white">A11y</div>
              <div>Focus & motion aware</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
