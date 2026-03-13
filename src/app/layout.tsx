import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/atoms/SmoothScroll";
import Cursor from "@/components/organisms/portfolio/Cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://rozan.tech"),
  title: "Rozan.tech — Portfolio",
  description: "Rozan's portfolio with bold visuals and smooth motion.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rozan.tech — Portfolio",
    description: "Rozan's portfolio with bold visuals and smooth motion.",
    url: "https://rozan.tech",
    siteName: "Rozan.tech",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Rozan.tech portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rozan.tech — Portfolio",
    description: "Rozan's portfolio with bold visuals and smooth motion.",
    images: ["/twitter.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
