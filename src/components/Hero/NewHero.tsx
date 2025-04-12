"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const NewHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/hero/hero2.png",
    "/images/hero/hero3.png",
    "/images/hero/hero3.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#000814]">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            currentSlide === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
              >
                {/* Background Image with Ken Burns effect */}
                <motion.div
                  initial={{ scale: 1.2, x: 100 }}
                  animate={{ scale: 1, x: -100 }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform"
                    style={{
                      backgroundImage: `url(${slide})`,
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                </motion.div>

                {/* Animated Overlay */}
                <div className="absolute inset-0">
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
                <div className="relative z-10 flex h-full items-center justify-center">
                  <div className="text-center">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-6xl font-bold text-white md:text-8xl"
                    >
                      Accelerate your workflow
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                    >
                      Build, test, and deploy faster with our integrated
                      platform.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-blue-500" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NewHero;
