"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
      1: "text-blue-700", // Darker blue
      2: "text-green-700", // Darker green
      3: "text-red-700", // Darker red
      4: "text-blue-900", // Navy blue
      5: "text-red-900", // Very dark red
      6: "text-cyan-800", // Dark cyan
      7: "text-gray-900", // Almost black
      8: "text-gray-700", // Dark gray
    };
    return colors[num] || "text-gray-900";
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
      className="relative h-8 w-8 cursor-pointer border-b-[3px] border-l-[3px] border-r-[3px] border-t-[3px] border-b-gray-600 border-l-white border-r-gray-600 border-t-white"
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
                ? "bg-red-600"
                : "bg-gray-300"
              : isHovered
                ? "bg-gray-300"
                : "bg-gray-400"
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
              className={`${isBomb ? "text-black" : getNumberColor(adjacentBombs)}`}
            >
              {isBomb ? "💣" : adjacentBombs > 0 ? adjacentBombs : ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

interface CountUpProps {
  start: number;
  end: number;
  duration: number;
  suffix?: string;
}

const CountUp = ({ start, end, duration, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [revealedCubes, setRevealedCubes] = useState(new Set<number>());
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Calculate grid size based on viewport and cube size
  const CUBE_SIZE = 32; // 2rem = 32px
  const GRID_COLS = isMounted && dimensions.width > 0 ? Math.ceil(dimensions.width / CUBE_SIZE) : 1;
  const GRID_ROWS = isMounted && dimensions.height > 0 ? Math.ceil(dimensions.height / CUBE_SIZE) : 1;
  const totalCubes = GRID_COLS * GRID_ROWS;
  const BOMB_PERCENTAGE = 0.15; // 15% of cells will be bombs

  // Generate bombs function
  const generateBombs = () => {
    if (totalCubes === 0) return new Set<number>();
    const bombSet = new Set<number>();
    const count = Math.floor(totalCubes * BOMB_PERCENTAGE);
    while (bombSet.size < count) {
      bombSet.add(Math.floor(Math.random() * totalCubes));
    }
    return bombSet;
  };

  // Generate bombs - using state to allow regeneration
  const [bombs, setBombs] = useState<Set<number>>(() => {
    if (typeof window === "undefined") {
      return new Set<number>();
    }
    return generateBombs();
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

  const handleRestart = () => {
    setGameOver(false);
    setRevealedCubes(new Set());
    // Regenerate bombs for a new game
    setBombs(generateBombs());
  };

  // Initialize dimensions and handle resize - only on client
  useEffect(() => {
    setIsMounted(true);
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cubes = Array.from({ length: totalCubes }, (_, i) => i);

  // Add ref and inView state for stats animation
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  // Don't render grid until mounted to prevent hydration mismatch
  if (!isMounted || dimensions.width === 0 || dimensions.height === 0) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-[#c0c0c0]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#c0c0c0]">
      {/* Minesweeper grid */}
      <div
        className="absolute inset-0 grid gap-0 bg-[#c0c0c0]"
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

      {/* Game Over Overlay with Start Again Button */}
      {gameOver && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-white/95 p-8 text-center shadow-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Game Over!
            </h2>
            <p className="mb-6 text-gray-600">You hit a bomb! 💣</p>
            <button
              onClick={handleRestart}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg active:scale-100"
            >
              Start Again
            </button>
          </motion.div>
        </div>
      )}

      {/* Content overlay */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 py-24 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-auto space-y-12 rounded-2xl border-2 border-gray-400 bg-white/90 p-12 backdrop-blur-sm"
          >
            {/* Eyebrow text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-blue-600"
            >
              About Our Company
            </motion.p>

            {/* Main headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
              >
                <span className="block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  We Build
                </span>
                <span className="mt-2 block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600"
              >
                Founded in 2024, we are a team of passionate developers,
                designers, and innovators dedicated to creating exceptional
                digital experiences. Our mission is to transform complex
                challenges into elegant solutions that drive business growth.
              </motion.p>

              {/* Stats */}
              <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3"
              >
                <div>
                  <motion.div
                    className="text-3xl font-bold text-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {isInView && (
                      <CountUp start={0} end={10} duration={2} suffix="+" />
                    )}
                  </motion.div>
                  <div className="text-sm text-gray-500">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {isInView && (
                      <CountUp start={0} end={7} duration={2} suffix="+" />
                    )}
                  </motion.div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {isInView && (
                      <CountUp start={0} end={100} duration={2} suffix="%" />
                    )}
                  </motion.div>
                  <div className="text-sm text-gray-500">
                    Client Satisfaction
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
