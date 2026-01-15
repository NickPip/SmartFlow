"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStackData } from "./techStackData";

const TechStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative overflow-hidden bg-black py-20 lg:py-[120px]"
    >
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4B6BFB]">
            Our Stack
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Technologies We Use
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400">
            Built with modern tools and frameworks to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 border border-white/10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                  {tech.icon}
                </div>
                <span className="text-base font-medium text-white">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Effects */}
      <div className="absolute left-0 top-0 -z-0 h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-primary/10 to-purple-500/10 blur-3xl"></div>
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </section>
  );
};

export default TechStack;



