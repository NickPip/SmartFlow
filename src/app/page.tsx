import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import NewHero from "@/components/Hero/NewHero";
import RecentProjects from "@/components/Projects";
import Process from "@/components/Process";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomic Impact — Software & AI Engineering",
  description:
    "Atomic Impact builds web, mobile, and AI-powered software. We transform complex challenges into reliable products—from landing pages to full-stack platforms.",
  keywords:
    "Atomic Impact, Atomic Impact Engineering, software development, AI engineering, web development, mobile apps, custom software",
};

export default function Home() {
  return (
    <>
      <NewHero />
      <RecentProjects />
      <Process />
      <Team />
      <Features />
      <Contact />
      <ScrollUp />
    </>
  );
}
