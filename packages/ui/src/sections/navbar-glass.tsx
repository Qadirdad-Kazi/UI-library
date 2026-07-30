"use client";

import { useState, useEffect, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { GradientButton } from "../components/gradient-button";

export interface NavbarGlassLink {
  label: string;
  href: string;
}

export interface NavbarGlassProps {
  logo?: ReactNode;
  links?: NavbarGlassLink[];
  cta?: { label: string; href?: string; onClick?: () => void };
  /** When true, renders inline instead of fixed positioning */
  embedded?: boolean;
  className?: string;
}

export function NavbarGlass({
  logo = "Nebula",
  links = [],
  cta,
  embedded = false,
  className,
}: NavbarGlassProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (embedded) return;
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [embedded]);

  return (
    <header
      className={cn(
        embedded ? "relative w-full" : "fixed inset-x-0 top-0 z-[100]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        !embedded &&
          (scrolled
            ? "border-b border-white/10 bg-[#06060d]/80 backdrop-blur-xl"
            : "bg-transparent"),
        embedded &&
          "border-b border-white/10 bg-[#06060d]/80 backdrop-blur-xl",
        className
      )}
    >
      {(scrolled || embedded) && (
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/35 to-transparent"
        />
      )}

      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="relative z-10 text-lg font-semibold tracking-tight transition hover:opacity-90"
        >
          {typeof logo === "string" ? (
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {logo}
            </span>
          ) : (
            logo
          )}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-white/55 transition duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {cta && (
            <GradientButton
              asChild={Boolean(cta.href)}
              variant="aurora"
              size="sm"
              onClick={cta.href ? undefined : cta.onClick}
            >
              {cta.href ? (
                <a href={cta.href} onClick={cta.onClick}>
                  {cta.label}
                </a>
              ) : (
                cta.label
              )}
            </GradientButton>
          )}
        </div>

        <button
          type="button"
          className="relative z-10 grid size-10 place-items-center rounded-lg text-white/70 transition hover:bg-white/[0.06] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="navbar-glass-mobile"
        >
          <div className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none",
                mobileOpen && "translate-y-[4px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-opacity duration-200 motion-reduce:transition-none",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none",
                mobileOpen && "-translate-y-[4px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="navbar-glass-mobile"
          className="border-t border-white/10 bg-[#06060d]/95 backdrop-blur-xl md:hidden motion-safe:animate-[nebula-fade-in_200ms_ease-out]"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-4">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {cta && (
              <div className="mt-4">
                <GradientButton
                  asChild={Boolean(cta.href)}
                  variant="aurora"
                  size="md"
                  className="w-full"
                  onClick={
                    cta.href
                      ? undefined
                      : () => {
                          setMobileOpen(false);
                          cta.onClick?.();
                        }
                  }
                >
                  {cta.href ? (
                    <a
                      href={cta.href}
                      onClick={() => {
                        setMobileOpen(false);
                        cta.onClick?.();
                      }}
                    >
                      {cta.label}
                    </a>
                  ) : (
                    cta.label
                  )}
                </GradientButton>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
