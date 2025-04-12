"use client";

import { JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={jetbrainsMono.className}>
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
