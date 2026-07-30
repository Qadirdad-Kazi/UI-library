# @nebula/ui

Production-ready cinematic React components — primitives, sections, backgrounds, and text animations.

## Install

```bash
npm install @nebula/ui
```

```css
@import "@nebula/ui/styles.css";
```

## Usage

```tsx
import {
  GradientButton,
  GlowCard,
  NeonInput,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  Sheet,
} from "@nebula/ui";

export function Demo() {
  return (
    <GlowCard glowColor="#2dd4bf" className="max-w-md space-y-4 p-6">
      <Alert variant="info" title="Ready">
        Import styles once, then compose freely.
      </Alert>
      <NeonInput label="Email" placeholder="you@company.com" accent="teal" />
      <GradientButton variant="aurora" className="w-full">
        Continue
      </GradientButton>
    </GlowCard>
  );
}
```

## Peer dependencies

- `react` >= 18
- `react-dom` >= 18
- Tailwind CSS v4 recommended for utility classes

## License

MIT
