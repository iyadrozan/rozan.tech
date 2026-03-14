import type { NavContent } from "./types";

export const navContent = {
  brand: "Rozan.tech",
  links: [
    { label: { en: "About", id: "Tentang" }, href: "#about" },
    { label: { en: "Work", id: "Karya" }, href: "#work" },
    { label: { en: "Pricing", id: "Harga" }, href: "#pricing" },
    { label: { en: "Skills", id: "Keahlian" }, href: "#skills" },
    { label: { en: "Contact", id: "Kontak" }, href: "#contact" },
  ],
  cta: { label: { en: "Hire Me", id: "Rekrut Saya" }, href: "#contact" },
} satisfies NavContent;
