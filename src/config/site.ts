import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export const SITE_INFO = {
  // TODO: replace the description and keywords with your own.
  name: "Anderson",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://anderson413.github.io",
  description: "A personal resume website.",
  keywords: [],
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/anderson413/chanhdai.com/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

// TODO: add navigation entries for your own pages (resume sections, etc.).
export const MAIN_NAV: NavItem<Route>[] = []

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

// Drives the GitHub contributions graph on the home page.
export const GITHUB_USERNAME = SOCIAL.github.handle

export const SOURCE_CODE_GITHUB_REPO = "anderson413/chanhdai.com"
export const SOURCE_CODE_GITHUB_URL = `https://github.com/${SOURCE_CODE_GITHUB_REPO}`

// TODO: point this at your own sponsorship page, or remove it.
export const SPONSORSHIP_URL = "https://github.com/sponsors/acme"

export const UTM_PARAMS = {
  utm_source: "anderson413.github.io",
}
