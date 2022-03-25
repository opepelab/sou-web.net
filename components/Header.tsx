import ActiveLink from "./Sys/ActiveLink";
import React from "react";
import ToggleDarkMode from "components/ToggleDW";
import Text from "components/Text";
const Header: React.FC = () => {
  const [about, setAbout] = React.useState(false);
  const aboRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    about && aboRef.current?.focus();
  }, [about]);

  const [links, setLinks] = React.useState(false);
  const linkRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    links && linkRef.current?.focus();
  }, [links]);

  return (
    <div>
      <header className="flex">
        <div className="bgg">
          <div className="disableN">
            <nav>
              <ToggleDarkMode />
              <Text />
              <ul className="nav1-left">
                <li>
                  <div aria-expanded={about} onClick={() => setAbout(!about)}>
                    <a className="scaleLinks Block">
                      <div className="gg-details-more" />
                      About
                      <div className="SankakuBlack border-t-gray-600 dark:border-t-zinc-100" />
                    </a>
                  </div>
                  <div ref={aboRef} tabIndex={1} onBlur={() => setTimeout(() => setAbout(!about), 125)}>
                    <div className="NavDrop">
                      <div aria-expanded={about} onClick={() => setAbout(!about)}>
                        {about && (
                          <ul className="White menu">
                            <li>
                              <ActiveLink href="/profile" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">Profile</div>
                                </a>
                              </ActiveLink>
                            </li>
                            <li>
                              <ActiveLink href="/about" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">Overview</div>
                                </a>
                              </ActiveLink>
                            </li>
                            <li>
                              <ActiveLink href="/thisblog" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">This blog</div>
                                </a>
                              </ActiveLink>
                            </li>
                            <li>
                              <ActiveLink href="/webclip" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">Web clip</div>
                                </a>
                              </ActiveLink>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div aria-expanded={links} onClick={() => setLinks(!links)}>
                    <a className="scaleLinks Block">
                      <div className="gg-style" />
                      Link
                      <div className="SankakuBlack border-t-gray-600 dark:border-t-zinc-100" />
                    </a>
                  </div>
                  <div ref={linkRef} tabIndex={1} onBlur={() => setTimeout(() => setLinks(!links), 125)}>
                    <div className="NavDrop HeadMenu">
                      <div aria-expanded={links} onClick={() => setLinks(!links)}>
                        {links && (
                          <ul className="White menu">
                            <li>
                              <a href="https://github.com/opepelab" target="_blank">
                                <div className="hoverBG BlockM">GitHub</div>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
                                <div className="hoverBG BlockM">LinkdIn</div>
                              </a>
                            </li>
                            <li>
                              <a href="https://opepelab.org/" target="_blank">
                                <div className="hoverBG BlockM">WordPress</div>
                              </a>
                            </li>
                            <li>
                              <ActiveLink href="/photo" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">Whiteboard</div>
                                </a>
                              </ActiveLink>
                            </li>
                            <li>
                              <a href="https://www.pixiv.net/users/10729947" target="_blank">
                                <div className="hoverBG BlockM">Pixiv</div>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/sou_watana/" target="_blank">
                                <div className="hoverBG BlockM">Instagram</div>
                              </a>
                            </li>
                            <li>
                              <a href="https://chofu-koyado.vercel.app/" target="_blank">
                                <div className="hoverBG BlockM">chofu-koyado</div>
                              </a>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="nav1-right">
                <li>
                  <ActiveLink href="/list/1" activeClassName="headerState">
                    <a className="scaleLinks Block">
                      <div className="gg-format-text" />
                      Posts
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/mail" activeClassName="headerState">
                    <a className="scaleLinks Block">
                      <div className="gg-mail" />
                      Mail
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/develop" activeClassName="headerState">
                    <a className="scaleLinks Block">
                      <div className="gg-git-fork" />
                      Development Environment
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
