import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/atoms/SmoothScroll";

export const metadata: Metadata = {
  title: "Rozan.tech — Portfolio",
  description: "Rozan's portfolio with bold visuals and smooth motion.",
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
        {children}
      </body>
    </html>
  );
}
