import type { HeroContent } from "./types";

export const heroContent = {
  badge: {
    left: "EST. 2019",
    right: "Full-Stack Developer & Creative Coder",
  },
  headlineWords: ["Creating", "Digital", "Experiences"],
  subtext:
    "I craft immersive web interfaces with clean code, bold visuals, and delightful motion — from concept to deployment.",
  cta: {
    primary: { label: "View Work", href: "#work" },
    secondary: { label: "Let's Talk", href: "#contact" },
  },
  scrollLabel: "SCROLL",
  stats: [
    { num: "5+", label: "Years Exp." },
    { num: "10+", label: "Projects" },
    { num: "5+", label: "Clients" },
  ],
} satisfies HeroContent;
