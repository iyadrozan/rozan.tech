import type { LocalizedString } from "./i18n";

export type HeroContent = {
  badge: { left: string; right: string };
  headlineWords: { en: string[]; id: string[] };
  subtext: LocalizedString;
  cta: {
    primary: { label: LocalizedString; href: string };
    secondary: { label: LocalizedString; href: string };
  };
  scrollLabel: LocalizedString;
  stats: { num: string; label: LocalizedString }[];
};

export type AboutContent = {
  headline: { line1: LocalizedString; highlight: LocalizedString; line2: LocalizedString };
  bigText: LocalizedString;
  cta: {
    primary: { label: LocalizedString; href: string };
    secondary: { label: LocalizedString; href: string };
  };
  profile: { initials: string; name: string; handle: string; availability: LocalizedString };
  tags: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  year: string;
  genre: string;
  link: string;
  image: string;
  desc: string;
};

export type SkillGroup = {
  label: string;
  skills: { name: string; icon: string }[];
};

export type ContactContent = {
  headingLines: { en: [string, string, string]; id: [string, string, string] };
  intro: LocalizedString;
  links: { label: string; value: string; href: string }[];
  form: {
    fields: {
      name: { label: LocalizedString; placeholder: string };
      email: { label: LocalizedString; placeholder: string };
      message: { label: LocalizedString; placeholder: string };
    };
    submitLabel: LocalizedString;
    success: { title: LocalizedString; body: LocalizedString };
  };
};

export type PricingPackage = {
  name: string;
  price: string;
  subtitle: LocalizedString;
  features: { text: LocalizedString; included: boolean }[];
  ctaLabel: LocalizedString;
  ctaPrompt: string;
  badge?: LocalizedString;
  featured?: boolean;
};

export type PricingNote = {
  label: LocalizedString;
  value: LocalizedString;
};

export type PricingContent = {
  packages: PricingPackage[];
  notes: PricingNote[];
};

export type NavContent = {
  brand: string;
  links: { label: LocalizedString; href: string }[];
  cta: { label: LocalizedString; href: string };
};

export type FooterContent = {
  brand: string;
  copyright: string;
  status: LocalizedString;
  socials: { label: string; href: string }[];
};

export type LoaderContent = {
  brand: string;
  tagline: string;
};

export type SectionHeaderContent = {
  index: string;
  title: LocalizedString;
  metaRight?: string;
};

export type SectionHeaders = {
  about: SectionHeaderContent;
  projects: SectionHeaderContent;
  pricing: SectionHeaderContent;
  skills: SectionHeaderContent;
  contact: SectionHeaderContent;
};
