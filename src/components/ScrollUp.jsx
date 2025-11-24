import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollUp = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      className="my-2"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollUp;
