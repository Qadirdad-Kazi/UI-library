import Link from "next/link";
import { ShimmerBadge, GradientButton } from "@nebula/ui";
import { ArrowUpRight, ArrowRight, TrendingUp, Clock, Users, LineChart } from "lucide-react";

export const metadata = {
  title: "Case Studies · Nebula UI",
  description: "Real products built with Nebula UI components.",
};

type Study = {
  slug: string;
  company: string;
  industry: string;
  tagline: string;
  metric: { value: string; label: string };
  secondary: { value: string; label: string };
  accent: string;
  /** small abstract logomark id */
  logo: "lumen" | "orbital" | "seraph" | "nimbus";
  components: string[];
  /** sparkline data points (0–100) for the metric chart */
  chart: number[];
};

const STUDIES: Study[] = [
  {
    slug: "lumen-ai",
    company: "Lumen AI",
    industry: "AI Infrastructure",
    tagline:
      "Cut hero render time by 38% with the Nebula 3D Hero pattern, while doubling time-on-page.",
    metric: { value: "−38%", label: "Hero render time" },
    secondary: { value: "+112%", label: "Avg. time on page" },
    accent: "#a78bfa",
    logo: "lumen",
    components: ["HeroAurora", "FeaturesBento", "PricingTiers"],
    chart: [70, 62, 58, 50, 45, 42, 38, 35, 32, 30, 28, 25],
  },
  {
    slug: "orbital-pay",
    company: "Orbital Pay",
    industry: "Fintech",
    tagline:
      "Replaced 14 bespoke buttons with a single GradientButton variant API and shipped a rebrand in 4 days.",
    metric: { value: "−14", label: "Components" },
    secondary: { value: "4 days", label: "Rebrand shipped" },
    accent: "#22d3ee",
    logo: "orbital",
    components: ["GradientButton", "GlowCard", "FooterCosmic"],
    chart: [40, 45, 60, 55, 70, 75, 80, 78, 85, 88, 92, 95],
  },
  {
    slug: "seraph-studio",
    company: "Seraph Studio",
    industry: "Creative SaaS",
    tagline:
      "Onboarded their entire design team in two days using the Nebula component docs and live showcases. No Figma plugin required.",
    metric: { value: "2 days", label: "Team onboarded" },
    secondary: { value: "9.3 / 10", label: "Designer NPS" },
    accent: "#f472b6",
    logo: "seraph",
    components: ["AboutMission", "TestimonialMarquee", "ContactForm"],
    chart: [30, 35, 50, 65, 60, 75, 82, 80, 88, 85, 92, 96],
  },
  {
    slug: "nimbus-cloud",
    company: "Nimbus Cloud",
    industry: "Developer Tools",
    tagline:
      "Shipped a full marketing rebrand in a week — Hero, Features, Pricing, and Docs — using the Nebula starter.",
    metric: { value: "1 week", label: "Full rebrand" },
    secondary: { value: "+47%", label: "Sign-up conv." },
    accent: "#fbbf24",
    logo: "nimbus",
    components: ["HeroSplit", "FeaturesBento", "PricingTiers", "FooterCosmic"],
    chart: [20, 28, 35, 42, 48, 55, 60, 68, 72, 78, 84, 90],
  },
];

