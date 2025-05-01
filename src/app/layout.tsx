"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import ToasterContext from "@/components/Common/ToasterContext";
import ContactModal from "@/components/ContactModal";
import { ModalProvider } from "@/context/ModalContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>AI Engineering - Building Digital Excellence</title>
        <meta
          name="description"
          content="AI Engineering - Transforming complex challenges into elegant solutions. We specialize in developing cutting-edge solutions using the latest technologies."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            <ModalProvider>
              {loading ? (
                <PreLoader />
              ) : (
                <>
                  <ToasterContext />
                  <Header />
                  {children}
                  <Footer />
                  <ScrollToTop />
                  <ContactModal />
                </>
              )}
            </ModalProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
