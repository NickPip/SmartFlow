"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "./projectsData";

export default function RecentProjects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const completed = projectsData.filter((p) => p.status === "Completed");
  const inProgress = projectsData.filter((p) => p.status === "In Progress");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // carousel helpers (same file)
  const inProgressRef = useRef<HTMLDivElement | null>(null);

  const scrollInProgress = (dir: "left" | "right") => {
    const el = inProgressRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-card='project']");
    const gap = 32;
    const cardWidth = firstCard?.offsetWidth ?? 520;
    const delta = cardWidth + gap;

    el.scrollBy({
      left: dir === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#0b1220] py-16 text-white"
    >
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-gray-200">Featured </span>
            <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Delivering excellence across web, mobile, and enterprise solutions
          </p>
        </motion.div>

        {/* Completed Projects (grid) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-center"
        >
          <h3 className="text-lg font-semibold text-slate-200">
            Completed Projects
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {completed.map((p) => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>

        {/* In Progress (carousel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 text-center"
        >
          <h3 className="text-lg font-semibold text-slate-200">
            Currently in Development
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          {/* fade edges */}
          

          {/* arrows (no shadow, hidden on mobile) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between sm:flex">
            <button
              type="button"
              onClick={() => scrollInProgress("left")}
              className="pointer-events-auto ml-2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-white hover:bg-black/60"
              aria-label="Scroll left"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollInProgress("right")}
              className="pointer-events-auto mr-2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-white hover:bg-black/60"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>

          {/* carousel track */}
          <div className="mx-auto max-w-6xl">
            <div
              ref={inProgressRef}
              className="
                flex gap-8 overflow-x-auto pb-2 pr-4 sm:pr-10
                scroll-smooth [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
                snap-x snap-mandatory
              "
            >
              {inProgress.map((p) => (
                <div
                  key={p.id}
                  data-card="project"
                  className="
                    snap-start flex-none
                    w-[100%]
                    sm:w-[78%]
                    lg:w-[62%]
                  "
                >
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
