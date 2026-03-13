import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/atoms/SmoothScroll";
import Cursor from "@/components/organisms/portfolio/Cursor";
import { LanguageProvider } from "@/components/atoms/LanguageProvider";

const siteUrl = "https://rozan.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hi my name is Rozan",
  description: "Hi, my name is Rozan — a full-stack developer building bold, animated web experiences.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Hi my name is Rozan",
    description: "Hi, my name is Rozan — a full-stack developer building bold, animated web experiences.",
    url: siteUrl,
    siteName: "Rozan.tech",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Rozan.tech portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi my name is Rozan",
    description: "Hi, my name is Rozan — a full-stack developer building bold, animated web experiences.",
    images: ["/twitter.png"],
    site: "@iyadrozan",
    creator: "@iyadrozan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Rozan",
                url: siteUrl,
                jobTitle: "Full-Stack Developer",
                sameAs: [
                  "https://github.com/iyadrozan",
                  "https://linkedin.com/in/iyadrozan",
                  "https://instagram.com/iyadrozan",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Rozan.tech",
                url: siteUrl,
                logo: `${siteUrl}/icon-512.png`,
                sameAs: [
                  "https://github.com/iyadrozan",
                  "https://linkedin.com/in/iyadrozan",
                  "https://instagram.com/iyadrozan",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Rozan.tech",
                url: siteUrl,
                publisher: {
                  "@type": "Organization",
                  name: "Rozan.tech",
                  url: siteUrl,
                  logo: `${siteUrl}/icon-512.png`,
                },
              },
            ]),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <SmoothScroll />
          <Cursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
