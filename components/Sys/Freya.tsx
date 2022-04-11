import { motion } from "framer-motion";
import { ReactNode } from "react";

type RNode = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

// const variantss = {
//   visible: {
//     opacity: 1,
//     display: "block",
//   },
//   hidden: {
//     opacity: 0,
//     display: "none",
//     visibility: "hidden",
//   },
// };

// const circleStyle = {
//   position: "absolute",
//   display: "block",
//   top: "0" /* 位置指定 */,
//   bottom: "0" /* 位置指定 */,
//   left: "0" /* 位置指定 */,
//   right: "0" /* 位置指定 */,
//   margin: "auto",
//   width: "200px",
//   height: "200px",
//   border: "5px solid #e9e9e9",
//   borderTop: "5px solid #3498db",
//   borderRadius: "50%",
// };

// const spinTransition = {
//   duration: 1,
// };

const Freya: React.FC<RNode> = ({ children }) => {
  return (
    <motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.5 }}>
      {children}
    </motion.article>
  );
};

export default Freya;
{
  /* <motion.div
style={circleStyle}
animate={{ rotate: 360, opacity: 0 }}
transition={{ duration: "1" }}
variants={variantss}
initial="visible"
exit="hidden"
/> */
}
