import Link from "next/link";
import { ShimmerBadge, GradientButton } from "@nebula/ui";
import { CodeBlock } from "@/components/code-block";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Docs · Nebula UI",
  description: "Install Nebula UI, theme it, and ship.",
};

const TOC = [
  { id: "install", label: "Install" },
  { id: "tailwind", label: "Tailwind setup" },
  { id: "first-component", label: "Your first component" },
  { id: "theming", label: "Theming" },
  { id: "best-practices", label: "Best practices" },
  { id: "license", label: "License" },
];

export default function DocsPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        {/* Sidebar TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            On this page
          </div>
          <ul className="mt-4 space-y-1.5 text-sm">
            {TOC.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-1.5 text-white/60 transition hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="prose-nebula max-w-3xl">
          <ShimmerBadge tone="violet">Docs · v0.1</ShimmerBadge>
          <h1 className="text-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Documentation
          </h1>
          <p className="mt-4 text-balance text-lg text-white/70">
            Everything you need to integrate Nebula UI into a Next.js, Vite, or Remix
            project.
          </p>

          <Section id="install" title="Install">
            <p className="text-white/70">
              Add Nebula UI to your project with your package manager of choice.
            </p>
            <div className="mt-4 grid gap-3">
              <CodeBlock code="npm install @nebula/ui" lang="bash" />
              <CodeBlock code="pnpm add @nebula/ui" lang="bash" />
              <CodeBlock code="yarn add @nebula/ui" lang="bash" />
            </div>
          </Section>

          <Section id="tailwind" title="Tailwind setup">
            <p className="text-white/70">
              Nebula UI is built on Tailwind v4. Make sure Tailwind is installed and
              that your global stylesheet imports it:
            </p>
            <div className="mt-4">
              <CodeBlock
                code={`/* app/globals.css */
@import "tailwindcss";`}
                lang="ts"
                filename="globals.css"
              />
            </div>
            <p className="mt-4 text-white/70">
              If you're consuming the published package, also import the bundled styles:
            </p>
            <div className="mt-4">
              <CodeBlock
                code={`@import "@nebula/ui/styles.css";`}
                lang="ts"
              />
            </div>
          </Section>

          <Section id="first-component" title="Your first component">
            <p className="text-white/70">
              Import any component and drop it into a page. Components are tree-shakable
              and have zero runtime CSS.
            </p>
            <div className="mt-4">
              <CodeBlock
                code={`import { GradientButton, GlowCard, NeonInput } from "@nebula/ui";

export default function SignIn() {
  return (
    <GlowCard glowColor="#7c3aed" className="max-w-sm">
      <h2 className="text-2xl font-semibold">Welcome back</h2>
      <NeonInput label="Email" placeholder="you@nebula.dev" accent="violet" />
      <GradientButton variant="aurora" size="lg" className="mt-4 w-full">
        Sign in
      </GradientButton>
    </GlowCard>
  );
}`}
                lang="tsx"
                filename="app/sign-in/page.tsx"
              />
            </div>
          </Section>

          <Section id="theming" title="Theming">
            <p className="text-white/70">
              Every component accepts a <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">className</code>{" "}
              prop and merges it through{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">tailwind-merge</code>, so you can override anything. For
              palette-level changes, customize the design tokens in your{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">@theme</code> block:
            </p>
            <div className="mt-4">
              <CodeBlock
                code={`@theme {
  --color-accent-violet: #8b5cf6;
  --color-accent-cyan:   #22d3ee;
  --color-accent-pink:   #ec4899;
}`}
                lang="ts"
                filename="globals.css"
              />
            </div>
          </Section>

          <Section id="best-practices" title="Best practices">
            <ul className="mt-2 list-disc space-y-2 pl-6 text-white/70">
              <li>
                Use <strong>GradientButton</strong> for primary CTAs, not for low-stakes
                actions — its shimmer competes for attention.
              </li>
              <li>
                When stacking <strong>GlowCard</strong>s, vary the{" "}
                <code className="rounded bg-white/[0.06] px-1 py-0.5 font-mono text-xs">glowColor</code> per
                category so the spotlight tells a story.
              </li>
              <li>
                Pair the components with the smooth-scroll provider for the cinematic
                effect — see{" "}
                <Link className="underline underline-offset-4" href="/components">
                  Component demos
                </Link>.
              </li>
              <li>
                The library is fully tree-shakable. Import only what you use.
              </li>
            </ul>
          </Section>

          <Section id="license" title="License">
            <p className="text-white/70">
              Nebula UI is released under the MIT License. Use it in personal and
              commercial projects, no attribution required (though we always appreciate
              it).
            </p>
          </Section>

          <div className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_55%)] p-8">
            <h2 className="text-display text-3xl font-semibold">
              Ready to ship?
            </h2>
            <p className="text-white/70">
              Try every component in the live showcase.
            </p>
            <div>
              <Link href="/components">
                <GradientButton variant="ocean" size="lg">
                  Open Showcase
                  <ArrowRight className="size-4" />
                </GradientButton>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-12">
      <h2 className="text-display text-3xl font-semibold md:text-4xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
