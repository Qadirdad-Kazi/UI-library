"use client";

import Link from "next/link";
import { GradientButton, ShimmerBadge } from "@nebula/ui";
import { ArrowRight, Terminal } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(124,106,245,0.2),transparent_55%)] p-10 md:p-16">
          <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-teal-400/20 blur-[80px]"
          />
          <div className="relative max-w-2xl">
            <ShimmerBadge tone="teal">Get started</ShimmerBadge>
            <h2 className="text-display mt-4 text-balance text-4xl font-semibold md:text-5xl">
              Ship a cinematic UI in one command.
            </h2>
            <p className="mt-4 text-white/60 md:text-lg">
              Install once, theme with CSS variables, and drop in production-ready
              sections that already look intentional.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm backdrop-blur-md">
              <Terminal className="size-4 text-teal-300/70" />
              <span className="text-white/40">$</span>
              <span className="text-white">npm install @nebula/ui</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <GradientButton asChild variant="aurora" size="lg">
                <Link href="/docs">
                  Read the docs
                  <ArrowRight className="size-4" />
                </Link>
              </GradientButton>
              <GradientButton asChild variant="ghost" size="lg" glow={false}>
                <Link href="/components">
                  Browse components
                  <ArrowRight className="size-4" />
                </Link>
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
