import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /**
   * Stamped once per build and inlined. Reading the clock at render time would
   * instead report whenever a page was regenerated, which drifts on the ISR
   * routes and disagrees with the fully static ones.
   */
  env: {
    BUILD_TIMESTAMP: new Date().toISOString(),
  },
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ["next-mdx-remote"],
  // TODO: rename these dev origins to match your own local setup (see
  // `.env.local` and `portless.json`).
  allowedDevOrigins: ["ncdai.localhost", "ncdai.local"],
  devIndicators: false,
  experimental: {
    // Rewrite barrel imports to deep imports so a single icon doesn't pull the
    // whole package into the module graph. Next already optimizes lucide-react,
    // @tabler/icons-react, date-fns and lodash-es by default; these are the
    // heavy icon packages this app uses that are NOT on that default list.
    optimizePackageImports: [
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
      "@phosphor-icons/react",
      "@remixicon/react",
    ],
  },
  // GitHub Pages 是纯静态托管：静态导出，构建产物在 out/
  output: "export",
  images: {
    // 静态导出没有图片优化服务，直接用原图
    unoptimized: true,
    // TODO: replace `assets.chanhdai.com` with your own image CDN once the
    // portfolio data no longer points at it.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error"],
          },
        }
      : undefined,
  // GitHub Pages（静态托管）不支持 redirects / rewrites，已随静态导出移除；
  // 以后若迁到 Vercel/自建服务器，可从 git 历史恢复这两段配置。
}

export default nextConfig
