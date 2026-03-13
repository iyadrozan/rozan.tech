import type { ContactContent } from "./types";

export const contactContent = {
  headingLines: ["Let's Build", "Something", "Great."],
  intro:
    "Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or how we can bring your vision to life.",
  links: [
    { label: "Email", value: "alex@alexdev.io", href: "mailto:alex@alexdev.io" },
    { label: "Twitter", value: "@alexdev", href: "#" },
    { label: "LinkedIn", value: "linkedin.com/in/alexdev", href: "#" },
    { label: "GitHub", value: "github.com/alexdev", href: "#" },
  ],
  form: {
    fields: {
      name: { label: "Your Name", placeholder: "John Doe" },
      email: { label: "Email Address", placeholder: "john@example.com" },
      message: { label: "Your Message", placeholder: "Tell me about your project..." },
    },
    submitLabel: "Send Message →",
    success: {
      title: "Message Sent!",
      body: "I'll get back to you soon.",
    },
  },
} satisfies ContactContent;
