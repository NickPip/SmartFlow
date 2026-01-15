"use client";

import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#1e293b]">
        {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-[800px] w-[800px] animate-spin-slow rounded-full bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-teal-500/20 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl" style={{ animation: "spin-slow 20s linear infinite reverse" }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 opacity-20 blur-xl"></div>
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-teal-500/30 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 sm:text-4xl">
                AI
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
              AI Engineering
            </span>
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400 sm:text-base">
            Building Digital Excellence
          </p>
        </div>

        {/* Animated Loader */}
        <div className="mb-6 w-64 animate-fade-in-up opacity-0 sm:w-80" style={{ animationDelay: "0.4s" }}>
          <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-700/50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 animate-bounce rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            ></div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PreLoader;