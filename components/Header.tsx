import ActiveLink from "./Sys/ActiveLink";
import React from "react";
import ToggleDarkMode from "components/DarkToggle";
import Text from "components/Text";
import FocusLock from "react-focus-lock";

type boolProp = {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
  links: boolean;
  setLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<boolProp> = ({ view, setView, links, setLinks }) => {
  return (
    <div>
      <header>
        <div
          className="bgg"
          onClick={() => {
            view ? setView(false) : null;
            links ? setLinks(false) : null;
          }}
        >
          <Text />
          <ToggleDarkMode />
          <div className="disableN">
            <nav>
              <ul className="nav1-left">
                <li>
                  <div aria-expanded={view} onClick={() => setView(!view)}>
                    <a className="extend scaleLinks Block">
                      <div className="gg-details-more" />
                      View
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="NavDrop">
                    <div aria-expanded={view}>
                      <ul className="White menu">
                        <li>
                          <ActiveLink href="/resume" activeClassName="headerState">
                            <a>
                              <div className="hoverBG BlockM">Resume</div>
                            </a>
                          </ActiveLink>
                        </li>
                        <li>
                          <ActiveLink href="/profile" activeClassName="headerState">
                            <a>
                              <div className="hoverBG BlockM">Profile</div>
                            </a>
                          </ActiveLink>
                        </li>
                        <li>
                          <ActiveLink href="/thisis" activeClassName="headerState">
                            <a>
                              <div className="hoverBG BlockM">Thisis</div>
                            </a>
                          </ActiveLink>
                        </li>
                        <li>
                          <ActiveLink href="/webclip" activeClassName="headerState">
                            <a>
                              <div className="hoverBG BlockM">WebClip</div>
                            </a>
                          </ActiveLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div aria-expanded={links} onClick={() => setLinks(!links)}>
                    <a className="extend scaleLinks Block">
                      <div className="gg-style" />
                      Link
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="NavDrop HeadMenu">
                    <div aria-expanded={links}>
                      <ul className="White menu">
                        <li>
                          <a href="https://github.com/opepelab" target="_blank">
                            <div className="hoverBG BlockM">GitHub</div>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/sou-watanabe-a25157205/" target="_blank">
                            <div className="hoverBG BlockM">LinkdIn</div>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/sou_watana/" target="_blank">
                            <div className="hoverBG BlockM">Instagram</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <ActiveLink href="/list/1" activeClassName="headerState">
                    <a className="scaleLinks Block">
                      <div className="gg-format-text" />
                      Posts
                    </a>
                  </ActiveLink>
                </li>
              </ul>
              <ul className="nav1-right">
                <li>
                  <ActiveLink href="/mail" activeClassName="headerState">
                    <a className="scaleLinks Block">
                      <div className="gg-mail" />
                      Mail
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/feature" activeClassName="headerState">
                    <a className="scaleLinks Block">
                      <div className="gg-git-fork" />
                      Feature
                    </a>
                  </ActiveLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