function Logomark({ id, accent }: { id: Study["logo"]; accent: string }) {
  const common = "size-full";
  if (id === "lumen") {
    return (
      <svg viewBox="0 0 32 32" className={common}>
        <defs>
          <linearGradient id="lg-l" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="10" fill="url(#lg-l)" opacity="0.4" />
        <circle cx="16" cy="16" r="5" fill="url(#lg-l)" />
      </svg>
    );
  }
  if (id === "orbital") {
    return (
      <svg viewBox="0 0 32 32" className={common}>
        <defs>
          <linearGradient id="lg-o" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <ellipse
          cx="16"
          cy="16"
          rx="11"
          ry="5"
          stroke="url(#lg-o)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="16" cy="16" r="3" fill="url(#lg-o)" />
      </svg>
    );
  }
  if (id === "seraph") {
    return (
      <svg viewBox="0 0 32 32" className={common}>
        <defs>
          <linearGradient id="lg-s" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path
          d="M6 22 L16 6 L26 22 Z"
          stroke="url(#lg-s)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill={accent}
          fillOpacity={0.2}
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={common}>
      <defs>
        <linearGradient id="lg-n" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="6"
        width="20"
        height="20"
        rx="6"
        fill="url(#lg-n)"
        opacity="0.25"
      />
      <rect
        x="10"
        y="10"
        width="12"
        height="12"
        rx="3"
        fill="url(#lg-n)"
      />
    </svg>
  );
}

function Sparkline({ data, accent }: { data: number[]; accent: string }) {
  const w = 120;
  const h = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="size-full"
    >
      <defs>
        <linearGradient id={`sp-${accent}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      <polygon
        fill={`url(#sp-${accent})`}
        points={`0,${h} ${points} ${w},${h}`}
      />
    </svg>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <ShimmerBadge tone="amber">Case studies</ShimmerBadge>
        <h1 className="text-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
          Built in the wild.
        </h1>
        <p className="mt-4 text-balance text-white/60 md:text-lg">
          Real teams, real products, real numbers — see how Nebula UI ships.
        </p>
      </div>

      {/* Top stats strip */}
      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Avg. ship time", value: "1 week", icon: Clock, accent: "#a78bfa" },
          { label: "Avg. lift", value: "+47%", icon: TrendingUp, accent: "#22d3ee" },
          { label: "Teams using", value: "240+", icon: Users, accent: "#f472b6" },
          { label: "Pages launched", value: "1.2k+", icon: LineChart, accent: "#fbbf24" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur"
          >
            <div className="flex items-center gap-2">
              <span
                className="grid size-7 place-items-center rounded-md border border-white/10"
                style={{ color: s.accent }}
              >
                <s.icon className="size-3.5" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                {s.label}
              </span>
            </div>
            <div
              className="mt-2 text-display text-3xl font-semibold tracking-tight"
              style={{ color: s.accent }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Studies */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {STUDIES.map((study) => (
          <article
            key={study.slug}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a14]/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20"
            style={{ ["--accent" as string]: study.accent }}
          >
            {/* Top gradient strip */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${study.accent}, transparent)`,
              }}
            />
            {/* Glow blob */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
              style={{
                background: `radial-gradient(circle, ${study.accent}88, transparent 70%)`,
              }}
            />

            <div className="relative grid gap-6 p-7 sm:grid-cols-[auto_1fr] sm:items-start">
              {/* Logomark */}
              <div
                className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] p-2"
              >
                <Logomark id={study.logo} accent={study.accent} />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {study.industry}
                  </span>
                  <ArrowUpRight className="size-4 text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <h2 className="text-display mt-1 text-3xl font-semibold leading-tight">
                  {study.company}
                </h2>
                <p className="mt-3 text-sm text-white/65">{study.tagline}</p>
              </div>
            </div>

            {/* Metric strip with sparkline */}
            <div className="relative mx-7 grid grid-cols-[1.2fr_1fr_1fr] gap-4 rounded-2xl border border-white/[0.06] bg-black/30 p-4">
              <div className="flex items-center">
                <div className="h-10 flex-1">
                  <Sparkline data={study.chart} accent={study.accent} />
                </div>
              </div>
              <div className="border-l border-white/[0.06] pl-4">
                <div
                  className="text-display text-2xl font-semibold tracking-tight"
                  style={{ color: study.accent }}
                >
                  {study.metric.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {study.metric.label}
                </div>
              </div>
              <div className="border-l border-white/[0.06] pl-4">
                <div className="text-display text-2xl font-semibold tracking-tight text-white">
                  {study.secondary.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {study.secondary.label}
                </div>
              </div>
            </div>

            {/* Components used */}
            <div className="relative px-7 pb-7 pt-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Built with
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {study.components.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 grid gap-8 rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.18),transparent_55%)] p-10 md:grid-cols-[1fr_auto] md:items-center md:p-16">
        <div>
          <h2 className="text-display text-balance text-3xl font-semibold md:text-4xl">
            Want to be featured?
          </h2>
          <p className="mt-3 text-white/70">
            Send us a link to your build — we showcase the most interesting ones every
            month.
          </p>
        </div>
        <Link href="/docs">
          <GradientButton variant="aurora" size="lg">
            Get started
            <ArrowRight className="size-4" />
          </GradientButton>
        </Link>
      </div>
    </div>
  );
}
