import type { ContactContent } from "./types";

export const contactContent = {
  headingLines: {
    en: ["Let's Build", "Something", "Great."] as [string, string, string],
    id: ["Mari Bangun", "Sesuatu", "Hebat."] as [string, string, string],
  },
  intro: {
    en: "Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or how we can bring your vision to life.",
    id: "Punya proyek? Saya selalu terbuka untuk membahas peluang baru, ide kreatif, atau bagaimana mewujudkan visi Anda.",
  },
  links: [
    { label: "Email", value: "hello@rozan.tech", href: "mailto:hello@rozan.tech" },
    { label: "Twitter", value: "@iyadrozan", href: "https://twitter.com/iyadrozan" },
    { label: "LinkedIn", value: "linkedin.com/in/iyadrozan", href: "https://linkedin.com/in/iyadrozan" },
    { label: "GitHub", value: "github.com/iyadrozan", href: "https://github.com/iyadrozan" },
  ],
  form: {
    fields: {
      name: { label: { en: "Your Name", id: "Nama Anda" }, placeholder: "John Doe" },
      email: { label: { en: "Email Address", id: "Alamat Email" }, placeholder: "john@example.com" },
      message: { label: { en: "Your Message", id: "Pesan Anda" }, placeholder: "Tell me about your project..." },
    },
    submitLabel: { en: "Send Message →", id: "Kirim Pesan →" },
    success: {
      title: { en: "Message Sent!", id: "Pesan Terkirim!" },
      body: { en: "I'll get back to you soon.", id: "Saya akan segera membalas." },
    },
  },
} satisfies ContactContent;
