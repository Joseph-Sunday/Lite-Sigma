import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Transform = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      className="my-2"
      ref={ref}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ duration: 1, ease: "ease" }}
    >
      {children}
    </motion.div>
  );
};

export default Transform;
