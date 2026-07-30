"use client";

import { forwardRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../utils/motion";

export type GlowAvatarSize = "sm" | "md" | "lg" | "xl";

export interface GlowAvatarProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "size"> {
  size?: GlowAvatarSize;
  glowColor?: string;
  fallback?: string;
  animated?: boolean;
  /** When true, glow rings stay inside the avatar bounds */
  clipGlow?: boolean;
}

const sizeMap: Record<GlowAvatarSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-14",
  xl: "size-20",
};

const textSizeMap: Record<GlowAvatarSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-lg",
  xl: "text-2xl",
};

export const GlowAvatar = forwardRef<HTMLDivElement, GlowAvatarProps>(
  (
    {
      src,
      alt = "",
      size = "md",
      glowColor = "#7c6af5",
      fallback,
      animated = true,
      clipGlow = false,
      className,
      ...props
    },
    ref
  ) => {
    const [imgError, setImgError] = useState(false);
    const reduced = usePrefersReducedMotion();
    const shouldAnimate = animated && !reduced;
    const initials =
      fallback ??
      alt
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center rounded-full",
          sizeMap[size],
          className
        )}
      >
        <div
          aria-hidden
          className={cn(
            "absolute rounded-full opacity-50 blur-[6px] transition-opacity duration-500",
            clipGlow ? "inset-0" : "inset-[-3px]",
            shouldAnimate &&
              "motion-safe:[animation:nebula-pulse-soft_4s_ease-in-out_infinite]"
          )}
          style={{ background: glowColor }}
        />
        <div
          aria-hidden
          className={cn(
            "absolute rounded-full",
            clipGlow ? "inset-0" : "inset-[-1px]"
          )}
          style={{
            background: `linear-gradient(135deg, ${glowColor}, transparent 60%)`,
          }}
        />

        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0c0c16]",
            sizeMap[size]
          )}
        >
          {src && !imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="size-full object-cover"
              {...props}
            />
          ) : (
            <span
              className={cn(
                "font-semibold text-white/80",
                textSizeMap[size]
              )}
            >
              {initials}
            </span>
          )}
        </div>
      </div>
    );
  }
);

GlowAvatar.displayName = "GlowAvatar";
