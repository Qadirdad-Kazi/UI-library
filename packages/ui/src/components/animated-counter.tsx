"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface AnimatedCounterProps extends HTMLAttributes<HTMLSpanElement> {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** If true, starts animation when element scrolls into view */
  triggerOnScroll?: boolean;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  triggerOnScroll = true,
  className,
  ...props
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggerOnScroll) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, triggerOnScroll, hasAnimated]);

  function animate() {
    const startTime = performance.now();
    const startValue = 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (value - startValue) * eased;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref} className={cn("tabular-nums", className)} {...props}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
