"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface MatrixRainProps extends HTMLAttributes<HTMLCanvasElement> {
  color?: string;
  speed?: number;
  charset?: string;
  fontSize?: number;
}

const DEFAULT_CHARSET =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";

export function MatrixRain({
  color = "#22d3ee",
  speed = 1,
  charset = DEFAULT_CHARSET,
  fontSize = 14,
  className,
  ...props
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      const numCols = Math.floor(canvas.width / fontSize);
      columns = Array.from({ length: numCols }, () =>
        Math.random() * canvas.height
      );
    };

    const hexToRgb = (hex: string) => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return r
        ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) }
        : { r: 34, g: 211, b: 238 };
    };

    const rgb = hexToRgb(color);
    let lastTime = 0;
    const interval = 50 / speed;

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);

      if (time - lastTime < interval) return;
      lastTime = time;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = charset[Math.floor(Math.random() * charset.length)];
        const y = columns[i];

        // Bright head
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.9)`;
        ctx.fillText(char, i * fontSize, y);

        // Trail dim
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`;
        ctx.fillText(
          charset[Math.floor(Math.random() * charset.length)],
          i * fontSize,
          y - fontSize
        );

        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }

        columns[i] += fontSize;
      }
    };

    resize();
    animationId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [color, speed, charset, fontSize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
      {...props}
    />
  );
}
