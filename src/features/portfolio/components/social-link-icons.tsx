import { GitHubIcon } from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

/**
 * Presentation binding for social profiles. Kept separate from the social
 * data so the data layer stays JSX-free. Keyed by `SocialName` so it stays
 * exhaustive with the registry.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  github: <GitHubIcon />,
  // TODO: 与 social-links.ts 同步添加图标
  // x: <XIcon />,
  // linkedin: <LinkedInIcon />,
  // discord: <DiscordIcon />,
  // youtube: <YouTubeIcon />,
}
