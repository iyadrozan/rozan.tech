import type { ContactContent } from "./types";

export const contactContent = {
  headingLines: ["Let's Build", "Something", "Great."],
  intro:
    "Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or how we can bring your vision to life.",
  links: [
    {
      label: "Email",
      value: "hi@rozan.tech",
      href: "mailto:hello@rozan.tech",
    },
    {
      label: "Instagram",
      value: "@code.eclipses",
      href: "https://www.instagram.com/code.eclipses",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/iyadrozan",
      href: "https://www.linkedin.com/in/iyad-rozan",
    },
    {
      label: "GitHub",
      value: "github.com/iyadrozan",
      href: "https://github.com/iyadrozan",
    },
  ],
  form: {
    fields: {
      name: { label: "Your Name", placeholder: "John Doe" },
      email: { label: "Email Address", placeholder: "john@example.com" },
      message: {
        label: "Your Message",
        placeholder: "Tell me about your project...",
      },
    },
    submitLabel: "Send Message →",
    success: {
      title: "Message Sent!",
      body: "I'll get back to you soon.",
    },
  },
} satisfies ContactContent;
