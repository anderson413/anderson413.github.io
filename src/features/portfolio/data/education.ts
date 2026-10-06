import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "xaufe",
    school: "Xi'an University of Finance and Economics",
    degree: "Bachelor's degree",
    fieldOfStudy: "Data Science",
    period: {
      start: "09.2026",
      // end 留空 = 在读，页面显示 ∞
    },
    description: `- First-year undergraduate, majoring in Data Science.
- TODO: 补充 GPA、奖项、课程或校园经历。
`,
  },
]
