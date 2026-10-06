import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export const revalidate = false
export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: add more routes as you build out your own pages.
  const routes = [""].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return routes
}
