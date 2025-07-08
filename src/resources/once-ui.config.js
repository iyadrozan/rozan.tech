const baseURL = process.env.NODE_ENV === 'production' 
  ? "https://rozan.tech" 
  : `http://${process.env.NEXT_PUBLIC_HOST || 'localhost'}:${process.env.PORT || 3000}`;

import { Lexend } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const heading = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Lexend({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Lexend({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Zen_Kaku_Gothic_New({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

const style = {
  theme: "dark",
  brand: "blue",
  accent: "custom",
  neutral: "gray",
  border: "playful",
  solid: "color",
  solidStyle: "flat",
  surface: "translucent",
  transition: "all",
  scaling: "100",
}

const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

const meta = {
  home: {
    path: "/",
    title: "Iyad Rozan - Web Developer & Technology Enthusiast | rozan.tech",
    description: "Sulawesi-based developer passionate about transforming complex ideas into simple, purposeful technology. Specializing in web development, open-source solutions, and innovative software engineering.",
    image: "/images/og-rozan.jpg",
    imageAlt: "Iyad Rozan - Sulawesi Developer and Technology Enthusiast",
    canonical: baseURL,
    robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    alternates: [
      { href: baseURL, hrefLang: "en" },
      { href: baseURL, hrefLang: "x-default" }
    ],
    keywords: "Iyad Rozan, developer, sulawesi developer, makassar developer, indonesia developer, web development, software engineer, open source, technology enthusiast, full stack developer, javascript developer, react developer, next.js developer, typescript developer, frontend developer, backend developer, rozan.tech",
    author: "Iyad Rozan",
    type: "website",
    locale: "en_US",
    siteName: "rozan.tech",
    category: "Technology",
    classification: "Personal Portfolio",
    coverage: "Worldwide",
    distribution: "Global",
    rating: "General",
    twitter: {
      card: "summary_large_image",
      site: "@iyadrozan",
      creator: "@iyadrozan",
      title: "Iyad Rozan - Web Developer & Technology Enthusiast",
      description: "Sulawesi-based developer passionate about transforming complex ideas into simple, purposeful technology. Building innovative solutions with modern web technologies.",
      image: "/images/og-rozan.jpg",
      imageAlt: "Iyad Rozan - Sulawesi Developer and Technology Enthusiast"
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseURL,
      title: "Iyad Rozan - Web Developer & Technology Enthusiast",
      description: "Sulawesi-based developer passionate about transforming complex ideas into simple, purposeful technology. Specializing in web development, open-source solutions, and innovative software engineering.",
      siteName: "rozan.tech",
      images: [
        {
          url: "/images/og-rozan.jpg",
          width: 1200,
          height: 630,
          alt: "Iyad Rozan - Web Developer and Technology Enthusiast",
          type: "image/jpeg"
        },
        {
          url: "/images/og-rozan-square.jpg",
          width: 1080,
          height: 1080,
          alt: "Iyad Rozan - Developer Profile",
          type: "image/jpeg"
        }
      ]
    }
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Person", "WebSite"],
  name: "Iyad Rozan",
  alternateName: "Rozan",
  description: "Sulawesi-based developer passionate about transforming complex ideas into simple, purposeful technology",
  url: baseURL,
  email: "hi@rozan.tech",
  image: "/images/og-rozan.jpg",
  logo: "/images/logo.png",
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Independent Developer"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Makassar",
    addressRegion: "South Sulawesi",
    addressCountry: "Indonesia"
  },
  nationality: "Indonesian",
  knowsAbout: [
    "Web Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Open Source",
    "Software Engineering",
    "Frontend Development",
    "Backend Development"
  ],
  sameAs: [
    "https://github.com/iyadrozan",
    "https://www.linkedin.com/in/iyad-rozan",
    "https://www.threads.com/@code.eclipses",
    "https://www.instagram.com/code.eclipses",
    "https://twitter.com/iyadrozan"
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": baseURL
  },
  potentialAction: {
    "@type": "ContactAction",
    target: "mailto:hi@rozan.tech"
  }
};



export { baseURL, fonts, style, meta, schema, effects, dataStyle };