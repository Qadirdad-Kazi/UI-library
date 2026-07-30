"use client";

import { useState, type ReactNode, type FormEvent } from "react";
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
import { NeonTextarea } from "../components/neon-textarea";
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
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
  }) => void | Promise<void>;
  /** Controlled loading state for the submit button */
  loading?: boolean;
  submitLabel?: string;
  className?: string;
}

export function ContactForm({
  eyebrow = "Contact",
  title,
  description,
  details = [],
  onSubmit,
  loading: loadingProp,
  submitLabel = "Send message",
  compact: compactProp,
  className,
}: ContactFormProps) {
  const compact = useCompactMode(compactProp);
  const [internalLoading, setInternalLoading] = useState(false);
  const loading = loadingProp ?? internalLoading;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    if (loadingProp === undefined) setInternalLoading(true);
    try {
      await onSubmit?.(payload);
    } finally {
      if (loadingProp === undefined) setInternalLoading(false);
    }
  };

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        <div
          className={cn(
            "grid gap-12",
            compact
              ? "grid-cols-1"
              : "lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16"
          )}
        >
          <div>
            {eyebrow && <ShimmerBadge tone="teal">{eyebrow}</ShimmerBadge>}
            {title && (
              <h2
                className={cn(
                  "mt-4 text-balance text-white",
                  sectionHeading(compact)
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 max-w-md text-balance text-white/55",
                  sectionSubheading(compact)
                )}
              >
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
                    <dd className="mt-1.5 text-base text-white/85">{d.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className={cn(
              "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition duration-300 hover:border-white/[0.14]",
              compact ? "p-5" : "p-8"
            )}
          >
            <div
              aria-hidden
              className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-teal-400/55 to-transparent"
            />
            <div
              className={cn(
                "grid gap-5",
                compact ? "grid-cols-1" : "md:grid-cols-2"
              )}
            >
              <NeonInput
                label="Name"
                name="name"
                required
                placeholder="Ada Lovelace"
                accent="teal"
                disabled={loading}
              />
              <NeonInput
                label="Email"
                name="email"
                type="email"
                required
                placeholder="ada@nebula.dev"
                accent="cyan"
                disabled={loading}
              />
            </div>
            <div className="mt-5">
              <NeonTextarea
                id="contact-message"
                label="Message"
                name="message"
                required
                placeholder="What can we help with?"
                rows={compact ? 3 : 5}
                accent="teal"
                disabled={loading}
              />
            </div>
            <GradientButton
              type="submit"
              variant="aurora"
              size={compact ? "md" : "lg"}
              className="mt-6 w-full"
              loading={loading}
              disabled={loading}
            >
              {submitLabel}
            </GradientButton>
          </form>
        </div>
      </div>
    </section>
  );
}
