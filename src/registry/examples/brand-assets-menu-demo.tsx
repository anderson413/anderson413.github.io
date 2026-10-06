"use client"

import Link from "next/link"

import { BrandAssetsMenu } from "@/registry/components/brand-assets-menu"

export default function BrandAssetsMenuDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* TODO: replace the placeholder mark and links with your own brand assets. */}
      <BrandAssetsMenu
        logomark={<PlaceholderMark />}
        logomarkSVG={LOGOMARK_SVG}
        logotypeSVG={LOGOTYPE_SVG}
        brandGuidelinesURL="/"
        brandAssetsURL="/"
      >
        <Link href="/" aria-label="Home">
          <PlaceholderMark className="h-8 text-foreground" />
        </Link>
      </BrandAssetsMenu>

      <div className="text-sm text-muted-foreground">
        <span className="hidden pointer-fine:inline-block">
          Right-click the logo
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Press & hold the logo
        </span>
      </div>
    </div>
  )
}

const LOGOMARK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" rx="48" fill="currentColor"/></svg>'

const LOGOTYPE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><rect width="256" height="64" rx="12" fill="currentColor"/><rect y="96" width="192" height="64" rx="12" fill="currentColor"/><rect y="192" width="128" height="64" rx="12" fill="currentColor"/></svg>'

function PlaceholderMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256"
      aria-hidden
      {...props}
    >
      <rect width="256" height="256" rx="48" fill="currentColor" />
    </svg>
  )
}
