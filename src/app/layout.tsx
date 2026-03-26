import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://atomicimpact.engineering";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atomic Impact — Software & AI Engineering",
    template: "%s | Atomic Impact",
  },
  description:
    "Atomic Impact builds web, mobile, and AI-powered software. We ship fast, SEO-friendly products and enterprise systems for teams worldwide.",
  keywords: [
    "Atomic Impact",
    "Atomic Impact Engineering",
    "Software Development",
    "AI Engineering",
    "Web Development",
    "Mobile Apps",
    "Custom Software",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Atomic Impact",
    title: "Atomic Impact — Software & AI Engineering",
    description:
      "Atomic Impact builds web, mobile, and AI-powered software. Enterprise-ready delivery from atomicimpact.engineering.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
