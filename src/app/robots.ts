import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

// 静态导出（GitHub Pages）要求显式声明
export const revalidate = false
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  }
}
