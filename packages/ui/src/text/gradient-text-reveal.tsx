"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface GradientTextRevealProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  gradient?: string;
  duration?: number;
  delay?: number;
}

export function GradientTextReveal({
  children,
  gradient = "linear-gradient(110deg, #a78bfa, #22d3ee, #f472b6)",
  duration = 1200,
  delay = 0,
  className,
  ...props
}: GradientTextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <span
      ref={ref}
      className={cn("relative inline", className)}
      {...props}
    >
      {/* Regular text (hidden when revealed) */}
      <span
        className={cn(
          "transition-opacity",
          revealed ? "opacity-0" : "opacity-100"
        )}
        style={{ transitionDuration: `${duration / 2}ms` }}
      >
        {children}
      </span>

      {/* Gradient text (revealed) */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 bg-clip-text text-transparent transition-opacity",
          revealed ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: gradient,
          transitionDuration: `${duration}ms`,
          transitionDelay: `${duration / 4}ms`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
