"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GlowingCube = ({
  onHover,
  onHoverEnd,
  isBomb,
  isRevealed,
  onReveal,
  adjacentBombs,
}: {
  onHover: () => void;
  onHoverEnd: () => void;
  isBomb: boolean;
  isRevealed: boolean;
  onReveal: () => void;
  adjacentBombs: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getNumberColor = (num: number) => {
    const colors: { [key: number]: string } = {
      1: "text-blue-500",
      2: "text-green-500",
      3: "text-red-500",
      4: "text-purple-500",
      5: "text-yellow-500",
      6: "text-cyan-500",
      7: "text-orange-500",
      8: "text-pink-500",
    };
    return colors[num] || "text-white";
  };

  const handleClick = () => {
    if (!isRevealed) {
      onReveal();
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 500);
    onHoverEnd();
  };

  return (
    <div
      className="relative h-8 w-8 cursor-pointer border-[1px] border-slate-600"
      style={{ margin: 0 }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ease-out
          ${
            isRevealed
              ? isBomb
                ? "bg-red-500/50"
                : "bg-slate-700"
              : isHovered
                ? "bg-slate-600"
                : "bg-slate-800"
          }
        `}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center text-sm font-bold transition-all duration-300 ease-out
            ${isRevealed ? "opacity-100" : "opacity-0"}
          `}
        >
          {isRevealed && (
            <span
              className={`${isBomb ? "text-white" : getNumberColor(adjacentBombs)}`}
            >
              {isBomb ? "💣" : adjacentBombs > 0 ? adjacentBombs : ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [revealedCubes, setRevealedCubes] = useState(new Set<number>());
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Calculate grid size based on viewport and cube size
  const CUBE_SIZE = 32; // 2rem = 32px
  const GRID_COLS = Math.ceil(dimensions.width / CUBE_SIZE);
  const GRID_ROWS = Math.ceil(dimensions.height / CUBE_SIZE);
  const totalCubes = GRID_COLS * GRID_ROWS;
  const BOMB_PERCENTAGE = 0.15; // 15% of cells will be bombs
  const BOMB_COUNT = Math.floor(totalCubes * BOMB_PERCENTAGE);

  // Generate bombs
  const [bombs] = useState(() => {
    const bombSet = new Set<number>();
    while (bombSet.size < BOMB_COUNT) {
      bombSet.add(Math.floor(Math.random() * totalCubes));
    }
    return bombSet;
  });

  const getAdjacentCubes = (index: number) => {
    const row = Math.floor(index / GRID_COLS);
    const col = index % GRID_COLS;
    const adjacent: number[] = [];

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newRow = row + i;
        const newCol = col + j;
        if (
          newRow >= 0 &&
          newRow < GRID_ROWS &&
          newCol >= 0 &&
          newCol < GRID_COLS
        ) {
          adjacent.push(newRow * GRID_COLS + newCol);
        }
      }
    }
    return adjacent;
  };

  const countAdjacentBombs = (index: number) => {
    const adjacent = getAdjacentCubes(index);
    return adjacent.filter((idx) => bombs.has(idx)).length;
  };

  const handleReveal = (index: number) => {
    if (gameOver) return;

    if (bombs.has(index)) {
      setGameOver(true);
      setRevealedCubes(new Set(Array.from(bombs)));
    } else {
      const newRevealed = new Set(revealedCubes);
      const revealArea = (idx: number) => {
        if (newRevealed.has(idx)) return;
        newRevealed.add(idx);

        if (countAdjacentBombs(idx) === 0) {
          getAdjacentCubes(idx).forEach((adjacent) => {
            if (!bombs.has(adjacent)) {
              revealArea(adjacent);
            }
          });
        }
      };

      revealArea(index);
      setRevealedCubes(newRevealed);
    }
  };

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cubes = Array.from({ length: totalCubes }, (_, i) => i);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0f2c]">
      {/* Full-screen Minesweeper grid */}
      <div
        className="fixed inset-0 grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, ${CUBE_SIZE}px)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, ${CUBE_SIZE}px)`,
        }}
      >
        {cubes.map((index) => (
          <GlowingCube
            key={index}
            onHover={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            isBomb={bombs.has(index)}
            isRevealed={revealedCubes.has(index)}
            onReveal={() => handleReveal(index)}
            adjacentBombs={countAdjacentBombs(index)}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-24 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-auto space-y-12 rounded-2xl bg-slate-900/20 p-12 backdrop-blur-md"
          >
            {/* Eyebrow text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-blue-400"
            >
              Software Engineering Excellence
            </motion.p>

            {/* Main headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Custom Software
                </span>
                <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Development Services
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300/90"
              >
                Transform your ideas into powerful solutions. We build scalable,
                innovative software that drives business growth and enhances
                user experience.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 -translate-y-full bg-gradient-to-r from-blue-600 to-blue-700 transition-transform duration-300 group-hover:translate-y-0" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  x: 5,
                  color: "#fff",
                }}
                className="flex items-center gap-2 text-base font-semibold text-slate-300 transition-colors"
              >
                View Our Work
                <span className="text-blue-400 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional ambient lighting */}
      <div
        className="bg-gradient-radial pointer-events-none absolute inset-0 from-blue-500/5 via-transparent to-transparent"
        style={{ zIndex: 2 }}
      ></div>
    </section>
  );
};

export default Hero;
