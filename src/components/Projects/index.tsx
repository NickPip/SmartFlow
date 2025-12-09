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
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#0b1220] py-16 text-white dark:bg-[#0b1220]"
    >
      <div className="container px-4">
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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {inProgress.map((p) => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


