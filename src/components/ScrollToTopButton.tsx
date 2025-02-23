"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="p-3 text-white rounded-full shadow-lg focus:outline-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            backgroundColor: ["#3b82f6", "#6366f1", "#8b5cf6", "#3b82f6"],
          }}
          transition={{
            duration: 1.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <FaArrowAltCircleUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
