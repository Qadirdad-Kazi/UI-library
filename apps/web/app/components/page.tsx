import Link from "next/link";
import { ShimmerBadge, GradientButton } from "@nebula/ui";
import { ArrowUpRight, Eye } from "lucide-react";
import { CATEGORIES, COMPONENTS } from "@/lib/components-registry";
import { CopyButton } from "@/components/copy-button";

export const metadata = {
  title: "Components · Nebula UI",
  description: "Browse the full Nebula UI component library.",
};

export default function ComponentsIndexPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <ShimmerBadge tone="violet">All components</ShimmerBadge>
        <h1 className="text-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
          The full library.
        </h1>
        <p className="mt-4 text-balance text-white/60 md:text-lg">
          Click any component for a live demo, copyable code, and usage notes.
        </p>
      </div>

      {CATEGORIES.map((cat) => {
        const items = COMPONENTS.filter((c) => c.category === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} id={cat.id} className="mt-20 scroll-mt-24">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="size-2 rounded-full"
                    style={{ background: cat.accent }}
                  />
                  <h2 className="text-display text-3xl font-semibold md:text-4xl">
                    {cat.label}
                  </h2>
                </div>
                <p className="mt-1 max-w-md text-sm text-white/60">
                  {cat.description}
                </p>
              </div>
              <Link
                href={`/categories/${cat.id}`}
                className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:inline-flex"
              >
                View category
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <article
                  key={c.slug}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background: `radial-gradient(circle, ${cat.accent}88, transparent 70%)`,
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-display text-xl font-semibold">
                          {c.name}
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                          {c.tagline}
                        </p>
                      </div>
                      <span
                        className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                        style={{
                          borderColor: `${cat.accent}55`,
                          color: cat.accent,
                        }}
                      >
                        {c.slug}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-white/70">{c.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <Link href={`/components/${c.slug}`}>
                        <GradientButton variant="aurora" size="sm">
                          <Eye className="size-3.5" />
                          View Demo
                        </GradientButton>
                      </Link>
                      <CopyButton
                        value={c.importStatement}
                        className="h-8 px-3"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
