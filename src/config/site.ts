export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
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
  description: "Fan-made REALISTIC HOME DEFENSE wiki covering Roblox controls, weapons, equipment, money tips, and room-by-room tactical defense strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://realistichomedefense.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://realistichomedefense.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/105527962898452/REALISTIC-HOME-DEFENSE",
  heroVideoId: "fIo9MZRzr5E",
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
