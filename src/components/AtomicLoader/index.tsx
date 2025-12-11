"use client";

import { useEffect, useState, useRef } from "react";

interface AtomicLoaderProps {
  isLoading: boolean;
}

function AtomicLoader({ isLoading }: AtomicLoaderProps) {
  const [isVisible, setIsVisible] = useState(isLoading);
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const minDisplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isLoading) {
      // Reset everything when loading starts
      setIsVisible(true);
      setShouldRender(true);
      setProgress(0);
      startTimeRef.current = Date.now();

      // Animate progress bar
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) return prev; // Cap at 95% until loading completes
          return prev + Math.random() * 15;
        });
      }, 100);

      // Clear any existing minimum display timer
      if (minDisplayTimerRef.current) {
        clearTimeout(minDisplayTimerRef.current);
      }
    } else {
      // Loading completed - ensure minimum 1.5s display time
      const elapsed = startTimeRef.current
        ? Date.now() - startTimeRef.current
        : 0;
      const remainingTime = Math.max(0, 1500 - elapsed);

      // Complete progress bar
      setProgress(100);

      // Clear progress interval
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      // Wait for minimum display time, then fade out
      minDisplayTimerRef.current = setTimeout(() => {
        setIsVisible(false);
        // Unmount after fade-out transition completes (700ms)
        setTimeout(() => {
          setShouldRender(false);
        }, 700);
      }, remainingTime);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (minDisplayTimerRef.current) {
        clearTimeout(minDisplayTimerRef.current);
      }
    };
  }, [isLoading]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 transition-opacity duration-700 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Progress Bar */}
      <div className="absolute left-0 top-0 h-1 bg-slate-800">
        <div
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Animated Text */}
      <div className="atomic-loader">Atomic Impact</div>
    </div>
  );
}

export default AtomicLoader;
