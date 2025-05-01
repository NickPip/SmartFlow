import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

const TypeWriter = ({
  text,
  className = "",
  trigger = false,
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (trigger && !isTyping) {
      setIsTyping(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (!trigger) {
      setDisplayText("");
      setIsTyping(false);
    }
  }, [trigger, text, isTyping]);

  return (
    <motion.span className={className}>
      {trigger ? displayText : text}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

export default TypeWriter;
