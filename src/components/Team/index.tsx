"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Nikoloz",
    role: "Founder & CEO",
    description:
      "Visionary leader with expertise in AI and software development. Building the future of technology.",
    image: "/images/team/nikoloz.png",
    bgColor: "bg-emerald-600",
    linkedinLink: "https://www.linkedin.com/in/pipchest/",
  },
  {
    name: "Ed",
    role: "Founder & CTO",
    description:
      "Expert developer with deep knowledge in modern web technologies and system architecture. Creating robust and scalable solutions.",
    image: "/images/team/ed.png",
    bgColor: "bg-blue-600",
    linkedinLink: "https://www.linkedin.com/in/nguyen-duy-khuong-183624194/?originalSubdomain=vn",
  },
  {
    name: "Iva",
    role: "Founder & CCO",
    description:
      "Senior Product Officer with 5+ years leading product strategy, brand management, and building partnerships with global manufacturing companies worldwide.",
    image: "/images/team/iva.png",
    bgColor: "bg-teal-600",
    linkedinLink: "https://www.linkedin.com/in/ivakaloiani/",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative overflow-hidden bg-black py-24">
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Passionate experts bringing innovation to life
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div
                className={`relative mx-auto h-60 w-60 overflow-hidden rounded-full sm:h-64 sm:w-64 md:h-64 md:w-64 lg:h-72 lg:w-72 ${member.bgColor} transition-all duration-500`}
              >
                {member.image ? (
                  // Image Container with Pixel Art Preservation
                  <div className="relative h-full w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain transition-all duration-500 group-hover:scale-110"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                ) : null}

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/80 group-hover:opacity-100">
                  <div className="transform px-6 text-center transition-all duration-500">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-emerald-400">{member.role}</p>
                    <p className="mt-2 text-sm text-gray-300">
                      {member.description}
                    </p>
                    {/* LinkedIn Icon */}
                    <div className="mt-4 flex justify-center">
                      <Link
                        href={member.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-[#0077B5]"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
