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

const Framerdiv = ({ children }: RRNode): JSX.Element => {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  );
};

export default Framerdiv;
