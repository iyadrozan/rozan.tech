export type HeroContent = {
  badge: { left: string; right: string };
  headlineWords: string[];
  subtext: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  scrollLabel: string;
  stats: { num: string; label: string }[];
};

export type AboutContent = {
  headline: { line1: string; highlight: string; line2: string };
  bigText: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  profile: { initials: string; name: string; handle: string; availability: string };
  tags: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  desc: string;
  color: string;
  accentColor: string;
};

export type SkillGroup = {
  label: string;
  skills: { name: string; level: number }[];
};

export type ContactContent = {
  headingLines: [string, string, string];
  intro: string;
  links: { label: string; value: string; href: string }[];
  form: {
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    submitLabel: string;
    success: { title: string; body: string };
  };
};

export type NavContent = {
  brand: string;
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
};

export type FooterContent = {
  brand: string;
  copyright: string;
  status: string;
  socials: string[];
};

export type LoaderContent = {
  brand: string;
  tagline: string;
};

export type SectionHeaderContent = {
  index: string;
  title: string;
  metaRight?: string;
};

export type SectionHeaders = {
  about: SectionHeaderContent;
  projects: SectionHeaderContent;
  skills: SectionHeaderContent;
  contact: SectionHeaderContent;
};
