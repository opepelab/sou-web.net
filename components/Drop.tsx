import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ActiveLink from "./Sys/ActiveLink";

const Dropdown4: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    open && menuRef.current.focus();
  }, [open]);
  return (
    <div>
      <div aria-expanded={open} onMouseDown={() => setOpen(!open)}>
        <div className="menuButton">Menu 4</div>
      </div>

      <div className="" ref={menuRef} tabIndex={1} onBlur={() => setOpen(false)}>
        <div className="NavDrop HeadMenu">
          <div aria-expanded={open} onClick={() => setOpen(!open)}>
            {open && (
              <nav>
                <ul className="menu">
                  <li>
                    <ActiveLink href="/about" activeClassName="headerState">
                      <a className="scaleLinks">このブログについて</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/profile" activeClassName="headerState">
                      <a>Profile</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/list/1" activeClassName="headerState">
                      <a className="scale">Posts</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/mail" activeClassName="headerState">
                      <a className="scale">Email</a>
                    </ActiveLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown4;
