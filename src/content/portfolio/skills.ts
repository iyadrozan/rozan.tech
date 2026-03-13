import type { SkillGroup } from "./types";

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "GSAP / Animations", level: 92 },
      { name: "CSS / Tailwind", level: 95 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST & GraphQL", level: 82 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    label: "Creative",
    skills: [
      { name: "WebGL / Three.js", level: 72 },
      { name: "Figma / Design", level: 85 },
      { name: "Motion Design", level: 88 },
      { name: "Creative Coding", level: 80 },
    ],
  },
] satisfies SkillGroup[];

export const techItems = [
  "React",
  "TypeScript",
  "Next.js",
  "GSAP",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Three.js",
  "Figma",
  "Docker",
  "GraphQL",
  "WebGL",
];

export const tools = [
  { name: "VS Code", icon: "⌨️" },
  { name: "Figma", icon: "🎨" },
  { name: "GitHub", icon: "🐙" },
  { name: "Vercel", icon: "▲" },
  { name: "Linear", icon: "⚡" },
  { name: "Notion", icon: "📝" },
];
