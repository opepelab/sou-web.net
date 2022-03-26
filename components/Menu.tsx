import React, { useState } from "react";
import ActiveLink from "./Sys/ActiveLink";

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="none">
      <div className="Line text-teal-100">
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
      </div>
      <div className="Filt">
        <div aria-expanded={open} onClick={() => setOpen(false)} />
        <div className="MenuList">
          <div aria-expanded={open}>
            <nav>
              <ul className="nav2">
                <li id="About">
                  <label htmlFor="toggle1">
                    <a className="left2p">
                      <div className="gg-details-more" />
                      About
                      <div className="SankakuBlack" />
                    </a>
                  </label>
                  <input type="checkbox" id="toggle1" autoComplete="off" />
                  <ul>
                    <li>
                      <ActiveLink href="/profile" activeClassName="headerState">
                        <a onMouseDown={() => setOpen(!open)}>Profile</a>
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/resume" activeClassName="headerState">
                        <a onMouseDown={() => setOpen(!open)}>Resume</a>
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/thisis" activeClassName="headerState">
                        <a onMouseDown={() => setOpen(!open)}>Thisis</a>
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/webclip" activeClassName="headerState">
                        <a onMouseDown={() => setOpen(!open)}>WebClip</a>
                      </ActiveLink>
                    </li>
                  </ul>
                </li>
                <li id="Links">
                  <label htmlFor="toggle2">
                    <a className="right3p">
                      <div className="gg-style" />
                      Link
                      <div className="SankakuBlack" />
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
                      <a href="https://www.instagram.com/sou_watana/" target="_blank">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ActiveLink href="/list/1" activeClassName="headerState">
                    <a className="left1p" onMouseDown={() => setOpen(!open)}>
                      <div className="gg-format-text" />
                      Posts
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/mail" activeClassName="headerState">
                    <a onMouseDown={() => setOpen(!open)}>
                      <div className="gg-mail" />
                      Mail
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/feature" activeClassName="headerState">
                    <a className="right1p" onMouseDown={() => setOpen(!open)}>
                      <div className="gg-git-fork" />
                      Feature
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/privacy" activeClassName="headerState">
                    <a className="right4p" onMouseDown={() => setOpen(!open)}>
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
  );
};

export default Menu;
