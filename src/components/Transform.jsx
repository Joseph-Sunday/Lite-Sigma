import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Transform = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "10px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.3, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Transform;
