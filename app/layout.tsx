import "./globals.css";

import { Inter, Outfit } from "next/font/google";

import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Learn with Dorell | Building Better Tech",
  description:
    "Automations, tools, and lessons learned to help you build better technology products.",
  keywords: ["automation", "technology", "tools", "developer", "tech"],
  authors: [{ name: "Dorell James" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${outfit.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
