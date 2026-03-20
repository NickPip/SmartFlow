"use client";

import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ToasterContext from "@/components/Common/ToasterContext";
import ContactModal from "@/components/ContactModal";
import { ModalProvider } from "@/context/ModalContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
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
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Skip to main content
          </a>
          <ToasterContext />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
          <ContactModal />
        </motion.div>
      </ModalProvider>
    </ThemeProvider>
  );
}
