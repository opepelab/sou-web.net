import React, { useRef, useState, useEffect } from "react";
import ActiveLink from "./Sys/ActiveLink";

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    open && menuRef.current.focus();
  }, [open]);
  return (
    <div>
      <div className="Line" aria-expanded={open} onClick={() => setOpen(!open)}>
        <button aria-label="Toggle mobile navigation menu" type="button" className="Humb">
          <span />
          <span />
        </button>
      </div>

      <div className="CN" ref={menuRef} tabIndex={1} onBlur={() => setTimeout(() => setOpen(false))}>
        <div className="MenuList HeadMenu">
          <div aria-expanded={open} onClick={() => setOpen(!open)}>
            {open && (
              <nav>
                <ul className="nav2">
                  <li>
                    <ActiveLink href="/about" activeClassName="headerState">
                      <a>About</a>
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
                  <li>
                    <ActiveLink href="/links" activeClassName="headerState">
                      <a>Links</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/photo" activeClassName="headerState">
                      <a>Photo</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/develop" activeClassName="headerState">
                      <a>Devlop</a>
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

export default Menu;
