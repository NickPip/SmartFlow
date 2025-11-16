const Contact = () => {
  return (
    <section
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
              <span className="animate-fade-in-up mb-4 block text-lg font-semibold text-[#4B6BFB]">
                Let&apos;s Connect
              </span>
              <h2 className="animate-fade-in-up mb-6 text-3xl font-bold text-white [animation-delay:200ms] sm:text-4xl md:text-[40px] md:leading-tight">
                Ready to Transform Your Ideas into Reality?
              </h2>
              <p className="animate-fade-in-up mb-12 text-lg leading-relaxed text-gray-400 [animation-delay:400ms]">
                We specialize in developing cutting-edge solutions using the
                latest technologies. Whether you need a custom software
                solution, web application, or technical consultation, we&apos;re
                here to help.
              </p>

              <div className="mb-12 flex flex-col space-y-8 lg:mb-0">
                <div className="animate-fade-in-left flex items-center [animation-delay:600ms]">
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
                    <p className="text-base text-gray-400">USA, Delaware
                    </p>
                  </div>
                </div>

                <div className="animate-fade-in-left flex items-center [animation-delay:800ms]">
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
                      atomicimpacteng@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="animate-fade-in-up rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 [animation-delay:400ms] hover:bg-white/10 sm:p-10">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
