"use client";

import { type ComponentCategory } from "@/lib/components-registry";

/**
 * Stylized abstract preview for each category card.
 * Designed to look like a tiny screenshot of the actual section type.
 */
export function CategoryThumbnail({
  id,
  accent,
}: {
  id: ComponentCategory;
  accent: string;
}) {
  const common =
    "absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105";
  const bg =
    "absolute inset-0 [background:radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--accent)_30%,transparent),transparent_55%),radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%)]";

  return (
    <div
      className="relative h-32 overflow-hidden rounded-xl border border-white/10 bg-[#08080d]"
      style={{ ["--accent" as string]: accent }}
    >
      <div className={bg} />
      {/* grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:14px_14px]"
      />

      {id === "hero-section" && (
        <div className={common}>
          <div className="absolute inset-x-3 top-3 h-1.5 w-12 rounded-full bg-white/40" />
          <div className="absolute inset-x-3 top-7 h-2 w-16 rounded-full bg-white" />
          <div className="absolute inset-x-3 top-10 h-2 w-20 rounded-full bg-gradient-to-r from-white via-white to-white/50" />
          <div className="absolute inset-x-3 top-14 h-1 w-24 rounded-full bg-white/30" />
          <div
            className="absolute bottom-3 left-3 h-3.5 w-12 rounded-full"
            style={{ background: accent }}
          />
          <div className="absolute bottom-3 left-[60px] h-3.5 w-10 rounded-full border border-white/30" />
        </div>
      )}

      {id === "features" && (
        <div className={common}>
          <div className="absolute inset-3 grid grid-cols-3 grid-rows-2 gap-1.5">
            <div
              className="col-span-2 row-span-1 rounded-md border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${accent}33, transparent)`,
              }}
            />
            <div className="rounded-md border border-white/10 bg-white/[0.05]" />
            <div className="rounded-md border border-white/10 bg-white/[0.05]" />
            <div
              className="col-span-2 rounded-md border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${accent}22, transparent)`,
              }}
            />
          </div>
        </div>
      )}

      {id === "about-us" && (
        <div className={common}>
          <div className="absolute inset-x-6 top-4 h-2 rounded-full bg-white/70" />
          <div className="absolute inset-x-10 top-8 h-2 rounded-full bg-gradient-to-r from-white/90 to-white/40" />
          <div className="absolute inset-x-6 top-12 h-1.5 rounded-full bg-white/30" />
          <div className="absolute inset-x-6 bottom-3 grid grid-cols-3 gap-1.5">
            <div className="h-3 rounded border border-white/10 bg-white/[0.05]" />
            <div className="h-3 rounded border border-white/10 bg-white/[0.05]" />
            <div className="h-3 rounded border border-white/10 bg-white/[0.05]" />
          </div>
        </div>
      )}

      {id === "testimonials" && (
        <div className={common}>
          <div className="absolute inset-x-3 top-4 flex gap-2 [animation:nebula-thumb-marquee_8s_linear_infinite]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-20 shrink-0 rounded-md border border-white/10 bg-white/[0.04] p-1"
              >
                <div className="h-1 w-12 rounded-full bg-white/40" />
                <div className="mt-1 h-1 w-10 rounded-full bg-white/30" />
                <div className="mt-1 flex items-center gap-1">
                  <div
                    className="size-2 rounded-full"
                    style={{ background: accent }}
                  />
                  <div className="h-0.5 w-6 rounded-full bg-white/40" />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-3 bottom-4 flex gap-2 [animation:nebula-thumb-marquee-rev_10s_linear_infinite]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-20 shrink-0 rounded-md border border-white/10 bg-white/[0.04] p-1"
              >
                <div className="h-1 w-10 rounded-full bg-white/40" />
                <div className="mt-1 h-1 w-12 rounded-full bg-white/30" />
                <div className="mt-1 flex items-center gap-1">
                  <div
                    className="size-2 rounded-full"
                    style={{ background: accent }}
                  />
                  <div className="h-0.5 w-6 rounded-full bg-white/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {id === "pricing" && (
        <div className={common}>
          <div className="absolute inset-3 grid grid-cols-3 gap-1.5">
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
              <div className="h-1 w-6 rounded-full bg-white/40" />
              <div className="mt-1 h-2 w-8 rounded-full bg-white/70" />
            </div>
            <div
              className="rounded-md border p-1.5"
              style={{
                borderColor: `${accent}66`,
                background: `linear-gradient(180deg, ${accent}22, transparent)`,
                boxShadow: `0 0 20px -5px ${accent}66`,
              }}
            >
              <div
                className="h-1 w-6 rounded-full"
                style={{ background: accent }}
              />
              <div className="mt-1 h-2 w-8 rounded-full bg-white" />
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
              <div className="h-1 w-6 rounded-full bg-white/40" />
              <div className="mt-1 h-2 w-8 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      )}

      {id === "contact" && (
        <div className={common}>
          <div className="absolute inset-3 grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <div className="h-1.5 w-12 rounded-full bg-white/50" />
              <div className="h-1 w-16 rounded-full bg-white/30" />
              <div className="h-1 w-14 rounded-full bg-white/20" />
            </div>
            <div className="space-y-1.5 rounded-md border border-white/10 bg-white/[0.04] p-1.5">
              <div className="h-2.5 rounded border border-white/10 bg-white/[0.06]" />
              <div className="h-2.5 rounded border border-white/10 bg-white/[0.06]" />
              <div
                className="h-3 rounded-full"
                style={{
                  background: `linear-gradient(110deg, ${accent}, #22d3ee)`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {id === "footer" && (
        <div className={common}>
          <div
            className="absolute inset-x-3 top-3 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
          />
          <div className="absolute inset-3 top-5 grid grid-cols-4 gap-1.5">
            <div className="space-y-1">
              <div
                className="h-1.5 w-6 rounded-full"
                style={{ background: accent }}
              />
              <div className="h-1 w-8 rounded-full bg-white/30" />
              <div className="h-1 w-7 rounded-full bg-white/30" />
            </div>
            <div className="space-y-1">
              <div className="h-1 w-6 rounded-full bg-white/50" />
              <div className="h-1 w-7 rounded-full bg-white/25" />
              <div className="h-1 w-5 rounded-full bg-white/25" />
            </div>
            <div className="space-y-1">
              <div className="h-1 w-6 rounded-full bg-white/50" />
              <div className="h-1 w-8 rounded-full bg-white/25" />
              <div className="h-1 w-6 rounded-full bg-white/25" />
            </div>
            <div className="space-y-1">
              <div className="h-1 w-6 rounded-full bg-white/50" />
              <div className="h-1 w-7 rounded-full bg-white/25" />
              <div className="h-1 w-5 rounded-full bg-white/25" />
            </div>
          </div>
        </div>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.5))]" />

      <style>{`
        @keyframes nebula-thumb-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-30%); }
        }
        @keyframes nebula-thumb-marquee-rev {
          from { transform: translateX(-30%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
