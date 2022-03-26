import { motion } from "framer-motion";
import { ReactNode } from "react";

type RRNode = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: -20, scale: 1 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 20, scale: 1 },
};

const Freya: React.FC<RRNode> = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.25, delay: 0.3 }}
    >
      {children}
    </motion.article>
  );
};

export default Freya;
