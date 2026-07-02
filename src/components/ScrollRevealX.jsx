import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollRevealX({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.45, 0.6, 1], [300, 0, 0, -4000]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.8, 1], [0, 0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ x, opacity }}>
      {children}
    </motion.div>
  );
}