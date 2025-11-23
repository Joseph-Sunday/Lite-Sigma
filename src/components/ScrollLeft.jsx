import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollLeft = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-5"
    >
      {children}
    </motion.div>
  );
};

export default ScrollLeft;
