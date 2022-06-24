import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type RNode = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const Framer: React.FC<RNode> = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'spring', mass: 0.2, stiffness: 90 }}
    >
      {children}
    </motion.article>
  );
};

export default Framer;
