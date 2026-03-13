import type { AboutContent } from "./types";

export const aboutContent = {
  headline: {
    line1: { en: "Crafting the web", id: "Membangun web" },
    highlight: { en: "one pixel", id: "setiap pixel" },
    line2: { en: "at a time.", id: "dengan cermat." },
  },
  bigText: {
    en: "I'm a Full-Stack Web Developer passionate about building beautiful digital experiences that feel alive. I blend technical precision with creative vision using modern tools and smooth animations.",
    id: "Saya adalah Full-Stack Web Developer yang bersemangat membangun pengalaman digital yang hidup. Saya memadukan presisi teknis dengan visi kreatif menggunakan tools modern dan animasi yang halus.",
  },
  cta: {
    primary: { label: { en: "Say Hello →", id: "Sapa Saya →" }, href: "#contact" },
    secondary: { label: { en: "See My Work", id: "Lihat Karya" }, href: "#work" },
  },
  profile: {
    initials: "R",
    name: "Rozan",
    handle: "@iyadrozan",
    availability: { en: "Available for work", id: "Available for work" },
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
