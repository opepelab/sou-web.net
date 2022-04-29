import { useState, ReactNode } from "react";

type RNode = {
  children: ReactNode;
  content: string;
};

const Tooltip: React.FC<RNode> = ({ children, content }) => {
  const [show, setShow] = useState(false);
  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onBlur={() => setShow(false)}>
      {children}
      <div className={show ? "bottom" : "bottomLess"}>{content}</div>
    </div>
  );
};

export default Tooltip;
