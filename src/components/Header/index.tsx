"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "History", href: "/history" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        sticky ? "bg-[#0a0f2c]/95 py-2" : "bg-transparent py-3"
      }`}
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div
          className="absolute h-[1px] w-[1px] animate-pulse bg-white"
          style={{ left: "15%", top: "30%" }}
        ></div>
        <div
          className="absolute h-[2px] w-[2px] animate-pulse bg-white"
          style={{ left: "45%", top: "20%" }}
        ></div>
        <div
          className="absolute h-[1px] w-[1px] animate-pulse bg-white"
          style={{ left: "75%", top: "40%" }}
        ></div>
        <div
          className="absolute h-[1.5px] w-[1.5px] animate-pulse bg-white"
          style={{ left: "85%", top: "25%" }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <svg
                  viewBox="0 0 24 32"
                  className="animate-hover h-12 w-12"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Rocket body */}
                  <path
                    className="fill-blue-500 stroke-blue-400"
                    strokeWidth="1"
                    d="M12 12L14 17L14 26L12 29L10 26L10 17L12 12Z"
                  />
                  {/* Rocket fins */}
                  <path
                    className="fill-blue-600 stroke-blue-400"
                    strokeWidth="1"
                    d="M10 24L8 26L8 28L10 26M14 24L16 26L16 28L14 26"
                  />
                  {/* Window */}
                  <circle
                    cx="12"
                    cy="20"
                    r="1.5"
                    className="fill-white/90 stroke-blue-400"
                    strokeWidth="0.5"
                  />
                  {/* Engine flames */}
                  <g className="animate-pulse">
                    <path
                      className="fill-orange-500/80"
                      d="M11 29L12 32L13 29L12 28.5L11 29"
                    />
                    <path
                      className="fill-yellow-500/80"
                      d="M11.5 29L12 31L12.5 29L12 28.75L11.5 29"
                    />
                  </g>
                  {/* Stars */}
                  <g className="animate-twinkle">
                    <circle cx="6" cy="16" r="0.3" className="fill-white" />
                    <circle cx="18" cy="18" r="0.3" className="fill-white" />
                    <circle cx="16" cy="14" r="0.3" className="fill-white" />
                    <circle cx="8" cy="22" r="0.3" className="fill-white" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-0">
                <div className="group relative h-6 w-[180px]">
                  <div className="absolute left-0 top-0 text-lg font-bold text-white">
                    <span className="block group-hover:hidden">AI</span>
                    <div className="group-hover:animate-typing invisible absolute left-0 top-0 w-0 overflow-hidden whitespace-nowrap border-r-2 border-blue-500 group-hover:visible">
                      ATOMIC IMPACT
                    </div>
                  </div>
                </div>
                <div className="h-4 w-[180px]">
                  <span className="text-xs font-medium text-gray-300">
                    ENGINEERING
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      pathUrl === item.href
                        ? "text-blue-500"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-slate-800/50 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute w-full bg-[#0a0f2c] pb-3 pt-2 md:hidden`}
      >
        <div className="space-y-1 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathUrl === item.href
                  ? "bg-slate-800 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
