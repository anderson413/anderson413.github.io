import type { User } from "@/features/portfolio/types/user"

// TODO: 带空值/TODO 的字段等你的资料补齐；email/电话为 base64 编码。
export const USER: User = {
  firstName: "Anderson",
  lastName: "",
  displayName: "Anderson",
  username: "anderson413",
  gender: "male", // TODO: 未渲染，如需使用请改为你的信息
  pronouns: "he/him", // TODO: 未渲染，如需使用请改为你的信息
  bio: "First-year Data Science student, currently learning C programming.",
  flipSentences: [
    "First-year Data Science undergraduate.",
    "Currently learning C programming.",
    "Starting from the basics.",
  ],
  address: "Xi'an, China", // TODO: 确认所在地
  phoneNumberB64: "", // TODO: E.164 格式 base64 编码后填入
  emailB64: "NDkwMjA2OTE5QHFxLmNvbQ==", // 490206919@qq.com（base64 编码；换邮箱时重新编码）
  website: "https://github.com/anderson413", // TODO: 换成你的个人主页/域名
  jobTitle: "Data Science Undergraduate",
  jobs: [], // TODO: 有实习/工作经历再补
  about: `- I'm Anderson — a first-year undergraduate at Xi'an University of Finance and Economics (西安财经大学), majoring in Data Science.
- Currently learning C programming, starting from the very basics.
- Outside of class, I like making specimens and watching BL.
`,
  avatar: "/avatar.webp",
  avatarSketch: "/avatar.webp",
  avatarVariants: {
    lightOff: "/avatar.webp",
    lightOn: "/avatar.webp",
    darkOff: "/avatar.webp",
    darkOn: "/avatar.webp",
  },
  ogImage: "", // TODO: 换成你的分享图（og:image）
  namePronunciationUrl: "", // 留空则不显示"名字发音"按钮
  timeZone: "Asia/Shanghai",
  keywords: ["anderson"],
  dateCreated: "2026-10-06", // YYYY-MM-DD
}
