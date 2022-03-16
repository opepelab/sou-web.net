import { motion } from "framer-motion";
import { ReactNode } from "react";

type RRNode = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0, scale: 2 },
};

const Framerdiv = ({ children }: RRNode): JSX.Element => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default Framerdiv;
