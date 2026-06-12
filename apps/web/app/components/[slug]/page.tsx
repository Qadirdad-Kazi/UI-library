import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ShimmerBadge } from "@nebula/ui";
import { COMPONENTS, getComponent } from "@/lib/components-registry";
import { CodeBlock } from "@/components/code-block";
import { DemoRenderer } from "@/components/demos/demo-renderer";
import { DEMO_SOURCE, DEMO_USAGE } from "@/components/demos";

export function generateStaticParams() {
  return COMPONENTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getComponent(slug);
  if (!c) return {};
  return {
    title: `${c.name} · Nebula UI`,
    description: c.description,
  };
}

export default async function ComponentShowcasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) notFound();

  const idx = COMPONENTS.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? COMPONENTS[idx - 1] : null;
  const next = idx < COMPONENTS.length - 1 ? COMPONENTS[idx + 1] : null;

  const source = DEMO_SOURCE[slug] ?? "// No source available";
  const usage = DEMO_USAGE[slug] ?? "// No usage available";

  return (
    <div className="container-page pt-32 pb-24">
      <Link
        href="/components"
        className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
      >
        <ArrowLeft className="size-4" />
        All components
      </Link>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
        <div>
          <ShimmerBadge tone="violet">{component.category}</ShimmerBadge>
          <h1 className="text-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            {component.name}
          </h1>
          <p className="mt-3 max-w-2xl text-balance text-lg text-white/70">
            {component.tagline}
          </p>
        </div>
        <Link
          href={`/categories/${component.category}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.06]"
        >
          View category
        </Link>
      </div>

      <p className="mt-6 max-w-3xl text-white/70">{component.description}</p>

      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Live demo
        </h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_60%)]">
          <div className="border-b border-white/[0.06] px-4 py-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/60" />
              <span className="size-2.5 rounded-full bg-amber-400/60" />
              <span className="size-2.5 rounded-full bg-emerald-400/60" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                {component.slug}.tsx
              </span>
            </div>
          </div>
          <div className="relative">
            <DemoRenderer slug={slug} />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Source
        </h2>
        <div className="mt-3">
          <CodeBlock code={source} lang="tsx" filename="example.tsx" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Install
        </h2>
        <div className="mt-3">
          <CodeBlock code={component.installCommand} lang="bash" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Usage
        </h2>
        <div className="mt-3">
          <CodeBlock code={usage} lang="tsx" filename="usage.tsx" />
        </div>
      </section>

      <nav className="mt-20 flex items-stretch justify-between gap-4 border-t border-white/10 pt-8">
        {prev ? (
          <Link
            href={`/components/${prev.slug}`}
            className="group flex flex-1 flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Previous
            </span>
            <span className="flex items-center gap-2 font-medium text-white">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              {prev.name}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/components/${next.slug}`}
            className="group flex flex-1 flex-col items-end gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Next
            </span>
            <span className="flex items-center gap-2 font-medium text-white">
              {next.name}
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
