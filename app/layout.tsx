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
  title: "Dorell James | Building Better Tech Together",
  description:
    "Sharing my process—automations, tools, and lessons learned to help you build better technology products.",
  keywords: [
    "automation",
    "technology",
    "tools",
    "developer",
    "personal website",
  ],
  authors: [{ name: "Dorell James" }],
  creator: "Dorell James",
  openGraph: {
    title: "Dorell James | Building Better Tech Together",
    description:
      "Sharing my process—automations, tools, and lessons learned to help you build better technology products.",
    url: "https://learnwithdorell.com",
    siteName: "Learn with Dorell",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Learn with Dorell",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorell James | Building Better Tech Together",
    description:
      "Sharing my process—automations, tools, and lessons learned to help you build better technology products.",
    creator: "@learnwithdorell",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${inter.className} ${inter.variable} ${outfit.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
