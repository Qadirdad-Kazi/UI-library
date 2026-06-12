# @nebula/ui

A cinematic, AI-powered React component library.

## Install

```bash
npm install @nebula/ui
```

Add Tailwind CSS to your project, then in your global stylesheet:

```css
@import "@nebula/ui/styles.css";
```

## Use

```tsx
import { GradientButton, GlowCard, NeonInput } from "@nebula/ui";

export default function App() {
  return (
    <GlowCard glowColor="#7c3aed">
      <h2>Hello, Nebula</h2>
      <NeonInput label="Email" placeholder="you@nebula.dev" accent="violet" />
      <GradientButton variant="aurora">Sign in</GradientButton>
    </GlowCard>
  );
}
```

## Components

| Name             | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| `GradientButton` | Animated gradient button with shimmer + glow               |
| `GlowCard`       | Mouse-tracking spotlight card with gradient border         |
| `NeonInput`      | Neon-glow form input with three accent colors              |
| `ShimmerBadge`   | Shimmering pill badge for status / tags                    |

See full docs in the showcase site.
