import { LogosCarousel } from "@/registry/components/logos-carousel"

// TODO: replace with your own logos.
const LOGOS = ["Acme", "Globex", "Initech", "Umbrella"]

export default function LogosCarouselDemo() {
  return (
    <LogosCarousel className="w-full py-4 text-foreground">
      {LOGOS.map((name) => (
        <span key={name} className="text-lg font-semibold tracking-tight">
          {name}
        </span>
      ))}
    </LogosCarousel>
  )
}
