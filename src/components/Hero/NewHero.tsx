"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const NewHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const slideDuration = 10000; // 10 seconds
  const { openContactModal } = useModal();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const slides = [
    {
      image: "/images/hero/hero2.png",
      title: "Turn Your Vision Into Reality",
      description:
        "Unsure where to start? Let's discuss your architecture and strategy. Get expert advice tailored to your business needs, completely free of charge.",
      primaryButton: {
        label: "Book Free Consultation",
        action: () => {
          window.location.href = "tel:+19295590035";
        },
      },
      secondaryButton: {
        label: "Our Services",
        action: () => handleScrollToSection("features"),
      },
    },
    {
      image: "/images/hero/hero3.png",
      title: "The Future of Development",
      description:
        "Experience the next generation of software solutions. Built for modern teams, our platform scales with you from day one. Ready to build?",
      primaryButton: {
        label: "Get Started",
        action: () => openContactModal(),
      },
      secondaryButton: {
        label: "How We Work",
        action: () => handleScrollToSection("process"),
      },
    },
    {
      image: "/images/hero/hero4.png",
      title: "Proven Results, Global Impact",
      description:
        "We don't just write code; we deliver digital transformation. See how we have helped industry leaders modernize their infrastructure and scale their products.",
      primaryButton: {
        label: "View Our Work",
        action: () => handleScrollToSection("projects"),
      },
      secondaryButton: {
        label: "Our Team",
        action: () => handleScrollToSection("team"),
      },
    },
  ];

  // Mark initial load as complete after first render to trigger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    // Reset progress when slide changes
    setProgress(0);

    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
      setProgress(newProgress);
    }, 50); // Update progress every 50ms for smooth animation

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isPaused, currentSlide, slides.length, slideDuration]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#000814]"
    >
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
            {/* Background Image with Ken Burns effect via transform */}
            <motion.div
              initial={{ scale: 1.2, x: "2%" }}
              animate={
                isPaused
                  ? {}
                  : {
                      scale: 1.1,
                      x: "-2%",
                    }
              }
              transition={
                isPaused
                  ? { duration: 0 }
                  : {
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }
              }
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                quality={80}
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          </motion.div>
        ))}

        {/* Animated Overlay */}
        <div className="absolute inset-0 z-10">
          {/* Moving hexagonal grid */}
          <div
            className={`absolute inset-0 ${
              isPaused ? "" : "animate-slide-slow"
            }`}
            style={{
              backgroundImage: `
                linear-gradient(to right bottom, rgba(0,102,255,0.1) 1px, transparent 1px),
                linear-gradient(to left bottom, rgba(0,102,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
          <div
            className={`absolute inset-0 ${
              isPaused ? "" : "animate-slide-slower"
            }`}
            style={{
              backgroundImage: `
                linear-gradient(to right bottom, rgba(0,102,255,0.05) 1px, transparent 1px),
                linear-gradient(to left bottom, rgba(0,102,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Glowing orbs */}
          <div
            className={`absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px] ${
              isPaused ? "" : "animate-pulse-slow"
            }`}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px] ${
              isPaused ? "" : "animate-pulse-slow"
            }`}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/50 to-[#000814]" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex h-full items-center justify-center">
          <AnimatePresence mode="wait">
            {(() => {
              const currentSlideData = slides[currentSlide];
              // Use a unique key for initial load to force animation on first render
              const slideKey = isInitialLoad ? `initial-${currentSlide}` : currentSlide;
              return (
                <motion.div
                  key={slideKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
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
                    className="text-5xl font-bold tracking-tighter text-white [text-shadow:_0_1px_20px_rgb(59_130_246_/_0.3)] md:text-7xl"
                  >
                    {currentSlideData.title}
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
                    className="mx-auto mt-6 max-w-4xl text-base font-medium tracking-wider text-blue-200/90 md:text-lg"
                  >
                    {currentSlideData.description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                      duration: 1,
                      delay: 0.9,
                      type: "spring",
                      stiffness: 50,
                    }}
                    className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                  >
                    {/* Primary Button */}
                    <button
                      onClick={currentSlideData.primaryButton.action}
                      className="group flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 text-base font-medium text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-teal-300 hover:shadow-xl hover:shadow-teal-500/50 active:scale-100"
                    >
                      <span>{currentSlideData.primaryButton.label}</span>
                      <svg
                        className="h-5 w-5 text-gray-900 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>

                    {/* Secondary Button */}
                    <button
                      onClick={currentSlideData.secondaryButton.action}
                      className="rounded-lg border border-gray-400/50 bg-gray-900/60 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/80 hover:bg-gray-800/80 active:scale-100"
                    >
                      {currentSlideData.secondaryButton.label}
                    </button>
                  </motion.div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* Pause/Play Control - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-30">
          <button
            onClick={togglePause}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/60"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {/* Circular Progress Indicator */}
            <svg
              className="absolute inset-0 h-14 w-14 -rotate-90 transform"
              viewBox="0 0 56 56"
            >
              {/* Background circle */}
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - progress / 100)}`}
                className="transition-all duration-100 ease-linear"
              />
            </svg>

            {/* Play/Pause Icon */}
            <div className="relative flex items-center justify-center">
              {isPaused ? (
                // Play icon (triangle)
                <svg
                  className="ml-0.5 h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                // Pause icon (two bars)
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
