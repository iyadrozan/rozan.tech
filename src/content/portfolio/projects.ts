import type { ProjectItem } from "./types";

export const projects = [
  {
    id: "01",
    title: "NovaSphere",
    year: "2024",
    genre: "AI / Data Visualization / WebGL",
    link: "https://example.com/novasphere",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    desc: "AI-powered 3D data visualization platform with real-time analytics and immersive UI.",
  },
  {
    id: "02",
    title: "Flux Studio",
    year: "2024",
    genre: "Design Tool / Animation",
    link: "https://example.com/flux-studio",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1400&auto=format&fit=crop",
    desc: "Browser-based design tool for creating animated web components with visual programming.",
  },
  {
    id: "03",
    title: "Meridian",
    year: "2023",
    genre: "E-Commerce / Editorial",
    link: "https://example.com/meridian",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
    desc: "Premium fashion e-commerce with editorial aesthetics and smooth scroll-driven interactions.",
  },
  {
    id: "04",
    title: "Pulse Network",
    year: "2023",
    genre: "Social / Realtime",
    link: "https://example.com/pulse-network",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    desc: "Real-time creator collaboration network with live co-editing and social discovery.",
  },
] satisfies ProjectItem[];
