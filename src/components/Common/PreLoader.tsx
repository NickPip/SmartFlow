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
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-[#0a0a0a]">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative w-full max-w-md px-8">
        {/* Progress percentage with triangle indicator */}
        <div className="relative mb-4 flex items-center justify-center">
          <div 
            className="absolute flex flex-col items-center transition-all duration-300 ease-out"
            style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
          >
            <span className="mb-1 text-xl font-semibold text-white">
              {progress}%
            </span>
            <div className="h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-cyan-400"></div>
          </div>
        </div>

        {/* Loading bar container */}
        <div className="relative">
          {/* Background bar */}
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-800/50">
            {/* Filled bar with diagonal stripes */}
            <div
              className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Diagonal stripe pattern */}
              <div 
                className="absolute inset-0 animate-slide-stripes opacity-30"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.3) 10px, rgba(255, 255, 255, 0.3) 20px)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-white sm:text-xl font-sans">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;