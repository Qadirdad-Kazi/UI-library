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
} from "@nebula/ui";

const COMPONENTS_LIST = [
  "GradientButton",
  "GlowCard",
  "NeonInput",
  "ShimmerBadge",
  "GlassModal",
  "NeonTextarea",
  "GlowToggle",
  "NeonSelect",
  "GlowAvatar",
  "AnimatedCounter",
  "GradientDivider",
  "SkeletonLoader",
  "GlowTooltip",
  "ShimmerLink",
  "GlowProgress",
  "Toast",
  "TypewriterText",
  "WordRotator",
  "TextScramble",
  "NumberTicker",
] as const;

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <GradientButton
        variant="aurora"
        size="sm"
        onClick={() =>
          toast({ type: "success", title: "Success!", message: "Your changes have been saved." })
        }
      >
        Success Toast
      </GradientButton>
      <GradientButton
        variant="sunset"
        size="sm"
        onClick={() =>
          toast({ type: "error", title: "Error", message: "Something went wrong." })
        }
      >
        Error Toast
      </GradientButton>
      <GradientButton
        variant="ocean"
        size="sm"
        onClick={() =>
          toast({ type: "warning", message: "Your trial expires in 3 days." })
        }
      >
        Warning Toast
      </GradientButton>
      <GradientButton
        variant="void"
        size="sm"
        onClick={() =>
          toast({ type: "info", message: "New update available!" })
        }
      >
        Info Toast
      </GradientButton>
    </div>
  );
}

