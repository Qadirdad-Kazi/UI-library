import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { ShimmerBadge, GradientButton } from "@nebula/ui";
import {
  CATEGORIES,
  COMPONENTS,
  getCategory,
  getComponentsByCategory,
  type ComponentCategory,
} from "@/lib/components-registry";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";
import { ComponentPreview } from "@/components/component-preview";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cat = getCategory(id as ComponentCategory);
  if (!cat) return {};
  return {
    title: `${cat.label} · Nebula UI`,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cat = getCategory(id as ComponentCategory);
  if (!cat) notFound();

  const items = getComponentsByCategory(cat.id);
  const idx = CATEGORIES.findIndex((c) => c.id === cat.id);
  const prev = idx > 0 ? CATEGORIES[idx - 1] : null;
  const next = idx < CATEGORIES.length - 1 ? CATEGORIES[idx + 1] : null;

  return (
    <div className="container-page pt-32 pb-24">
      <Link
        href="/#components"
        className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
      >
        <ArrowLeft className="size-4" />
        All categories
      </Link>

      {/* Header */}
      <div className="mt-8">
        <ShimmerBadge tone="violet">{cat.label}</ShimmerBadge>
        <h1 className="text-display mt-4 text-balance text-5xl font-semibold leading-tight md:text-6xl">
          {cat.label}{" "}
          <span
            className="font-mono text-3xl"
            style={{ color: cat.accent }}
          >
            .{cat.id}
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg text-white/70">
          {cat.description}
        </p>
        <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/40">
          <span>
            {String(idx + 1).padStart(2, "0")} of{" "}
            {String(CATEGORIES.length).padStart(2, "0")}
          </span>
          <span className="size-1 rounded-full bg-white/20" />
          <span>
            {items.length} variation{items.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      {/* Component cards with live previews */}
      <div className="mt-16 space-y-10">
        {items.map((item) => (
          <article
            key={item.slug}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur transition hover:border-white/20"
          >
            {/* Glow orb */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
              style={{
                background: `radial-gradient(circle, ${cat.accent}88, transparent 70%)`,
              }}
            />

            {/* Live preview area */}
            <div className="relative border-b border-white/[0.06] bg-[#08080e]">
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-red-400/50" />
                  <span className="size-2 rounded-full bg-amber-400/50" />
                  <span className="size-2 rounded-full bg-emerald-400/50" />
                </div>
                <span className="font-mono text-[10px] text-white/25">
                  {item.slug}.tsx
                </span>
              </div>
              <div className="pt-9 pb-1">
                <ComponentPreview slug={item.slug} />
              </div>
            </div>

            {/* Info bar */}
            <div className="relative p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-display text-xl font-semibold md:text-2xl">
                      {item.name}
                    </h2>
                    <span
                      className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                      style={{
                        borderColor: `${cat.accent}55`,
                        color: cat.accent,
                      }}
                    >
                      {item.slug}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-white/60">
                    {item.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <CopyButton
                    value={item.importStatement}
                    className="h-8 px-3"
                  />
                  <Link href={`/components/${item.slug}`}>
                    <GradientButton variant="aurora" size="sm">
                      <Eye className="size-3.5" />
                      Open
                    </GradientButton>
                  </Link>
                </div>
              </div>

              {/* Import snippet */}
              <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/30 px-4 py-2.5 font-mono text-xs text-white/70">
                <code className="text-cyan-300">import</code>{" "}
                <code>{`{ ${item.name.replace(/\s+/g, "")} }`}</code>{" "}
                <code className="text-cyan-300">from</code>{" "}
                <code className="text-amber-200">&quot;@nebula/ui&quot;</code>;
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Quick install */}
      <div className="mt-16">
        <h2 className="text-display text-2xl font-semibold">Get started</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          Install Nebula UI once and use any {cat.label.toLowerCase()} variation.
        </p>
        <div className="mt-4 max-w-xl">
          <CodeBlock code="npm install @nebula/ui" lang="bash" />
        </div>
      </div>

      {/* Prev / next category */}
      <nav className="mt-20 flex items-stretch justify-between gap-4 border-t border-white/10 pt-8">
        {prev ? (
          <Link
            href={`/categories/${prev.id}`}
            className="group flex flex-1 flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Previous
            </span>
            <span className="flex items-center gap-2 font-medium text-white">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              {prev.label}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/categories/${next.id}`}
            className="group flex flex-1 flex-col items-end gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Next
            </span>
            <span className="flex items-center gap-2 font-medium text-white">
              {next.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  );
}
