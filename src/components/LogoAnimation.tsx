"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "../assets/udemy.png";
import fiverr from "../assets/fiverr.png";
import elementor from "../assets/elementor.png";
import logitech from "../assets/logitech.png";
import oracle from "../assets/oracle.png";

const images = [
  { id: 1, src: udemy, alt: "figma" },
  { id: 2, src: fiverr, alt: "fiverr" },
  { id: 3, src: elementor, alt: "elementor" },
  { id: 4, src: logitech, alt: "logitech" },
  { id: 5, src: oracle, alt: "oracle" },
  { id: 6, src: udemy, alt: "figma" },
  { id: 7, src: fiverr, alt: "fiverr" },
  { id: 8, src: elementor, alt: "elementor" },
  { id: 9, src: logitech, alt: "logitech" },
  { id: 10, src: oracle, alt: "oracle" },
  { id: 11, src: udemy, alt: "figma" },
  { id: 12, src: fiverr, alt: "fiverr" },
  { id: 13, src: elementor, alt: "elementor" },
  { id: 14, src: logitech, alt: "logitech" },
  { id: 15, src: oracle, alt: "oracle" },
  { id: 16, src: udemy, alt: "figma" },
  { id: 17, src: fiverr, alt: "fiverr" },
  { id: 18, src: elementor, alt: "elementor" },
  { id: 19, src: logitech, alt: "logitech" },
  { id: 20, src: oracle, alt: "oracle" },
];

function LogoAnimation() {
  return (
    <div className="py-8 bg-purple-200/10 glass opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image) => (
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                height={30}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoAnimation;
