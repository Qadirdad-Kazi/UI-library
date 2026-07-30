"use client";

import { useState, useCallback, useEffect, type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionBlockGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryGridProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const colClasses = {
  2: "sm:columns-2",
  3: "sm:columns-2 lg:columns-3",
  4: "sm:columns-2 lg:columns-4",
} as const;

const compactColClasses = {
  2: "columns-2",
  3: "columns-2",
  4: "columns-2",
} as const;

export function GalleryGrid({
  eyebrow,
  title,
  description,
  images,
  columns = 3,
  compact: compactProp,
  className,
}: GalleryGridProps) {
  const compact = useCompactMode(compactProp);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setLightbox((prev) => {
        if (prev === null) return null;
        const next = prev + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox, closeLightbox, navigate]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[320px] max-w-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,106,245,0.08) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact)}>
        {(eyebrow || title || description) && (
          <div className={cn("mx-auto max-w-2xl text-center", sectionBlockGap(compact))}>
            {eyebrow && <ShimmerBadge tone="violet">{eyebrow}</ShimmerBadge>}
            {title && (
              <h2
                className={cn(
                  "text-balance text-white",
                  eyebrow ? "mt-4" : "",
                  sectionHeading(compact)
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-balance text-white/55",
                  sectionSubheading(compact)
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}

        <div
          className={cn(
            "columns-1 gap-4",
            compact ? compactColClasses[columns] : colClasses[columns]
          )}
        >
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openLightbox(i)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-xl border border-white/10 break-inside-avoid transition-colors duration-300 hover:border-white/20",
                compact ? "mb-3" : "mb-4"
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {img.caption && (
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0">
                  {img.caption}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md motion-safe:animate-[nebula-fade-in_200ms_ease-out]"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-5">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label="Next image"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-5">
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-colors hover:text-white"
            aria-label="Close lightbox"
          >
            <svg viewBox="0 0 14 14" fill="none" className="size-4">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {images[lightbox].caption && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/55">
              {images[lightbox].caption}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
