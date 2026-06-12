"use client";

import { useState, useCallback, type ReactNode } from "react";
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

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryGridProps extends SectionDensityProps {
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

  return (
    <section className={cn(sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        {(title || description) && (
          <div className={cn("text-center", sectionBlockGap(compact))}>
            {title && (
              <h2 className={sectionHeading(compact)}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn("mt-4", sectionSubheading(compact))}>{description}</p>
            )}
          </div>
        )}

        {/* Masonry grid */}
        <div
          className={cn(
            "columns-1 gap-4",
            compact ? compactColClasses[columns] : colClasses[columns]
          )}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-xl border border-white/[0.06] break-inside-avoid transition hover:border-white/15",
                compact ? "mb-3" : "mb-4"
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {img.caption && (
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.caption}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/[0.08]"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-5">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/[0.08]"
            aria-label="Next image"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-5">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:text-white"
            aria-label="Close lightbox"
          >
            <svg viewBox="0 0 14 14" fill="none" className="size-4">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {images[lightbox].caption && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {images[lightbox].caption}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
