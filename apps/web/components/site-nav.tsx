"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@nebula/ui";
import { Github, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#components", label: "Components" },
  { href: "/categories/hero-section", label: "Categories" },
  { href: "/playground", label: "Playground" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/docs", label: "Docs" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-[rgba(5,5,10,0.85)] backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg bg-[conic-gradient(from_0deg,#7c3aed,#22d3ee,#ec4899,#7c3aed)] [animation:gradient-shift_6s_ease_infinite]"
          >
            <span className="size-3 rounded-sm bg-[var(--color-bg)]" />
          </span>
          <span className="text-display text-lg font-semibold tracking-tight">
            Nebula
          </span>
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/60">
            UI
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.05] hover:text-white"
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
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu overlay */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-[rgba(5,5,10,0.95)] px-6 py-4 backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
