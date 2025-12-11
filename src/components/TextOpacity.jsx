import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TextOpacity = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default TextOpacity;
