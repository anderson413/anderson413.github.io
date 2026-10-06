import Link from "next/link"

import {
  LICENSE,
  SITE_INFO,
  SOURCE_CODE_GITHUB_URL,
  UTM_PARAMS,
} from "@/config/site"
import type { BuildInfo } from "@/lib/build-info"
import { getBuildInfo, getStack } from "@/lib/build-info"
import { cn } from "@/lib/utils"
import { DmcaIcon } from "@/components/icons"

// Imported here rather than through `@/config/site`, which client components
// pull in, to keep the manifest out of client bundles.
import packageJson from "../../package.json"

// TODO: 模板作者的 "Inspired by" 致谢清单已随品牌清理移除；
// 想展示自己的致谢/工具清单可从 git 历史找回并改。

const OPENPANEL_URL = `https://openpanel.dev?utm_source=${UTM_PARAMS.utm_source}&utm_medium=referral&utm_campaign=footer`

const SITE_SUBTITLE = packageJson.description

/** Footer laid out as the title block of a technical drawing. */
export function SiteFooterCad() {
  const build = getBuildInfo()
  const stack = getStack()

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom screen-line-top-border before:z-1">
          <div className="stripe-divider h-12" />
        </div>

        <div className="relative">
          <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-sm">
            <span className="font-medium">{SITE_INFO.name}</span>
            <span className="font-sans text-muted-foreground">
              {SITE_SUBTITLE}
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-px bg-line font-mono md:grid-cols-4">
            <Field label="Build">
              <BuildValue build={build} />
            </Field>

            <Field label="Date">
              <time dateTime={build.date}>{build.date}</time>
            </Field>

            <Field label="Deployed on">
              <span className="font-sans" aria-hidden>
                ▲
              </span>
              <span className="sr-only">Vercel</span>
            </Field>

            <Field label="Source code">
              <a
                className="link-underline"
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </Field>

            <Field label="License">
              <a
                className="link-underline"
                href={LICENSE.url}
                target="_blank"
                rel="noopener"
              >
                {LICENSE.name}
              </a>
            </Field>

            <Field label="Typeface">Geist</Field>

            <Field className="col-span-2" label="Stack">
              <ul className="flex flex-col gap-0.5">
                {stack.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </Field>

            <Field label="Analytics">
              <ul className="flex flex-col gap-0.5">
                <li>
                  <a
                    className="link-underline"
                    href={OPENPANEL_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    OpenPanel
                  </a>
                </li>
                <li>Google Analytics</li>
              </ul>
            </Field>

            <Field label="For agents">
              <ul className="flex flex-col gap-0.5">
                <li>
                  <a
                    className="link-underline"
                    href="/llms.txt"
                    target="_blank"
                    rel="noopener"
                  >
                    llms.txt
                  </a>
                </li>
              </ul>
            </Field>
          </dl>
        </div>

        <div className="screen-line-top h-4" />

        <div className="screen-line-top screen-line-bottom flex items-center gap-3 screen-line-bottom-border px-4 py-3 text-muted-foreground">
          <Link
            href="/"
            className="mr-auto flex items-center text-muted-foreground transition-[color] hover:text-foreground"
            aria-label="Home"
          >
            {/* TODO: replace with your own logo. */}
            <span aria-hidden className="block size-4 border border-line" />
          </Link>

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={
              process.env.NEXT_PUBLIC_DMCA_URL ||
              "https://www.dmca.com/ProtectionPro.aspx"
            }
            target="_blank"
            rel="noopener"
            aria-label="DMCA.com Protection Status"
          >
            <DmcaIcon className="h-4 w-auto" />
          </a>
        </div>
      </div>

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

function BuildValue({ build }: { build: BuildInfo }) {
  if (!build.commitShortSha) {
    return <span className="text-muted-foreground">unavailable</span>
  }

  return (
    <>
      {build.commitUrl ? (
        <a
          className="link-underline"
          href={build.commitUrl}
          target="_blank"
          rel="noopener"
        >
          {build.commitShortSha}
        </a>
      ) : (
        build.commitShortSha
      )}

      {build.environment !== "production" && (
        <span className="text-muted-foreground">
          {" "}
          ({build.environment === "development" ? "local" : build.environment})
        </span>
      )}
    </>
  )
}

function Field({
  className,
  label,
  children,
}: {
  className?: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1 bg-background px-4 py-3",
        className
      )}
    >
      <dt className="text-[0.625rem]/4 font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  )
}
