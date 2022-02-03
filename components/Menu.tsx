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

      <div ref={menuRef} tabIndex={1} onBlur={() => setOpen(!open)}>
        <div className="MenuList">
          <div aria-expanded={open}>
            {open && (
              <nav>
                <ul className="nav2">
                  <li id="About">
                    <label htmlFor="toggle1">
                      About
                      <div className="SankakuWhite" />
                    </label>
                    <input type="checkbox" id="toggle1" autoComplete="off" />
                    <ul>
                      <li>
                        <ActiveLink href="/about" activeClassName="headerState">
                          <a>私について(詳細)</a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/profile" activeClassName="headerState">
                          <a>プロフィール(概要)</a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/konokey" activeClassName="headerState">
                          <a>このサイトについて</a>
                        </ActiveLink>
                      </li>
                    </ul>
                  </li>
                  <li id="Works">
                    <label htmlFor="toggle2">
                      <div className="gg-work-alt" /> Works
                      <div className="SankakuWhite" />
                    </label>
                    <input type="checkbox" id="toggle2" autoComplete="off" />
                    <ul>
                      <li>
                        <a href="https://github.com/opepelab" target="_blank">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
                          LinkdIn
                        </a>
                      </li>
                      <li>
                        <a href="https://opepelab.org/" target="_blank">
                          WordPress
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ActiveLink href="/list/1" activeClassName="">
                      <a className="scale">
                        Graphics
                        <div className="SankakuWhite" />
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/mail" activeClassName="headerState">
                      <a className="scale">I/O</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/links" activeClassName="headerState">
                      <a>Contact</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/photo" activeClassName="headerState">
                      <a>Development Environment</a>
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
