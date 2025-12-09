"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-20 overflow-hidden bg-[#0B1120] py-20 lg:py-[120px]"
    >
      {/* Gradient Effects with Animation */}
      <div className="absolute left-0 top-0 -z-0 h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-[600px] w-[600px] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-gradient-to-l from-primary/5 to-purple-500/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 lg:mb-0">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-4 block text-lg font-semibold text-[#4B6BFB]"
              >
                Let&apos;s Connect
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-tight"
              >
                Ready to Transform Your Ideas into Reality?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 text-lg leading-relaxed text-gray-400"
              >
                We specialize in developing cutting-edge solutions using the
                latest technologies. Whether you need a custom software
                solution, web application, or technical consultation, we&apos;re
                here to help.
              </motion.p>

              <div className="mb-12 flex flex-col space-y-8 lg:mb-0">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.3 }}
                  className="flex items-center"
                >
                  <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[#4B6BFB]/10 transition-transform hover:scale-110">
                    <svg
                      className="h-8 w-8 text-[#4B6BFB]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Development Hub
                    </h3>
                    <p className="text-base text-gray-400">2nd St, New York, NY 10003, USA
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.4 }}
                  className="flex items-center"
                >
                  <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[#4B6BFB]/10 transition-transform hover:scale-110">
                    <svg
                      className="h-8 w-8 text-[#4B6BFB]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Technical Support
                    </h3>
                    <p className="text-base text-gray-400">
                      atomicimpact@tech.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.5 }}
                  className="flex items-center"
                >
                  <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[#4B6BFB]/10 transition-transform hover:scale-110">
                    <svg
                      className="h-8 w-8 text-[#4B6BFB]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Phone Support
                    </h3>
                    <p className="text-base text-gray-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full px-4 lg:w-5/12 xl:w-4/12"
          >
            <div className="rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 sm:p-10">
              <h3 className="mb-8 text-2xl font-bold text-white">
                Start Your Project
              </h3>
              <form>
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base text-white transition-all duration-300 placeholder:text-gray-500 hover:border-white/20 focus:border-[#4B6BFB] focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Work Email*
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base text-white transition-all duration-300 placeholder:text-gray-500 hover:border-white/20 focus:border-[#4B6BFB] focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Project Type*
                  </label>
                  <select className="w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base text-white transition-all duration-300 hover:border-white/20 focus:border-[#4B6BFB] focus:outline-none">
                    <option value="" className="bg-[#0B1120] text-gray-500">
                      Select project type
                    </option>
                    <option value="web" className="bg-[#0B1120]">
                      Web Development
                    </option>
                    <option value="mobile" className="bg-[#0B1120]">
                      Mobile App
                    </option>
                    <option value="ai" className="bg-[#0B1120]">
                      AI Solution
                    </option>
                    <option value="consulting" className="bg-[#0B1120]">
                      Technical Consulting
                    </option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base text-white transition-all duration-300 placeholder:text-gray-500 hover:border-white/20 focus:border-[#4B6BFB] focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#4B6BFB] px-6 py-3 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#4B6BFB]/90 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
