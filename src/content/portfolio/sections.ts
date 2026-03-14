import type { SectionHeaders } from "./types";

export const sectionHeaders = {
  about: { index: "01.", title: { en: "About Me — Full‑Stack Developer", id: "Tentang Saya — Full‑Stack Developer" } },
  projects: { index: "02.", title: { en: "Selected Work — Web Projects", id: "Karya Pilihan — Proyek Web" } },
  pricing: { index: "03.", title: { en: "Pricing — Website Packages", id: "Harga — Paket Website" } },
  skills: { index: "04.", title: { en: "Skills & Stack — Tech Toolkit", id: "Keahlian & Stack — Toolset" } },
  contact: { index: "05.", title: { en: "Get In Touch — Hire Me", id: "Hubungi — Rekrut Saya" } },
} satisfies SectionHeaders;
