import type { Metadata } from "next";
import Script from "next/script";
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

const metaPixelId =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1246716587614766";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atomic Impact Engineering — Software & AI",
    template: "%s | Atomic Impact Engineering",
  },
  description:
    "Atomic Impact Engineering builds web, mobile, and AI-powered software. Known as Atomic Impact — fast delivery, SEO-friendly products, and enterprise systems worldwide.",
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
    siteName: "Atomic Impact Engineering",
    title: "Atomic Impact Engineering — Software & AI",
    description:
      "Atomic Impact Engineering builds web, mobile, and AI-powered software. Enterprise-ready delivery from atomicimpact.engineering.",
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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');
`,
          }}
        />
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
          />
        </noscript>
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
