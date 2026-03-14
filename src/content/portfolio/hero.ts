import type { HeroContent } from "./types";

export const heroContent = {
  badge: {
    left: "EST. 2019",
    right: "Full-Stack Developer & Creative Coder",
  },
  headlineWords: {
    en: ["Creating", "Digital", "Experiences"],
    id: ["Menciptakan", "Pengalaman", "Digital"],
  },
  subtext: {
    en: "Rozan is a full-stack developer crafting bold, animated web experiences — from concept to deployment.",
    id: "Rozan adalah full-stack developer yang menciptakan pengalaman web yang berani dan penuh animasi — dari konsep hingga deployment.",
  },
  cta: {
    primary: { label: { en: "View Work", id: "Lihat Karya" }, href: "#work" },
    secondary: {
      label: { en: "Let's Talk", id: "Mari Bicara" },
      href: "#contact",
    },
  },
  scrollLabel: { en: "SCROLL", id: "SCROLL" },
  stats: [
    { num: "5+", label: { en: "Years Exp.", id: "Tahun Pengalaman" } },
    { num: "20+", label: { en: "Projects", id: "Proyek" } },
    { num: "10+", label: { en: "Clients", id: "Klien" } },
  ],
} satisfies HeroContent;
