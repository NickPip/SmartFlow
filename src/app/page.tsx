import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NewHero from "@/components/Hero/NewHero";
import RecentProjects from "@/components/Projects";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering - Building Digital Excellence",
  description:
    "AI Engineering - Transforming complex challenges into elegant solutions. We specialize in developing cutting-edge solutions using the latest technologies.",
  keywords:
    "AI Engineering, Software Development, Digital Solutions, Web Development, Mobile Apps, Cloud Services",
};

export default function Home() {
  return (
    <>
      <NewHero />
      <RecentProjects />
      <Hero />
      <Team />
      <Features />
      <Faq />
      <Contact />
      <ScrollUp />
    </>
  );
}
