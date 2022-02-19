import { motion } from "framer-motion";
import { ReactNode } from "react";

type RRNode = {
  children: ReactNode;
};

const Framerdiv = ({ children }: RRNode): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  );
};

export default Framerdiv;
