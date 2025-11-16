"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Nikoloz",
    role: "Founder & CEO",
    description:
      "Visionary leader with expertise in AI and software development. Building the future of technology.",
    image: "/images/team/nikoloz.png",
    bgColor: "bg-emerald-600",
  },
  {
    name: "Ed",
    role: "Founder & CTO",
    description:
      "Expert developer with deep knowledge in modern web technologies and system architecture. Creating robust and scalable solutions.",
    image: "/images/team/ed.png",
    bgColor: "bg-blue-600",
  },
  {
    name: "Iva",
    role: "Chief Commercial Officer (CCO)",
    description:
      "Driving growth through partnerships, client success, and go‑to‑market strategy across our product and services portfolio.",
    image: "/images/team/iva.png",
    bgColor: "bg-teal-600",
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
