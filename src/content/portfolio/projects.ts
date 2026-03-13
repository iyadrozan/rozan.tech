import type { ProjectItem } from "./types";

export const projects = [
  {
    id: "01",
    title: "NovaSphere",
    category: "Web App / SaaS",
    tags: ["React", "Node.js", "WebGL"],
    year: "2024",
    desc: "AI-powered 3D data visualization platform with real-time analytics and immersive UI.",
    color: "from-indigo-900/30 to-background",
    accentColor: "#6366f1",
  },
  {
    id: "02",
    title: "Flux Studio",
    category: "Design Tool",
    tags: ["Next.js", "Canvas API", "GSAP"],
    year: "2024",
    desc: "Browser-based design tool for creating animated web components with visual programming.",
    color: "from-emerald-900/30 to-background",
    accentColor: "#10b981",
  },
  {
    id: "03",
    title: "Meridian",
    category: "E-Commerce",
    tags: ["React", "Stripe", "Postgres"],
    year: "2023",
    desc: "Premium fashion e-commerce with editorial aesthetics and smooth scroll-driven interactions.",
    color: "from-amber-900/30 to-background",
    accentColor: "#f59e0b",
  },
  {
    id: "04",
    title: "Pulse Network",
    category: "Social Platform",
    tags: ["TypeScript", "WebSockets", "Redis"],
    year: "2023",
    desc: "Real-time creator collaboration network with live co-editing and social discovery.",
    color: "from-rose-900/30 to-background",
    accentColor: "#f43f5e",
  },
] satisfies ProjectItem[];
