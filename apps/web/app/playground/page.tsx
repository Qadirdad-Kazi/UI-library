"use client";

import { useState } from "react";
import {
  GradientButton,
  GlowCard,
  NeonInput,
  ShimmerBadge,
  GlassModal,
  NeonTextarea,
  GlowToggle,
  NeonSelect,
  GlowAvatar,
  AnimatedCounter,
  GradientDivider,
  SkeletonLoader,
  GlowTooltip,
  ShimmerLink,
  GlowProgress,
  ToastProvider,
  useToast,
  TypewriterText,
  WordRotator,
  TextScramble,
  NumberTicker,
  BorderBeam,
  RainbowButton,
  SparklesText,
} from "@nebula/ui";
import { cn } from "@nebula/ui";
import {
  Box,
  Type,
  Layers,
  ChevronRight,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Component groups                                                    */
/* ------------------------------------------------------------------ */
const GROUPS = [
  {
    label: "Buttons & Badges",
    icon: Sparkles,
    items: ["GradientButton", "RainbowButton", "ShimmerBadge", "ShimmerLink"] as const,
  },
  {
    label: "Cards & Layout",
    icon: Layers,
    items: ["GlowCard", "GlassModal", "GradientDivider"] as const,
  },
  {
    label: "Inputs & Forms",
    icon: Box,
    items: ["NeonInput", "NeonTextarea", "NeonSelect", "GlowToggle", "GlowProgress", "Toast"] as const,
  },
  {
    label: "Data & Feedback",
    icon: Box,
    items: ["GlowAvatar", "AnimatedCounter", "NumberTicker", "SkeletonLoader", "GlowTooltip"] as const,
  },
  {
    label: "Text Animations",
    icon: Type,
    items: ["TypewriterText", "WordRotator", "TextScramble", "SparklesText"] as const,
  },
] as const;

type ComponentName = (typeof GROUPS)[number]["items"][number];

/* ------------------------------------------------------------------ */
/*  Copy-to-clipboard snippet map                                       */
/* ------------------------------------------------------------------ */
const SNIPPETS: Record<string, string> = {
  GradientButton: `import { GradientButton } from "@nebula/ui";

<GradientButton variant="aurora">Aurora</GradientButton>
<GradientButton variant="sunset">Sunset</GradientButton>`,
  RainbowButton: `import { RainbowButton } from "@nebula/ui";

<RainbowButton>Rainbow Button</RainbowButton>`,
  ShimmerBadge: `import { ShimmerBadge } from "@nebula/ui";

<ShimmerBadge tone="violet">Violet</ShimmerBadge>`,
  ShimmerLink: `import { ShimmerLink } from "@nebula/ui";

<ShimmerLink href="#">Shimmer link</ShimmerLink>`,
  GlowCard: `import { GlowCard } from "@nebula/ui";

<GlowCard glowColor="#7c3aed">
  <h3>Card title</h3>
</GlowCard>`,
  GlassModal: `import { GlassModal } from "@nebula/ui";

const [open, setOpen] = useState(false);
<GlassModal open={open} onClose={() => setOpen(false)} title="Title">
  Modal content here
</GlassModal>`,
  GradientDivider: `import { GradientDivider } from "@nebula/ui";

<GradientDivider variant="aurora" />`,
  NeonInput: `import { NeonInput } from "@nebula/ui";

<NeonInput label="Email" placeholder="you@example.com" accent="violet" />`,
  NeonTextarea: `import { NeonTextarea } from "@nebula/ui";

<NeonTextarea label="Message" placeholder="Type here..." accent="violet" />`,
  NeonSelect: `import { NeonSelect } from "@nebula/ui";

<NeonSelect label="Plan" value={value} onChange={setValue}
  options={[{ value: "free", label: "Free" }, { value: "pro", label: "Pro" }]}
/>`,
  GlowToggle: `import { GlowToggle } from "@nebula/ui";

<GlowToggle checked={on} onChange={setOn} label="Enable dark mode" accent="violet" />`,
  GlowProgress: `import { GlowProgress } from "@nebula/ui";

<GlowProgress value={75} variant="aurora" showLabel />`,
  Toast: `import { ToastProvider, useToast } from "@nebula/ui";

const { toast } = useToast();
toast({ type: "success", title: "Done!", message: "Changes saved." });`,
  GlowAvatar: `import { GlowAvatar } from "@nebula/ui";

<GlowAvatar alt="Jane Doe" size="md" glowColor="#7c3aed" />`,
  AnimatedCounter: `import { AnimatedCounter } from "@nebula/ui";

<AnimatedCounter value={1247} suffix="+" />`,
  NumberTicker: `import { NumberTicker } from "@nebula/ui";

<NumberTicker value={42069} className="text-4xl font-bold" />`,
  SkeletonLoader: `import { SkeletonLoader } from "@nebula/ui";

<SkeletonLoader variant="rectangular" height={120} />`,
  GlowTooltip: `import { GlowTooltip } from "@nebula/ui";

<GlowTooltip content="Tooltip text" side="top" accent="violet">
  <span>Hover me</span>
</GlowTooltip>`,
  TypewriterText: `import { TypewriterText } from "@nebula/ui";

<TypewriterText text={["beautiful UIs", "faster products"]} speed={60} />`,
  WordRotator: `import { WordRotator } from "@nebula/ui";

<WordRotator words={["design", "code", "magic"]} interval={2000} />`,
  TextScramble: `import { TextScramble } from "@nebula/ui";

<TextScramble text="NEBULA UI" trigger="hover" />`,
  SparklesText: `import { SparklesText } from "@nebula/ui";

<SparklesText text="Sparkles!" sparklesCount={8} />`,
};

/* ------------------------------------------------------------------ */
/*  Toast sub-component (needs hook inside ToastProvider)              */
/* ------------------------------------------------------------------ */
function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <GradientButton
        variant="aurora"
        size="sm"
        onClick={() => toast({ type: "success", title: "Success!", message: "Your changes have been saved." })}
      >
        Success
      </GradientButton>
      <GradientButton
        variant="sunset"
        size="sm"
        onClick={() => toast({ type: "error", title: "Error", message: "Something went wrong." })}
      >
        Error
      </GradientButton>
      <GradientButton
        variant="ocean"
        size="sm"
        onClick={() => toast({ type: "warning", message: "Trial expires in 3 days." })}
      >
        Warning
      </GradientButton>
      <GradientButton
        variant="void"
        size="sm"
        onClick={() => toast({ type: "info", message: "New update available!" })}
      >
        Info
      </GradientButton>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Preview renderer                                                    */
/* ------------------------------------------------------------------ */
function Preview({
  selected,
  modalOpen,
  setModalOpen,
  toggleChecked,
  setToggleChecked,
  selectValue,
  setSelectValue,
  progressValue,
  setProgressValue,
}: {
  selected: string;
  modalOpen: boolean;
  setModalOpen: (v: boolean) => void;
  toggleChecked: boolean;
  setToggleChecked: (v: boolean) => void;
  selectValue: string;
  setSelectValue: (v: string) => void;
  progressValue: number;
  setProgressValue: (v: number) => void;
}) {
  return (
    <div className="flex min-h-[260px] items-center justify-center p-8">
      {selected === "GradientButton" && (
        <div className="flex flex-wrap justify-center gap-4">
          <GradientButton variant="aurora">Aurora</GradientButton>
          <GradientButton variant="sunset">Sunset</GradientButton>
          <GradientButton variant="ocean">Ocean</GradientButton>
          <GradientButton variant="void">Void</GradientButton>
        </div>
      )}
      {selected === "RainbowButton" && (
        <div className="flex flex-wrap justify-center gap-4">
          <RainbowButton>Rainbow Button</RainbowButton>
          <RainbowButton>Get Started</RainbowButton>
        </div>
      )}
      {selected === "ShimmerBadge" && (
        <div className="flex flex-wrap justify-center gap-4">
          <ShimmerBadge tone="violet">Violet Badge</ShimmerBadge>
          <ShimmerBadge tone="cyan">Cyan Badge</ShimmerBadge>
          <ShimmerBadge tone="amber">Amber Badge</ShimmerBadge>
        </div>
      )}
      {selected === "ShimmerLink" && (
        <div className="flex flex-wrap justify-center gap-8">
          <ShimmerLink href="#" accent="violet">Violet link</ShimmerLink>
          <ShimmerLink href="#" accent="cyan">Cyan link</ShimmerLink>
          <ShimmerLink href="#" accent="pink" external>External link</ShimmerLink>
        </div>
      )}
      {selected === "GlowCard" && (
        <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
          <GlowCard glowColor="#7c3aed">
            <h3 className="text-lg font-semibold">Violet Glow</h3>
            <p className="mt-1 text-sm text-white/60">Hover to see the tracking glow.</p>
          </GlowCard>
          <GlowCard glowColor="#22d3ee" intensity="high">
            <h3 className="text-lg font-semibold">Cyan Glow</h3>
            <p className="mt-1 text-sm text-white/60">High intensity mode.</p>
          </GlowCard>
        </div>
      )}
      {selected === "GlassModal" && (
        <div className="flex flex-col items-center gap-4">
          <GradientButton onClick={() => setModalOpen(true)}>Open Modal</GradientButton>
          <p className="text-xs text-white/40">Click to open the glassmorphism modal</p>
          <GlassModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Welcome to Nebula"
            description="A glassmorphism modal with focus trap and keyboard handling."
          >
            <div className="space-y-4">
              <NeonInput label="Your name" placeholder="Enter your name" />
              <div className="flex justify-end gap-3">
                <button onClick={() => setModalOpen(false)} className="rounded-lg px-4 py-2 text-sm text-white/60 hover:text-white">
                  Cancel
                </button>
                <GradientButton size="sm" onClick={() => setModalOpen(false)}>Confirm</GradientButton>
              </div>
            </div>
          </GlassModal>
        </div>
      )}
      {selected === "GradientDivider" && (
        <div className="w-full max-w-md space-y-1">
          {(["aurora", "sunset", "ocean", "subtle"] as const).map((v) => (
            <div key={v}>
              <div className="flex items-center justify-between px-1 pb-1.5 pt-4">
                <span className="text-[11px] uppercase tracking-[0.15em] text-white/35">{v}</span>
              </div>
              <GradientDivider variant={v} spacing="none" />
            </div>
          ))}
        </div>
      )}
      {selected === "NeonInput" && (
        <div className="w-full max-w-sm space-y-4">
          <NeonInput label="Email" placeholder="you@nebula.dev" accent="violet" />
          <NeonInput label="Password" type="password" placeholder="••••••••" accent="cyan" />
          <NeonInput label="With Error" placeholder="bad input" accent="pink" error="This field is required" />
        </div>
      )}
      {selected === "NeonTextarea" && (
        <div className="w-full max-w-sm space-y-4">
          <NeonTextarea label="Message" placeholder="Type your message here..." accent="violet" rows={3} />
          <NeonTextarea label="Notes" placeholder="Focus to see the neon glow..." accent="cyan" rows={2} />
        </div>
      )}
      {selected === "NeonSelect" && (
        <div className="w-full max-w-sm">
          <NeonSelect
            label="Choose a plan"
            placeholder="Select plan..."
            value={selectValue}
            onChange={setSelectValue}
            accent="violet"
            options={[
              { value: "free", label: "Free" },
              { value: "pro", label: "Pro — $19/mo" },
              { value: "team", label: "Team — $49/mo" },
              { value: "enterprise", label: "Enterprise", disabled: true },
            ]}
          />
        </div>
      )}
      {selected === "GlowToggle" && (
        <div className="flex flex-col gap-6">
          <GlowToggle checked={toggleChecked} onChange={setToggleChecked} label="Enable dark mode" accent="violet" />
          <GlowToggle checked={!toggleChecked} onChange={(v) => setToggleChecked(!v)} label="Send notifications" accent="cyan" size="lg" />
          <GlowToggle checked={false} label="Disabled toggle" accent="pink" disabled />
        </div>
      )}
      {selected === "GlowProgress" && (
        <div className="w-full max-w-md space-y-6">
          <GlowProgress value={progressValue} variant="aurora" showLabel />
          <GlowProgress value={80} variant="sunset" size="lg" />
          <GlowProgress value={45} variant="ocean" size="sm" />
          <input
            type="range" min={0} max={100} value={progressValue}
            onChange={(e) => setProgressValue(Number(e.target.value))}
            className="w-full accent-violet-500"
          />
        </div>
      )}
      {selected === "Toast" && <ToastDemo />}
      {selected === "GlowAvatar" && (
        <div className="flex items-end gap-6">
          <GlowAvatar alt="Jane Doe" size="sm" glowColor="#7c3aed" />
          <GlowAvatar alt="John Smith" size="md" glowColor="#22d3ee" />
          <GlowAvatar alt="Alice W" size="lg" glowColor="#ec4899" />
          <GlowAvatar alt="Bob K" size="xl" glowColor="#f97316" />
        </div>
      )}
      {selected === "AnimatedCounter" && (
        <div className="flex flex-wrap justify-center gap-12 text-center">
          <div><div className="text-4xl font-bold"><AnimatedCounter value={1247} suffix="+" /></div><div className="mt-1 text-sm text-white/50">Users</div></div>
          <div><div className="text-4xl font-bold"><AnimatedCounter value={99.9} suffix="%" decimals={1} /></div><div className="mt-1 text-sm text-white/50">Uptime</div></div>
          <div><div className="text-4xl font-bold"><AnimatedCounter value={53} prefix="$" suffix="M" /></div><div className="mt-1 text-sm text-white/50">Revenue</div></div>
        </div>
      )}
      {selected === "NumberTicker" && (
        <div className="flex flex-wrap justify-center gap-12 text-center">
          <div><NumberTicker value={42069} className="text-4xl font-bold" /><div className="mt-1 text-sm text-white/50">Downloads</div></div>
          <div><NumberTicker value={99.99} decimalPlaces={2} className="text-4xl font-bold" /><div className="mt-1 text-sm text-white/50">Score</div></div>
        </div>
      )}
      {selected === "SkeletonLoader" && (
        <div className="w-full max-w-sm space-y-6">
          <div className="flex items-center gap-4">
            <SkeletonLoader variant="circular" width={48} height={48} />
            <div className="flex-1"><SkeletonLoader variant="text" count={2} /></div>
          </div>
          <SkeletonLoader variant="rectangular" height={120} />
        </div>
      )}
      {selected === "GlowTooltip" && (
        <div className="flex flex-wrap justify-center gap-8">
          <GlowTooltip content="Violet tooltip on top" side="top" accent="violet">
            <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm hover:border-violet-400/40">Hover (top)</span>
          </GlowTooltip>
          <GlowTooltip content="Cyan tooltip on right" side="right" accent="cyan">
            <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm hover:border-cyan-400/40">Hover (right)</span>
          </GlowTooltip>
          <GlowTooltip content="Pink tooltip below" side="bottom" accent="pink">
            <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm hover:border-pink-400/40">Hover (bottom)</span>
          </GlowTooltip>
        </div>
      )}
      {selected === "TypewriterText" && (
        <div className="text-center text-3xl font-semibold">
          Build{" "}
          <TypewriterText text={["beautiful UIs", "faster products", "amazing experiences"]} speed={60} className="ml-2 text-violet-400" />
        </div>
      )}
      {selected === "WordRotator" && (
        <div className="text-3xl font-semibold">
          We make <WordRotator words={["design", "code", "magic", "impact"]} className="mx-2 text-cyan-400" interval={2000} /> happen.
        </div>
      )}
      {selected === "TextScramble" && (
        <div className="flex flex-col items-center gap-6">
          <TextScramble text="NEBULA UI LIBRARY" className="text-3xl font-bold tracking-wider text-violet-400" trigger="auto" />
          <TextScramble text="Hover to scramble me" className="text-lg text-white/60" trigger="hover" />
        </div>
      )}
      {selected === "SparklesText" && (
        <div className="flex flex-col items-center gap-6">
          <SparklesText text="Sparkle Effect" sparklesCount={8} color="#a78bfa" className="text-3xl font-bold" />
          <SparklesText text="Premium UI" sparklesCount={5} color="#22d3ee" className="text-2xl font-semibold" />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main playground content                                             */
/* ------------------------------------------------------------------ */
function PlaygroundContent() {
  const [selected, setSelected] = useState<string>("GradientButton");
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [progressValue, setProgressValue] = useState(65);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const snippet = SNIPPETS[selected] ?? `import { ${selected} } from "@nebula/ui";`;
    await navigator.clipboard.writeText(snippet).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="container-page pt-28 pb-24">
      {/* Page header */}
      <div className="mx-auto max-w-2xl text-center">
        <ShimmerBadge tone="cyan">Interactive Playground</ShimmerBadge>
        <h1 className="text-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
          Try every component
        </h1>
        <p className="mt-4 text-balance text-white/60 md:text-lg">
          Select a component from the sidebar, interact with it live, and copy the import snippet.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="mt-12 flex gap-6">
        {/* ---- Sidebar ---- */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24 space-y-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 backdrop-blur-xl">
            {GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.label}>
                  <div className="mb-2 flex items-center gap-2 px-2">
                    <Icon className="size-3 text-white/30" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                      {group.label}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {group.items.map((name) => {
                      const isActive = selected === name;
                      return (
                        <button
                          key={name}
                          onClick={() => setSelected(name)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-mono transition",
                            isActive
                              ? "bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20"
                              : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                          )}
                        >
                          {name}
                          {isActive && <ChevronRight className="size-3 text-violet-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* ---- Mobile pill selector (only on <lg) ---- */}
        <div className="flex min-w-0 flex-1 flex-col gap-6 lg:hidden">
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-2 pb-1">
              {GROUPS.flatMap((g) => g.items).map((name) => (
                <button
                  key={name}
                  onClick={() => setSelected(name)}
                  className={cn(
                    "shrink-0 rounded-full border px-3 py-1.5 font-mono text-xs transition",
                    selected === name
                      ? "border-violet-400/50 bg-violet-500/20 text-violet-200"
                      : "border-white/10 bg-white/[0.02] text-white/50 hover:bg-white/[0.05] hover:text-white/80"
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Preview panel ---- */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          {/* Browser-chrome card */}
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1),transparent_60%)] backdrop-blur-xl">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/60" />
                <span className="size-2.5 rounded-full bg-amber-400/60" />
                <span className="size-2.5 rounded-full bg-emerald-400/60" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                  {selected}.tsx · live preview
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {copied ? (
                  <><Check className="size-3 text-emerald-400" /> Copied</>
                ) : (
                  <><Copy className="size-3" /> Copy snippet</>
                )}
              </button>
            </div>

            {/* Live preview */}
            <Preview
              selected={selected}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              toggleChecked={toggleChecked}
              setToggleChecked={setToggleChecked}
              selectValue={selectValue}
              setSelectValue={setSelectValue}
              progressValue={progressValue}
              setProgressValue={setProgressValue}
            />
          </div>

          {/* Code snippet */}
          <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4 backdrop-blur">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Quick snippet
            </div>
            <pre className="overflow-x-auto text-xs text-emerald-300/80 [scrollbar-width:thin]">
              <code>{SNIPPETS[selected] ?? `import { ${selected} } from "@nebula/ui";`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlaygroundPage() {
  return (
    <ToastProvider position="bottom-right">
      <PlaygroundContent />
    </ToastProvider>
  );
}
