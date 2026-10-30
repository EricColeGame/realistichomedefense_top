import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

export const locales = ["en", "es", "pt", "de"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale as Locale,
  localePrefix: "always",
  localeDetection: false,
});
