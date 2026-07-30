"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn, GradientButton, Sheet } from "@nebula/ui";
import { Github, Menu } from "lucide-react";

const NAV_LINKS = [
  { href: "/components", label: "Components" },
  { href: "/categories/primitives", label: "Categories" },
  { href: "/playground", label: "Playground" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/docs", label: "Docs" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-[rgba(6,6,13,0.82)] backdrop-blur-2xl"
          : "border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span
            aria-hidden
            className="relative grid size-8 place-items-center overflow-hidden rounded-lg"
          >
            <span className="absolute inset-0 bg-[conic-gradient(from_180deg,#2dd4bf,#7c6af5,#f472b6,#2dd4bf)] motion-safe:[animation:nebula-spin-slow_8s_linear_infinite]" />
            <span className="relative size-3 rounded-sm bg-[var(--color-bg)]" />
          </span>
          <span className="text-display text-lg font-semibold tracking-tight">
            Nebula
          </span>
          <span className="rounded-md border border-teal-400/20 bg-teal-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-teal-200/90">
            UI
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/75 transition hover:border-white/20 hover:bg-white/[0.06]"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>

          <GradientButton
            asChild
            variant="aurora"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/docs">Get started</Link>
          </GradientButton>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] md:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      <Sheet
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="right"
        title="Navigate"
        description="Browse the Nebula UI library"
      >
        <nav>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <GradientButton asChild variant="aurora" size="md" className="w-full">
              <Link href="/docs" onClick={() => setMobileOpen(false)}>
                Get started
              </Link>
            </GradientButton>
          </div>
        </nav>
      </Sheet>
    </header>
  );
}
