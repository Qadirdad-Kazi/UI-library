import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[var(--color-bg)]">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid size-8 place-items-center rounded-lg bg-[conic-gradient(from_0deg,#7c3aed,#22d3ee,#ec4899,#7c3aed)]"
              >
                <span className="size-3 rounded-sm bg-[var(--color-bg)]" />
              </span>
              <span className="text-display text-lg font-semibold">Nebula UI</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              A cinematic, AI-powered React component library. Built with care, shipped
              fast.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/#components" className="hover:text-white">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/categories/hero-section" className="hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white">
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Resources
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="https://github.com" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com" className="hover:text-white">
                  npm
                </a>
              </li>
              <li>
                <Link href="/docs#license" className="hover:text-white">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nebula UI. Crafted in TypeScript.</p>
          <p>MIT License · Built with Next.js, R3F, GSAP &amp; Lenis.</p>
        </div>
      </div>
    </footer>
  );
}
