import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex.dev — Portfolio",
  description: "Full-Stack Web Developer portfolio with bold visuals and smooth motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
