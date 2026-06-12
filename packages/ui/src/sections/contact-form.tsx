"use client";

import { type ReactNode, type FormEvent } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { GradientButton } from "../components/gradient-button";
import { NeonInput } from "../components/neon-input";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface ContactFormItem {
  label: string;
  value: string;
}

export interface ContactFormProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  details?: ContactFormItem[];
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  className?: string;
}

export function ContactForm({
  eyebrow = "Contact",
  title,
  description,
  details = [],
  onSubmit,
  compact: compactProp,
  className,
}: ContactFormProps) {
  const compact = useCompactMode(compactProp);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit?.({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
  };

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        <div
          className={cn(
            "grid gap-12",
            compact ? "grid-cols-1" : "lg:grid-cols-[1fr_1.2fr] lg:items-start"
          )}
        >
          <div>
            {eyebrow && <ShimmerBadge tone="cyan">{eyebrow}</ShimmerBadge>}
            {title && (
              <h2 className={cn("mt-4 text-balance", sectionHeading(compact))}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn("mt-4 max-w-md text-balance", sectionSubheading(compact))}>
                {description}
              </p>
            )}
            {!compact && details.length > 0 && (
              <dl className="mt-10 space-y-5">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-base text-white/85">{d.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className={cn(
              "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl",
              compact ? "p-5" : "p-8"
            )}
          >
            <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            <div className={cn("grid gap-5", compact ? "grid-cols-1" : "md:grid-cols-2")}>
              <NeonInput
                label="Name"
                name="name"
                required
                placeholder="Ada Lovelace"
                accent="violet"
              />
              <NeonInput
                label="Email"
                name="email"
                type="email"
                required
                placeholder="ada@nebula.dev"
                accent="cyan"
              />
            </div>
            <div className="mt-5 flex w-full flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium uppercase tracking-[0.18em] text-white/60"
              >
                Message
              </label>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 focus-within:border-pink-400/60 focus-within:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)]">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="What can we help with?"
                  rows={compact ? 3 : 5}
                  className="w-full resize-none bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-white/30"
                />
              </div>
            </div>
            <GradientButton
              type="submit"
              variant="aurora"
              size={compact ? "md" : "lg"}
              className="mt-6 w-full"
            >
              Send message
            </GradientButton>
          </form>
        </div>
      </div>
    </section>
  );
}
