"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="min-h-screen"
              >
                <ToasterContext />
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
                <ContactModal />
              </motion.div>
            </ModalProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
