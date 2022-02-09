import React, { useState, useRef, useEffect } from "react";
import ActiveLink from "./Sys/ActiveLink";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    open && menuRef.current.focus();
  }, [open]);

  return (
    <div>
      <div className="Line">
        <div ref={menuRef} tabIndex={0} onBlur={() => setOpen(false)}>
          <button
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile navigation menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="MenuList">
            <div aria-expanded={open} onFocus={() => setOpen(true)}>
              <nav>
                <ul className="nav2">
                  <li id="About">
                    <label htmlFor="toggle1">
                      <a className="left1">
                        <div className="gg-details-more" />
                        About
                        <div className="SankakuWhite" />
                      </a>
                    </label>
                    <input type="checkbox" id="toggle1" autoComplete="off" />
                    <ul>
                      <li>
                        <ActiveLink href="/profile" activeClassName="headerState">
                          <a onClick={() => setOpen(!open)}>Summary</a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/about" activeClassName="headerState">
                          <a onClick={() => setOpen(!open)}>Overview</a>
                        </ActiveLink>
                      </li>
                    </ul>
                  </li>
                  <li id="Links">
                    <label htmlFor="toggle2">
                      <a className="right2">
                        <div className="gg-style" />
                        Link
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
                      <li>
                        <ActiveLink href="/photo" activeClassName="headerState">
                          <a>Whiteboard</a>
                        </ActiveLink>
                      </li>
                      <li>
                        <a href="https://www.pixiv.net/users/10729947" target="_blank">
                          Pixiv
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/sou_watana/" target="_blank">
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ActiveLink href="/list/1" activeClassName="headerState">
                      <a onClick={() => setOpen(!open)}>
                        <div className="gg-calibrate" />
                        Posts
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/mail" activeClassName="headerState">
                      <a onClick={() => setOpen(!open)}>
                        <div className="gg-mail" />
                        Mail
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/develop" activeClassName="headerState">
                      <a className="right3" onClick={() => setOpen(!open)}>
                        <div className="gg-attribution" />
                        Development Environment
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/privacy" activeClassName="headerState">
                      <a className="right4" onClick={() => setOpen(!open)}>
                        <div className="gg-coffee" />
                        Privacy Policy
                      </a>
                    </ActiveLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
