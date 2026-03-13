import type { NavContent } from "./types";

export const navContent = {
  brand: "Alex.dev",
  links: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Hire Me", href: "#contact" },
} satisfies NavContent;
