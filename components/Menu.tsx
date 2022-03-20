import React, { useState } from "react";
import ActiveLink from "./Sys/ActiveLink";
import ToggleMB from "components/ToggleMB";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="none">
      <div className="Line">
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
                      <ActiveLink href="/about" activeClassName="headerState">
                        <a onMouseDown={() => setOpen(!open)}>Overview</a>
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/konoblog" activeClassName="headerState">
                        <a onMouseDown={() => setOpen(!open)}>このブログについて</a>
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
                    <li>
                      <a href="https://chofu-koyado.vercel.app/" target="_blank">
                        chofu-koyado
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ActiveLink href="/list/1" activeClassName="headerState">
                    <a className="left1p" onMouseDown={() => setOpen(!open)}>
                      <div className="gg-calibrate" />
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
                  <ActiveLink href="/develop" activeClassName="headerState">
                    <a className="right1" onMouseDown={() => setOpen(!open)}>
                      <div className="gg-attribution" />
                      Development Environment
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
            <ToggleMB />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