function PlaygroundContent() {
  const [selected, setSelected] = useState<string>("GradientButton");
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [progressValue, setProgressValue] = useState(65);

  return (
    <div className="container-page pt-32 pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <ShimmerBadge tone="cyan">Interactive Playground</ShimmerBadge>
        <h1 className="text-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
          Try every component
        </h1>
        <p className="mt-4 text-balance text-white/60 md:text-lg">
          Select a component and interact with it live. Copy the code into your project.
        </p>
      </div>

      {/* Component selector */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {COMPONENTS_LIST.map((name) => (
          <button
            key={name}
            onClick={() => setSelected(name)}
            className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${
              selected === name
                ? "border-violet-400/50 bg-violet-500/20 text-violet-200"
                : "border-white/10 bg-white/[0.02] text-white/50 hover:bg-white/[0.04] hover:text-white/80"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Preview area */}
      <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
          Live Preview — {selected}
        </div>

        <div className="flex min-h-[200px] items-center justify-center">
          {selected === "GradientButton" && (
            <div className="flex flex-wrap gap-4">
              <GradientButton variant="aurora">Aurora</GradientButton>
              <GradientButton variant="sunset">Sunset</GradientButton>
              <GradientButton variant="ocean">Ocean</GradientButton>
              <GradientButton variant="void">Void</GradientButton>
            </div>
          )}

          {selected === "GlowCard" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <GlowCard glowColor="#7c3aed">
                <h3 className="text-lg font-semibold">Violet Glow</h3>
                <p className="mt-1 text-sm text-white/60">Hover to see the tracking glow effect.</p>
              </GlowCard>
              <GlowCard glowColor="#22d3ee" intensity="high">
                <h3 className="text-lg font-semibold">Cyan Glow</h3>
                <p className="mt-1 text-sm text-white/60">High intensity for maximum impact.</p>
              </GlowCard>
            </div>
          )}

          {selected === "NeonInput" && (
            <div className="w-full max-w-sm space-y-4">
              <NeonInput label="Email" placeholder="you@nebula.dev" accent="violet" />
              <NeonInput label="Password" type="password" placeholder="••••••••" accent="cyan" />
              <NeonInput label="With Error" placeholder="bad input" accent="pink" error="This field is required" />
            </div>
          )}

          {selected === "ShimmerBadge" && (
            <div className="flex flex-wrap gap-4">
              <ShimmerBadge tone="violet">Violet Badge</ShimmerBadge>
              <ShimmerBadge tone="cyan">Cyan Badge</ShimmerBadge>
              <ShimmerBadge tone="amber">Amber Badge</ShimmerBadge>
            </div>
          )}

          {selected === "GlassModal" && (
            <div>
              <GradientButton onClick={() => setModalOpen(true)}>
                Open Modal
              </GradientButton>
              <GlassModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Welcome to Nebula"
                description="This is a glassmorphism modal with focus trap and keyboard handling."
              >
                <div className="space-y-4">
                  <NeonInput label="Your name" placeholder="Enter your name" />
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="rounded-lg px-4 py-2 text-sm text-white/60 hover:text-white"
                    >
                      Cancel
                    </button>
                    <GradientButton size="sm" onClick={() => setModalOpen(false)}>
                      Confirm
                    </GradientButton>
                  </div>
                </div>
              </GlassModal>
            </div>
          )}

          {selected === "NeonTextarea" && (
            <div className="w-full max-w-sm">
              <NeonTextarea
                label="Message"
                placeholder="Type your message here..."
                accent="violet"
                rows={4}
              />
            </div>
          )}

          {selected === "GlowToggle" && (
            <div className="flex flex-col gap-6">
              <GlowToggle
                checked={toggleChecked}
                onChange={setToggleChecked}
                label="Enable dark mode"
                accent="violet"
              />
              <GlowToggle
                checked={!toggleChecked}
                onChange={(v) => setToggleChecked(!v)}
                label="Send notifications"
                accent="cyan"
                size="lg"
              />
              <GlowToggle
                checked={false}
                label="Disabled toggle"
                accent="pink"
                disabled
              />
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

          {selected === "GlowAvatar" && (
            <div className="flex items-end gap-6">
              <GlowAvatar alt="Jane Doe" size="sm" glowColor="#7c3aed" />
              <GlowAvatar alt="John Smith" size="md" glowColor="#22d3ee" />
              <GlowAvatar alt="Alice W" size="lg" glowColor="#ec4899" />
              <GlowAvatar alt="Bob K" size="xl" glowColor="#f97316" />
            </div>
          )}

          {selected === "AnimatedCounter" && (
            <div className="flex gap-12 text-center">
              <div>
                <div className="text-4xl font-bold">
                  <AnimatedCounter value={1247} suffix="+" />
                </div>
                <div className="mt-1 text-sm text-white/50">Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold">
                  <AnimatedCounter value={99.9} suffix="%" decimals={1} />
                </div>
                <div className="mt-1 text-sm text-white/50">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold">
                  <AnimatedCounter value={53} prefix="$" suffix="M" />
                </div>
                <div className="mt-1 text-sm text-white/50">Revenue</div>
              </div>
            </div>
          )}

          {selected === "GradientDivider" && (
            <div className="w-full max-w-md space-y-6">
              <GradientDivider variant="aurora" />
              <GradientDivider variant="sunset" />
              <GradientDivider variant="ocean" />
              <GradientDivider variant="subtle" />
            </div>
          )}

          {selected === "SkeletonLoader" && (
            <div className="w-full max-w-sm space-y-6">
              <div className="flex items-center gap-4">
                <SkeletonLoader variant="circular" width={48} height={48} />
                <div className="flex-1">
                  <SkeletonLoader variant="text" count={2} />
                </div>
              </div>
              <SkeletonLoader variant="rectangular" height={120} />
            </div>
          )}

          {selected === "GlowTooltip" && (
            <div className="flex gap-8">
              <GlowTooltip content="Top tooltip" side="top" accent="violet">
                <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">Hover me (top)</span>
              </GlowTooltip>
              <GlowTooltip content="Right tooltip" side="right" accent="cyan">
                <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">Hover me (right)</span>
              </GlowTooltip>
              <GlowTooltip content="Bottom tooltip" side="bottom" accent="pink">
                <span className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">Hover me (bottom)</span>
              </GlowTooltip>
            </div>
          )}

          {selected === "ShimmerLink" && (
            <div className="flex gap-8">
              <ShimmerLink href="#" accent="violet">Violet link</ShimmerLink>
              <ShimmerLink href="#" accent="cyan">Cyan link</ShimmerLink>
              <ShimmerLink href="https://nebula-ui.dev" accent="pink" external>External link</ShimmerLink>
            </div>
          )}

          {selected === "GlowProgress" && (
            <div className="w-full max-w-md space-y-6">
              <GlowProgress value={progressValue} variant="aurora" showLabel />
              <GlowProgress value={80} variant="sunset" size="lg" />
              <GlowProgress value={45} variant="ocean" size="sm" />
              <input
                type="range"
                min={0}
                max={100}
                value={progressValue}
                onChange={(e) => setProgressValue(Number(e.target.value))}
                className="w-full accent-violet-500"
              />
            </div>
          )}

          {selected === "Toast" && <ToastDemo />}

          {selected === "TypewriterText" && (
            <div className="text-center">
              <div className="text-3xl font-semibold">
                Build{" "}
                <TypewriterText
                  text={["beautiful UIs", "faster products", "amazing experiences"]}
                  speed={60}
                  className="text-violet-400"
                />
              </div>
            </div>
          )}

          {selected === "WordRotator" && (
            <div className="text-3xl font-semibold">
              We make{" "}
              <WordRotator
                words={["design", "code", "magic", "impact"]}
                className="text-cyan-400"
                interval={2000}
              />{" "}
              happen.
            </div>
          )}

          {selected === "TextScramble" && (
            <div className="flex flex-col items-center gap-6">
              <TextScramble text="NEBULA UI" className="text-3xl font-bold tracking-wider text-violet-400" trigger="auto" />
              <TextScramble text="Hover to scramble" className="text-lg text-white/60" trigger="hover" />
            </div>
          )}

          {selected === "NumberTicker" && (
            <div className="flex gap-12 text-center">
              <div>
                <NumberTicker value={42069} className="text-4xl font-bold" />
                <div className="mt-1 text-sm text-white/50">Downloads</div>
              </div>
              <div>
                <NumberTicker value={99.99} decimalPlaces={2} className="text-4xl font-bold" />
                <div className="mt-1 text-sm text-white/50">Score</div>
              </div>
            </div>
          )}
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
