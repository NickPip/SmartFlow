"use client";

import { useEffect, useRef, useState } from "react";

export default function Process() {
  const steps = [
    {
      title: "Discovery",
      desc: "Requirements, research, and project planning",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* Bulb outline */}
          <path d="M12 3.5c3.59 0 6.5 2.78 6.5 6.2 0 2.02-.94 3.45-2.39 4.72-.74.64-1.11 1.59-1.11 2.58v.25H8.99v-.25c0-.99-.37-1.94-1.11-2.58C6.44 13.15 5.5 11.72 5.5 9.7 5.5 6.28 8.41 3.5 12 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Filament */}
          <path d="M9.5 10.5c.7-.8 1.6-1.2 2.5-1.2s1.8.4 2.5 1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Base */}
          <path d="M9 18.5h6M10 20.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Design",
      desc: "Wireframes, UI/UX, prototypes, and testing",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Development",
      desc: "Agile delivery, code reviews, and QA",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <polyline points="8 6 3 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="16 6 21 12 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Launch",
      desc: "Deployments and go‑to‑market readiness",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* Rocket body */}
          <path d="M12 3c3 2 5 6 5 9 0 2.485-2.239 4.5-5 4.5S7 14.485 7 12c0-3 2-7 5-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Window */}
          <circle cx="12" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          {/* Fins */}
          <path d="M9 15l-3 3M15 15l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Flame */}
          <path d="M12 16.5V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Support",
      desc: "Maintenance, updates, and enhancements",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 -> 100
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let raf: number;
    const start = performance.now();
    const durationMs = 5200; // total sweep duration (slower fill)
    function tick(now: number) {
      const t = Math.min((now - start) / durationMs, 1);
      setProgress(t * 100);
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted]);

  return (
    <section id="process" className="bg-[#0b1220] py-20">
      <div ref={containerRef} className="container px-4">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-300">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">Launch</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            A proven development process that delivers results
          </p>
        </div>

        <div className="relative">
          {/* Base line */}
          <div className="pointer-events-none absolute left-0 right-0 top-28 hidden h-[3px] -translate-y-1/2 rounded bg-slate-700 md:block" />
          {/* Animated progress line */}
          <div
            className="pointer-events-none absolute left-0 top-28 hidden h-[3px] -translate-y-1/2 rounded bg-gradient-to-r from-teal-400 to-emerald-400 md:block"
            style={{ width: `${progress}%` }}
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((s, idx) => {
              const threshold = (idx / (steps.length - 1)) * 100;
              const reached = progress >= threshold - 0.5; // small tolerance
              return (
                <div key={s.title} className="flex flex-col items-center text-center">
                  <div
                    className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full text-[#0b1220] transition-shadow ${
                      reached
                        ? "bg-teal-400 shadow-[0_0_0_8px_rgba(45,212,191,0.15),0_0_30px_rgba(16,185,129,0.35)]"
                        : "bg-teal-400/70"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="mt-7 mb-1 text-base font-semibold text-white">{s.title}</h3>
                  <p className="text-sm text-slate-300">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


