"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface NumberTickerProps extends HTMLAttributes<HTMLSpanElement> {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = "up",
  duration = 2000,
  delay = 0,
  decimalPlaces = 0,
  className,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(direction === "up" ? 0 : value);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const startValue = direction === "up" ? 0 : value;
      const endValue = direction === "up" ? value : 0;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out exponential
        const eased = 1 - Math.pow(2, -10 * progress);

        const current = startValue + (endValue - startValue) * eased;
        setDisplay(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplay(endValue);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, value, direction, duration, delay]);

  return (
    <span
      ref={ref}
      className={cn("tabular-nums tracking-tight", className)}
      {...props}
    >
      {decimalPlaces > 0
        ? display.toFixed(decimalPlaces)
        : Math.round(display).toLocaleString()}
    </span>
  );
}
