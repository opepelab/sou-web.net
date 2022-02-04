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
      <div className="Line">
        <div aria-expanded={open} onClick={() => setOpen(!open)}>
          <button aria-label="Toggle mobile navigation menu" type="button" className="Humb">
            <span />
            <span />
          </button>
        </div>
      </div>
      <div ref={menuRef} tabIndex={1} onBlur={() => setOpen(!open)} onFocus={() => setOpen(!open)}>
        <div className="MenuList">
          <div aria-expanded={open} onClick={() => setOpen(!open)}>
            <nav>
              <ul className="nav2" onClick={(e) => e.stopPropagation()}>
                <li id="About">
                  <label htmlFor="toggle1">
                    <a>
                      <div className="gg-details-more" />
                      &nbsp;About
                      <div className="SankakuWhite" />
                    </a>
                  </label>
                  <input type="checkbox" id="toggle1" autoComplete="off" />
                  <ul>
                    <li>
                      <ActiveLink href="/profile" activeClassName="headerState">
                        <a>Summary</a>
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/about" activeClassName="headerState">
                        <a>Overview</a>
                      </ActiveLink>
                    </li>
                  </ul>
                </li>
                <li id="Works">
                  <label htmlFor="toggle2">
                    <a className="right2">
                      <div className="gg-work-alt" />
                      &ensp;Works
                      <div className="SankakuWhite" />
                    </a>
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
                <li id="Graph">
                  <label htmlFor="toggle3">
                    <a>
                      <div className="gg-digitalocean" />
                      &nbsp;Graphics
                      <div className="SankakuWhite" />
                    </a>
                  </label>
                  <input type="checkbox" id="toggle3" autoComplete="off" />
                  <ul>
                    <li>
                      <a href="https://github.com/opepelab" target="_blank">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pixiv.net/users/10729947" target="_blank">
                        Pixiv
                      </a>
                    </li>
                    <li>
                      <ActiveLink href="/photo" activeClassName="headerState">
                        <a>Whiteboard</a>
                      </ActiveLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <ActiveLink href="/list/1" activeClassName="headerState">
                    <a className="right">
                      <div className="gg-code-slash" />
                      &nbsp;I/O
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/mail" activeClassName="headerState">
                    <a className="right2">
                      <div className="gg-mail" />
                      &nbsp;Mail
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/develop" activeClassName="headerState">
                    <a className="right3">
                      <div className="gg-path-trim" />
                      &nbsp;Development Environment
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/privacy" activeClassName="headerState">
                    <a className="right3">
                      <div className="gg-coffee" />
                      &ensp;Privacy Policy
                    </a>
                  </ActiveLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
