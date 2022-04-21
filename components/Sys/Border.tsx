import { useState, ReactNode } from "react";

type RNode = {
  children: ReactNode;
  content: string;
};

const Tooltip: React.FC<RNode> = ({ children, content }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="Container">
      <div
        aria-expand={show}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onBlur={() => setShow(false)}
      >
        {children}
        <div aria-expand={show}>
          <div className="bottom">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
