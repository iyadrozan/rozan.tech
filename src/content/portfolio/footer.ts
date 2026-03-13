import type { FooterContent } from "./types";

export const footerContent = {
  brand: "Rozan.tech",
  copyright: "© 2026. All rights reserved.",
  status: { en: "Open to Work", id: "Terbuka untuk Kerja" },
  socials: [
    { label: "Instagram", href: "https://instagram.com/iyadrozan" },
    { label: "GitHub", href: "https://github.com/iyadrozan" },
    { label: "LinkedIn", href: "https://linkedin.com/in/iyadrozan" },
    { label: "Email", href: "mailto:hello@rozan.tech" },
  ],
} satisfies FooterContent;
