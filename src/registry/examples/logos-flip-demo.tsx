import { LogosFlip } from "@/registry/components/logos-flip"

// TODO: replace with your own logos.
const LOGOS = ["Acme", "Globex", "Initech", "Umbrella"]

export default function LogosFlipDemo() {
  return (
    <LogosFlip className="w-full text-foreground [--column-count:2] sm:[--column-count:4]">
      {LOGOS.map((name) => (
        <span key={name} className="text-lg font-semibold tracking-tight">
          {name}
        </span>
      ))}
    </LogosFlip>
  )
}
