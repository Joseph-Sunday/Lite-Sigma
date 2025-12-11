import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TextScrollUp = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: -5 } : {}}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default TextScrollUp;
