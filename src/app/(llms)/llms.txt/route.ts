import { SITE_INFO } from "@/config/site"

// TODO: 以后有经历/项目/奖项了，加回 Experience / Projects / Recognition 的 .md 端点。
const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my education, and how to connect.
- [Education](${SITE_INFO.url}/education.md): Where I study and what I am learning.
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
