"use client";

import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export interface SparklesTextProps {
  text: string;
  className?: string;
  sparklesCount?: number;
  color?: string;
}

interface Sparkle {
  id: string;
  size: number;
  top: string;
  left: string;
  delay: string;
}

const generateSparkles = (count: number): Sparkle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `sparkle-${i}-${Math.random()}`,
    size: Math.random() * 10 + 10, // 10px to 20px
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
    delay: `${Math.random() * 1.5}s`,
  }));
};

export function SparklesText({
  text,
  className,
  sparklesCount = 6,
  color = "#fbbf24", // Default to Tailwind amber-400
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    setSparkles(generateSparkles(sparklesCount));
    const interval = setInterval(() => {
      setSparkles(generateSparkles(sparklesCount));
    }, 2500); // Shift positions periodically for continuous dynamic effect
    return () => clearInterval(interval);
  }, [sparklesCount]);

  return (
    <>
      <style>{`
        @keyframes sparkle-glow-spin {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
      <span className={cn("relative inline-block font-bold", className)}>
        {/* Sparkles list overlay */}
        {sparkles.map((sparkle) => (
          <svg
            key={sparkle.id}
            className="absolute pointer-events-none z-0"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              fill: color,
              animation: `sparkle-glow-spin 2s ease-in-out infinite`,
              animationDelay: sparkle.delay,
            }}
            viewBox="0 0 24 24"
          >
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
        ))}
        {/* Actual text layer */}
        <span className="relative z-10">{text}</span>
      </span>
    </>
  );
}
