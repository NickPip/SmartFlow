"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial gradient overlay */}
      <div className="bg-gradient-radial absolute inset-0 from-blue-500/10 via-transparent to-transparent"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-24 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Eyebrow text */}
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Software Engineering Excellence
            </p>

            {/* Main headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">Custom Software</span>
              <span className="mt-2 block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Development Services
              </span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Transform your ideas into powerful solutions. We build scalable,
              innovative software that drives business growth and enhances user
              experience.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:from-blue-600 hover:to-blue-700"
              >
                Let's Talk
              </motion.button>
              <button className="text-base font-semibold text-slate-300 transition-colors hover:text-white">
                View Our Work →
              </button>
            </div>
          </motion.div>

          {/* Tech stack icons or additional visual elements can be added here */}
        </div>
      </div>

      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-64 w-64 translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
    </div>
  );
};

export default Hero;
