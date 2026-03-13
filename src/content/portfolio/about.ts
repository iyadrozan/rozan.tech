import type { AboutContent } from "./types";

export const aboutContent = {
  headline: {
    line1: "Crafting the web",
    highlight: "one pixel",
    line2: "at a time.",
  },
  bigText:
    "I'm a Full-Stack Web Developer passionate about building beautiful digital experiences that feel alive. I blend technical precision with creative vision using modern tools and smooth animations.",
  cta: {
    primary: { label: "Say Hello →", href: "#contact" },
    secondary: { label: "See My Work", href: "#work" },
  },
  profile: {
    initials: "R",
    name: "Rozan",
    handle: "@iyadrozan",
    availability: "Available for work",
  },
  tags: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "GSAP",
    "Tailwind",
    "PostgreSQL",
    "Figma",
  ],
} satisfies AboutContent;
