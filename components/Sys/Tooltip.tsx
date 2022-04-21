import { useState, ReactNode } from "react";
// import "./Tooltip.css";

type RNode = {
  children: ReactNode;
  content: string;
  location: string;
};

const Tooltip: React.FC<RNode> = ({ children, content, location }) => {
  const [show, setShow] = useState(false);
  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onBlur={() => setShow(false)}>
      {children}
      {show && <div className={location}>{content}</div>}
    </div>
  );
};

export default Tooltip;
