import type { PricingContent } from "./types";

export const pricingContent = {
  packages: [
    {
      name: "Basic",
      price: "Rp 1–2 jt",
      subtitle: {
        en: "Best for: micro businesses, shops, personal brand",
        id: "cocok untuk: UMKM, toko, personal brand",
      },
      features: [
        {
          text: { en: "1-page landing page", id: "Landing page 1 halaman" },
          included: true,
        },
        {
          text: { en: "Template-based design", id: "Desain dari template" },
          included: true,
        },
        {
          text: {
            en: "Responsive (mobile + desktop)",
            id: "Responsive (HP + desktop)",
          },
          included: true,
        },
        {
          text: {
            en: "Contact form / WhatsApp button",
            id: "Form kontak / WhatsApp button",
          },
          included: true,
        },
        {
          text: { en: "Hosting upload", id: "Upload ke hosting" },
          included: true,
        },
        { text: { en: "2x revisions", id: "2× revisi" }, included: false },
      ],
      ctaLabel: { en: "Create website now ↗", id: "Buat website sekarang ↗" },
      ctaPrompt: "Bagaimana cara menjual paket Basic website ke UMKM lokal?",
    },
    {
      name: "Pro",
      price: "Rp 3–5 jt",
      subtitle: {
        en: "Best for: serious business, professionals, startups",
        id: "cocok untuk: bisnis serius, profesi, startup",
      },
      badge: { en: "Best seller", id: "Paling laku" },
      featured: true,
      features: [
        {
          text: {
            en: "3–5 pages (Home, About, Services, Contact)",
            id: "3–5 halaman (Home, About, Services, Contact)",
          },
          included: true,
        },
        {
          text: {
            en: "Custom design from client brief",
            id: "Desain custom (dari brief klien)",
          },
          included: true,
        },
        {
          text: {
            en: "Responsive + speed optimization",
            id: "Responsive + optimasi kecepatan",
          },
          included: true,
        },
        {
          text: {
            en: "Basic SEO (meta, sitemap)",
            id: "SEO dasar (meta, sitemap)",
          },
          included: true,
        },
        {
          text: {
            en: "Google Analytics setup",
            id: "Google Analytics terpasang",
          },
          included: true,
        },
        {
          text: { en: "Upload + domain setup", id: "Upload + domain setup" },
          included: true,
        },
        { text: { en: "3x revisions", id: "3× revisi" }, included: true },
      ],
      ctaLabel: { en: "Create website now ↗", id: "Buat website sekarang ↗" },
      ctaPrompt:
        "Apa yang membedakan paket Pro dari Basic yang bisa saya jelaskan ke klien?",
    },
    {
      name: "Custom",
      price: "Rp 7 jt+",
      subtitle: {
        en: "Best for: e-commerce, special features",
        id: "cocok untuk: e-commerce, fitur khusus",
      },
      features: [
        {
          text: { en: "All Pro features", id: "Semua fitur Pro" },
          included: true,
        },
        {
          text: {
            en: "Product catalog / online store",
            id: "Katalog produk / toko online",
          },
          included: true,
        },
        {
          text: {
            en: "Login system / dashboard",
            id: "Sistem login / dashboard",
          },
          included: true,
        },
        {
          text: {
            en: "Payment gateway integration",
            id: "Integrasi payment gateway",
          },
          included: true,
        },
        {
          text: {
            en: "CMS (client can edit)",
            id: "CMS (klien bisa edit sendiri)",
          },
          included: true,
        },
        {
          text: {
            en: "Unlimited revisions (dev phase)",
            id: "Revisi unlimited (fase development)",
          },
          included: true,
        },
      ],
      ctaLabel: { en: "Create website now ↗", id: "Buat website sekarang ↗" },
      ctaPrompt:
        "Kapan saya harus menawarkan paket Custom ke klien dan bagaimana cara quotingnya?",
    },
  ],
  notes: [
    {
      label: { en: "Timeline", id: "Waktu pengerjaan" },
      value: {
        en: "Basic: 3–5 days · Pro: 7–14 days · Custom: by scope",
        id: "Basic: 3–5 hari · Pro: 7–14 hari · Custom: sesuai scope",
      },
    },
    {
      label: { en: "Payment terms", id: "Sistem pembayaran" },
      value: {
        en: "50% upfront · 50% after approval",
        id: "50% di awal · 50% setelah ACC",
      },
    },
    {
      label: { en: "Optional add-ons", id: "Add-on yang bisa dijual terpisah" },
      value: {
        en: "Monthly maintenance · Copywriting · Logo",
        id: "Maintenance bulanan · Copywriting · Logo",
      },
    },
  ],
} satisfies PricingContent;
