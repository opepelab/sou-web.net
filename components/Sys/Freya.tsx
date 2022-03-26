import { motion } from "framer-motion";
import { ReactNode } from "react";

type RRNode = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
};

const Freya: React.FC<RRNode> = ({ children }) => {
  return (
    <motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.25 }}>
      {children}
    </motion.article>
  );
};

export default Freya;
