import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollRevealX({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [120, 0, 0, -4000]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ x, opacity }}>
      {children}
    </motion.div>
  );
}