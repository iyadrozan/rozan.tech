import type { SkillGroup } from "./types";

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "GSAP", icon: "SiGreensock" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "GraphQL", icon: "SiGraphql" },
      { name: "Docker", icon: "SiDocker" },
    ],
  },
  {
    label: "Creative",
    skills: [
      { name: "Three.js", icon: "SiThreedotjs" },
      { name: "WebGL", icon: "SiWebgl" },
      { name: "Figma", icon: "SiFigma" },
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
  { name: "VS Code", icon: "VscVscodeInsiders" },
  { name: "Figma", icon: "SiFigma" },
  { name: "GitHub", icon: "SiGithub" },
  { name: "Vercel", icon: "SiVercel" },
  { name: "Linear", icon: "SiLinear" },
  { name: "Notion", icon: "SiNotion" },
];
