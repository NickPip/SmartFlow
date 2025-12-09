"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathUrl = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { openContactModal } = useModal();
  const [activeSection, setActiveSection] = useState("");
  const [showTypingAnimation, setShowTypingAnimation] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Sticky Navbar
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Trigger typing animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypingAnimation(true);
      // After animation completes (3.5s), hide cursor border
      const completeTimer = setTimeout(() => {
        setTypingComplete(true);
      }, 4000); // 3.5s animation + 0.5s buffer
      return () => clearTimeout(completeTimer);
    }, 500); // Small delay after page load
    return () => clearTimeout(timer);
  }, []);

  const menuItems = useMemo(
    () => [
      { label: "Home", section: "home" },
      { label: "Our Work", section: "projects" },  
      { label: "Team", section: "team" },
      { label: "What We Do", section: "features" },
      { label: "Contact", section: "contact" },
    ],
    [],
  );

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // First close the menu
      setIsMenuOpen(false);

      // Small delay to allow menu close animation
      setTimeout(() => {
        const offset = 80; // Height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setActiveSection(sectionId);
      }, 300); // Delay matches the menu close animation duration
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.section);
      const scrollPosition = window.scrollY + 150; // Add offset for better detection

      // Find the current section in view
      let currentSection = "";
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 150;
          const height = element.offsetHeight;
          const bottom = top + height;

          // Check if scroll position is within this section
          if (scrollPosition >= top && scrollPosition <= bottom) {
            currentSection = section;
          }
        }
      });

      // Handle case when at top of page (home section)
      if (scrollPosition < 200 && !currentSection) {
        currentSection = "home";
      }

      // Handle case when past the last section (contact should be active)
      if (!currentSection && sections.length > 0) {
        const lastSection = sections[sections.length - 1];
        const lastElement = document.getElementById(lastSection);
        if (lastElement && scrollPosition > lastElement.offsetTop - 100) {
          currentSection = lastSection;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Set initial active section to "home" on mount
    setActiveSection("home");
    
    // Wait for page to load, then check scroll position
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    <header
      className={`fixed top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
        sticky ? "bg-[#030408]/95 py-2" : "bg-[#020305]/90 py-3"
      }`}
    >
      {/* Cosmic background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="from-purple-900/3 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent"></div>
        {/* Stars */}
        <div
          className="pointer-events-none absolute h-[2px] w-[2px] animate-pulse bg-white/30"
          style={{ left: "15%", top: "30%" }}
        ></div>
        <div
          className="absolute h-[3px] w-[3px] animate-pulse bg-white/25"
          style={{ left: "45%", top: "20%" }}
        ></div>
        <div
          className="absolute h-[2px] w-[2px] animate-pulse bg-white/35"
          style={{ left: "75%", top: "40%" }}
        ></div>
        <div
          className="absolute h-[2.5px] w-[2.5px] animate-pulse bg-white/30"
          style={{ left: "85%", top: "25%" }}
        ></div>
        {/* Additional stars */}
        <div
          className="absolute h-[2px] w-[2px] animate-pulse bg-white/25"
          style={{ left: "25%", top: "15%" }}
        ></div>
        <div
          className="absolute h-[2px] w-[2px] animate-pulse bg-white/30"
          style={{ left: "55%", top: "35%" }}
        ></div>
        <div
          className="absolute h-[3px] w-[3px] animate-pulse bg-white/20"
          style={{ left: "65%", top: "15%" }}
        ></div>
        <div
          className="absolute h-[2.5px] w-[2.5px] animate-pulse bg-white/35"
          style={{ left: "35%", top: "45%" }}
        ></div>
        <div
          className="absolute h-[2px] w-[2px] animate-pulse bg-white/30"
          style={{ left: "95%", top: "35%" }}
        ></div>
        <div
          className="absolute h-[2px] w-[2px] animate-pulse bg-white/25"
          style={{ left: "5%", top: "25%" }}
        ></div>
        <div
          className="absolute h-[3px] w-[3px] animate-pulse bg-white/20"
          style={{ left: "88%", top: "12%" }}
        ></div>
        <div
          className="absolute h-[2px] w-[2px] animate-pulse bg-white/30"
          style={{ left: "12%", top: "42%" }}
        ></div>
        {/* Star clusters */}
        <div
          className="absolute h-[1.5px] w-[1.5px] animate-pulse bg-white/40"
          style={{ left: "28%", top: "38%" }}
        ></div>
        <div
          className="absolute h-[1.5px] w-[1.5px] animate-pulse bg-white/40"
          style={{ left: "29%", top: "40%" }}
        ></div>
        <div
          className="absolute h-[1.5px] w-[1.5px] animate-pulse bg-white/40"
          style={{ left: "27%", top: "39%" }}
        ></div>
        <div
          className="absolute h-[1.5px] w-[1.5px] animate-pulse bg-white/40"
          style={{ left: "72%", top: "28%" }}
        ></div>
        <div
          className="absolute h-[1.5px] w-[1.5px] animate-pulse bg-white/40"
          style={{ left: "73%", top: "30%" }}
        ></div>
        <div
          className="absolute h-[1.5px] w-[1.5px] animate-pulse bg-white/40"
          style={{ left: "71%", top: "29%" }}
        ></div>
        {/* Additional cosmic dust */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20, 20, 35, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 20% 30%, rgba(25, 25, 45, 0.1) 0%, transparent 40%),
                             radial-gradient(circle at 80% 20%, rgba(20, 20, 35, 0.15) 0%, transparent 35%)`,
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 z-10 relative">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <svg
                  viewBox="0 0 24 32"
                  className="h-12 w-12 animate-hover"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Rocket body */}
                  <path
                    className="fill-indigo-600 stroke-indigo-500"
                    strokeWidth="1"
                    d="M12 12L14 17L14 26L12 29L10 26L10 17L12 12Z"
                  />
                  {/* Rocket fins */}
                  <path
                    className="fill-indigo-700 stroke-indigo-500"
                    strokeWidth="1"
                    d="M10 24L8 26L8 28L10 26M14 24L16 26L16 28L14 26"
                  />
                  {/* Window */}
                  <circle
                    cx="12"
                    cy="20"
                    r="1.5"
                    className="fill-white/80 stroke-indigo-500"
                    strokeWidth="0.5"
                  />
                  {/* Engine flames */}
                  <g className="animate-pulse">
                    <path
                      className="fill-orange-600/70"
                      d="M11 29L12 32L13 29L12 28.5L11 29"
                    />
                    <path
                      className="fill-yellow-500/70"
                      d="M11.5 29L12 31L12.5 29L12 28.75L11.5 29"
                    />
                  </g>
                  {/* Stars */}
                  <g className="animate-twinkle">
                    <circle cx="6" cy="16" r="0.3" className="fill-white/40" />
                    <circle cx="18" cy="18" r="0.3" className="fill-white/40" />
                    <circle cx="16" cy="14" r="0.3" className="fill-white/40" />
                    <circle cx="8" cy="22" r="0.3" className="fill-white/40" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-0">
                <div className="relative h-6 w-[180px]">
                  <div className="absolute left-0 top-0 text-lg font-bold text-white/80">
                    {!showTypingAnimation ? (
                      <span className="block">AI</span>
                    ) : (
                      <div
                        className={`w-[180px] overflow-hidden whitespace-nowrap ${
                          !typingComplete ? "border-r-2 border-indigo-600 animate-typing" : ""
                        }`}
                      >
                        ATOMIC IMPACT
                      </div>
                    )}
                  </div>
                </div>
                <div className="h-4 w-[180px]">
                  <span className="text-xs font-medium text-gray-500">
                    ENGINEERING
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Smooth slide from right to center */}
          <div className="hidden md:flex absolute inset-0 items-center pointer-events-none">
            <motion.nav
              initial={false}
              animate={{
                x: sticky ? -220 : 250, // Offset left by 120px when sticky to create space for button
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="pointer-events-auto"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <ul className="flex items-center space-x-12">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleScrollToSection(item.section)}
                      className={`group relative cursor-pointer text-sm font-medium transition-all duration-300 ${
                        activeSection === item.section
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {/* Underline for active section */}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${
                          activeSection === item.section
                            ? "w-full opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      />
                      {/* Hover underline effect for non-active items */}
                      {activeSection !== item.section && (
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white/60 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>

          {/* Get Started button - Smooth slide from right */}
          <motion.div
            initial={false}
            animate={{
              opacity: sticky ? 1 : 0,
              x: sticky ? 0 : 100,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`hidden flex-shrink-0 md:block z-10 relative ${
              sticky ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <button
              type="button"
              onClick={() => openContactModal()}
              className="z-[60] cursor-pointer rounded-lg bg-teal-400 px-6 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-teal-300 whitespace-nowrap"
            >
              Get started
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="z-[60] inline-flex items-center justify-center rounded-md p-2 text-white transition-colors duration-200 hover:bg-slate-800/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      open: {
                        d: "M6 18L18 6M6 6l12 12",
                        transition: { duration: 0.3 },
                      },
                      closed: {
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
                        transition: { duration: 0.3 },
                      },
                    }}
                  />
                </svg>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute z-50 w-full overflow-hidden bg-[#030408]/95 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="space-y-1 px-4 py-3"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.2 }}
                >
                  <button
                    onClick={() => handleScrollToSection(item.section)}
                    className={`relative block w-full cursor-pointer rounded-md px-3 py-2 text-left text-base font-medium transition-all duration-300 ${
                      activeSection === item.section
                        ? "bg-gray-800/50 text-white"
                        : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {/* Underline for active section in mobile */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-teal-400 transition-all duration-300 ${
                        activeSection === item.section
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 * (menuItems.length + 1),
                  duration: 0.2,
                }}
              >
                <button
                  onClick={() => {
                    openContactModal();
                    setIsMenuOpen(false);
                  }}
                  className="mt-4 block w-full cursor-pointer rounded-lg bg-teal-400 px-4 py-2.5 text-center text-base font-medium text-gray-900 transition-colors hover:bg-teal-300"
                >
                  Get started
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
