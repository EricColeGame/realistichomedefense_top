export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "REALISTIC HOME DEFENSE Wiki",
  shortName: "REALISTIC HOME DEFENSE",
  logoText: "R",
  tagline: "Controls, Weapons & Tactical Defense Guides",
  description: "Find REALISTIC HOME DEFENSE controls, weapon tips, tactical strategies, and Roblox gameplay guides to improve your aim, survive rounds, and win more matches.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://realistichomedefense.top",
  supportEmail: "support@realistichomedefense.top",
  gameUrl: "https://www.roblox.com/games/105527962898452/REALISTIC-HOME-DEFENSE",
  heroVideoId: "",
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
