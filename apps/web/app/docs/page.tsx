import Link from "next/link";
import { ShimmerBadge, GradientButton, Alert } from "@nebula/ui";
import { CodeBlock } from "@/components/code-block";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Docs · Nebula UI",
  description: "Install Nebula UI, theme it, and ship production-ready interfaces.",
};

const TOC = [
  { id: "install", label: "Install" },
  { id: "tailwind", label: "Tailwind setup" },
  { id: "first-component", label: "Your first component" },
  { id: "theming", label: "Theming" },
  { id: "accessibility", label: "Accessibility" },
  { id: "best-practices", label: "Best practices" },
  { id: "license", label: "License" },
];

export default function DocsPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
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
          <ShimmerBadge tone="teal">Docs · v1.0</ShimmerBadge>
          <h1 className="text-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Documentation
          </h1>
          <p className="mt-4 text-balance text-lg text-white/60">
            Everything you need to integrate Nebula UI into a Next.js, Vite, or Remix
            project.
          </p>

          <div className="mt-8">
            <Alert variant="info" title="Styles are required">
              Import <code className="font-mono text-xs">@nebula/ui/styles.css</code> so
              keyframes and design tokens ship with consumers — not only the showcase site.
            </Alert>
          </div>

          <Section id="install" title="Install">
            <p className="text-white/65">
              Add Nebula UI to your project with your package manager of choice.
            </p>
            <div className="mt-4 grid gap-3">
              <CodeBlock code="npm install @nebula/ui" lang="bash" />
              <CodeBlock code="pnpm add @nebula/ui" lang="bash" />
              <CodeBlock code="yarn add @nebula/ui" lang="bash" />
            </div>
          </Section>

          <Section id="tailwind" title="Tailwind setup">
            <p className="text-white/65">
              Nebula UI is built on Tailwind v4. Import Tailwind and the packaged styles:
            </p>
            <div className="mt-4">
              <CodeBlock
                code={`/* app/globals.css */
@import "tailwindcss";
@import "@nebula/ui/styles.css";`}
                lang="css"
                filename="globals.css"
              />
            </div>
          </Section>

          <Section id="first-component" title="Your first component">
            <p className="text-white/65">
              Import any component and drop it into a page. Prefer{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                asChild
              </code>{" "}
              when wrapping Next.js Links.
            </p>
            <div className="mt-4">
              <CodeBlock
                code={`import { GradientButton, GlowCard, NeonInput } from "@nebula/ui";

export default function SignIn() {
  return (
    <GlowCard glowColor="#2dd4bf" className="max-w-sm">
      <h2 className="text-2xl font-semibold">Welcome back</h2>
      <NeonInput label="Email" placeholder="you@nebula.dev" accent="teal" />
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
            <p className="text-white/65">
              Every component accepts a{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                className
              </code>{" "}
              prop and merges it through{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                tailwind-merge
              </code>
              . For palette-level changes, override CSS variables from{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                @nebula/ui/styles.css
              </code>
              :
            </p>
            <div className="mt-4">
              <CodeBlock
                code={`:root {
  --nebula-bg: #06060d;
  --nebula-accent: #7c6af5;
  --nebula-accent-2: #2dd4bf;
}`}
                lang="css"
                filename="globals.css"
              />
            </div>
          </Section>

          <Section id="accessibility" title="Accessibility">
            <p className="text-white/65">
              Modals and sheets trap focus and restore it on close. Continuous
              animations respect{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                prefers-reduced-motion
              </code>
              . Form controls expose{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                aria-invalid
              </code>{" "}
              and alert roles for errors.
            </p>
          </Section>

          <Section id="best-practices" title="Best practices">
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/65">
              <li>Use section components for marketing pages; primitives for product UI.</li>
              <li>
                Prefer{" "}
                <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                  GradientButton asChild
                </code>{" "}
                with Link instead of nesting buttons in anchors.
              </li>
              <li>
                Pass{" "}
                <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">
                  compact
                </code>{" "}
                when embedding sections inside cards or previews.
              </li>
              <li>Wrap your app once in ToastProvider for notifications.</li>
            </ul>
          </Section>

          <Section id="license" title="License">
            <p className="text-white/65">
              Nebula UI is MIT licensed. Use it commercially, modify it, and ship it.
            </p>
            <div className="mt-8">
              <GradientButton asChild variant="aurora" size="lg">
                <Link href="/components">
                  Browse components
                  <ArrowRight className="size-4" />
                </Link>
              </GradientButton>
            </div>
          </Section>
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
    <section id={id} className="mt-14 scroll-mt-28">
      <h2 className="text-display text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}
