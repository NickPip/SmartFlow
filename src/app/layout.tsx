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

export const metadata: Metadata = {
  title: {
    default: "AI Engineering - Building Digital Excellence",
    template: "%s | AI Engineering",
  },
  description:
    "AI Engineering - Transforming complex challenges into elegant solutions. We specialize in developing cutting-edge solutions using the latest technologies.",
  keywords: [
    "AI Engineering",
    "Software Development",
    "Digital Solutions",
    "Web Development",
    "Mobile Apps",
    "Cloud Services",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
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
