"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GlowingCube = ({
  onHover,
  onHoverEnd,
  nextLetter,
}: {
  onHover: () => void;
  onHoverEnd: () => void;
  nextLetter: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [letter, setLetter] = useState("");

  const handleMouseEnter = () => {
    setLetter(nextLetter);
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 500);
    onHoverEnd();
  };

  return (
    <div
      className="relative h-8 w-8 border-[0.5px] border-blue-500/10"
      style={{ margin: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-300 ease-out
          ${
            isHovered
              ? "from-blue-500/30 to-emerald-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              : "from-slate-800/5 to-slate-900/5"
          }
        `}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-emerald-500/20 text-sm font-medium transition-all duration-300 ease-out
            ${isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"}
          `}
        >
          <span
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"} text-white`}
          >
            {letter}
          </span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [letterIndex, setLetterIndex] = useState(0);
  const letters = "SMARTFLOW";
  const [hoveredLetters, setHoveredLetters] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Calculate number of cubes needed based on viewport size
  const cubeSize = 32; // 2rem = 32px
  const cols = Math.ceil(dimensions.width / cubeSize);
  const rows = Math.ceil(dimensions.height / cubeSize);
  const totalCubes = cols * rows;

  const cubes = Array.from({ length: totalCubes }, (_, i) => i);

  const handleCubeHover = () => {
    const nextLetter = letters[letterIndex];
    setHoveredLetters((prev) => [...prev, nextLetter]);
    setLetterIndex((current) => (current + 1) % letters.length);
  };

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0f2c]">
      {/* Cube grid background */}
      <div
        className="absolute inset-0 grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cubeSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cubeSize}px)`,
          zIndex: 1,
        }}
      >
        {cubes.map((index) => (
          <GlowingCube
            key={index}
            onHover={handleCubeHover}
            onHoverEnd={() => setHoveredIndex(null)}
            nextLetter={letters[letterIndex]}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-24 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-auto space-y-12 rounded-2xl bg-slate-900/20 p-12 backdrop-blur-md"
          >
            {/* Eyebrow text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-blue-400"
            >
              Software Engineering Excellence
            </motion.p>

            {/* Main headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Custom Software
                </span>
                <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Development Services
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300/90"
              >
                Transform your ideas into powerful solutions. We build scalable,
                innovative software that drives business growth and enhances
                user experience.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 -translate-y-full bg-gradient-to-r from-blue-600 to-blue-700 transition-transform duration-300 group-hover:translate-y-0" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  x: 5,
                  color: "#fff",
                }}
                className="flex items-center gap-2 text-base font-semibold text-slate-300 transition-colors"
              >
                View Our Work
                <span className="text-blue-400 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional ambient lighting */}
      <div
        className="bg-gradient-radial pointer-events-none absolute inset-0 from-blue-500/5 via-transparent to-transparent"
        style={{ zIndex: 2 }}
      ></div>
    </section>
  );
};

export default Hero;
