"use client";

import Link from "next/link";
import { GradientButton, ShimmerBadge } from "@nebula/ui";
import { ArrowRight, Terminal } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.18),transparent_55%)] p-10 md:p-16">
          <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="relative max-w-2xl">
            <ShimmerBadge tone="violet">Get started</ShimmerBadge>
            <h2 className="text-display mt-4 text-balance text-4xl font-semibold md:text-5xl">
              Ship a cinematic UI in one command.
            </h2>
            <p className="mt-4 text-white/70 md:text-lg">
              Install once, theme everywhere. Nebula UI plays nicely with Tailwind v4
              and Next.js 15.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm backdrop-blur-md">
              <Terminal className="size-4 text-white/50" />
              <span className="text-white/50">$</span>
              <span className="text-white">npm install @nebula/ui</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/docs">
                <GradientButton variant="aurora" size="lg">
                  Read the docs
                  <ArrowRight className="size-4" />
                </GradientButton>
              </Link>
              <Link
                href="/components"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 text-base font-medium text-white/90 backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                Browse components
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
