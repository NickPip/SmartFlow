"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const NewHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/images/hero/hero2.png",
      title: "Accelerate your workflow",
      description:
        "Build, test, and deploy faster with our integrated platform.",
    },
    {
      image: "/images/hero/hero3.png",
      title: "Innovative Solutions",
      description:
        "Transform your ideas into reality with cutting-edge technology.",
    },
    {
      image: "/images/hero/hero4.png",
      title: "Future of Development",
      description: "Experience the next generation of software development.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#000814]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            {/* Background Image with Ken Burns effect */}
            <motion.div
              initial={{ scale: 1.2, x: "2%" }}
              animate={{ scale: 1.1, x: "-2%" }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0"
            >
              <div
                className="duration-2000 absolute inset-0 bg-cover bg-center transition-all"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Animated Overlay */}
        <div className="absolute inset-0 z-10">
          {/* Moving hexagonal grid */}
          <div
            className="animate-slide-slow absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right bottom, rgba(0,102,255,0.1) 1px, transparent 1px),
                linear-gradient(to left bottom, rgba(0,102,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
          <div
            className="animate-slide-slower absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right bottom, rgba(0,102,255,0.05) 1px, transparent 1px),
                linear-gradient(to left bottom, rgba(0,102,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Glowing orbs */}
          <div className="animate-pulse-slow absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="animate-pulse-slow absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px]" />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/50 to-[#000814]" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex h-full items-center justify-center">
          <AnimatePresence mode="wait">
            <div key={currentSlide} className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 50,
                }}
                className="text-6xl font-bold text-white md:text-8xl"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 50,
                }}
                className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
