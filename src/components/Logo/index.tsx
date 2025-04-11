import { motion } from "framer-motion";
import { useState } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-12 w-12 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotate: isHovered ? 360 : 0,
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
    >
      {/* Logo design - you can replace this with your own logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-10 w-10 rounded-lg bg-blue-600 p-2">
          <span className="block text-center text-xl font-bold text-white">
            AI
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;
