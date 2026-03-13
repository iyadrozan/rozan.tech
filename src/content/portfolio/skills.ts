import type { SkillGroup } from "./types";

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.JS", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "GSAP", icon: "SiGreensock" },
      { name: "Anime.JS", icon: "RiMovie2Line" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.JS", icon: "SiNodedotjs" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Docker", icon: "SiDocker" },
    ],
  },
  {
    label: "Platform",
    skills: [
      { name: "Vercel", icon: "SiVercel" },
      { name: "Netlify", icon: "SiNetlify" },
      { name: "GitHub Pages", icon: "SiGithubpages" },
    ],
  },
  {
    label: "Design",
    skills: [
      { name: "Figma", icon: "SiFigma" },
      { name: "Canva", icon: "SiCanva" },
    ],
  },
] satisfies SkillGroup[];

export const techItems = [
  "React",
  "Next.JS",
  "TypeScript",
  "JavaScript",
  "GSAP",
  "Anime.JS",
  "Tailwind CSS",
  "Node.JS",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "Vercel",
  "Netlify",
  "GitHub Pages",
  "Figma",
  "Canva",
];

export const tools = [
  { name: "VS Code", icon: "VscVscodeInsiders" },
  { name: "GitHub", icon: "SiGithub" },
  { name: "Git", icon: "SiGit" },
  { name: "Alacritty", icon: "SiAlacritty" },
  { name: "CachyOS", icon: "SiArchlinux" },
  { name: "Brave", icon: "SiBrave" },
];
