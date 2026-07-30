"use client";

import { useEffect, useState } from "react";

/** True when the user prefers reduced motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

/** IntersectionObserver-based entrance visibility. */
export function useInView(
  ref: React.RefObject<Element | null>,
  options?: IntersectionObserverInit & { once?: boolean }
): boolean {
  const [inView, setInView] = useState(false);
  const once = options?.once ?? true;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -40px 0px",
        root: options?.root ?? null,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once, options?.threshold, options?.rootMargin, options?.root]);

  return inView;
}
