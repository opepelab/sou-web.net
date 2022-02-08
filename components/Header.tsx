import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const Header: React.FC = () => {
  const [about, setAbout] = React.useState(false);
  const aboRef = React.useRef<HTMLDivElement>(null!);
  React.useEffect(() => {
    about && aboRef.current.focus();
  }, [about]);

  const [links, setLinks] = React.useState(false);
  const linkRef = React.useRef<HTMLDivElement>(null!);
  React.useEffect(() => {
    links && linkRef.current.focus();
  }, [links]);

  const [graph, setGraph] = React.useState(false);
  const graRef = React.useRef<HTMLDivElement>(null!);
  React.useEffect(() => {
    graph && graRef.current.focus();
  }, [graph]);
  return (
    <div>
      <header>
        <div className="bgg">
          <div className="disableN">
            <nav>
              <ul className="nav1">
                <li>
                  <div aria-expanded={about} onClick={() => setAbout(!about)}>
                    <a className="scaleLinks Block">
                      <div className="gg-details-more" />
                      About
                      <div className="SankakuBlack" />
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
                                  <div className="hoverBG BlockM">Summary</div>
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
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div aria-expanded={links} onClick={() => setLinks(!links)}>
                    <a className="scaleLinks  Block">
                      <div className="gg-style" />
                      Link
                      <div className="SankakuBlack" />
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
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <ActiveLink href="/list/1" activeClassName="headerState">
                    <a className="scaleLinks  Block">
                      <div className="gg-calibrate" />
                      Posts
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/mail" activeClassName="headerState">
                    <a className="scaleLinks  Block">
                      <div className="gg-mail" />
                      Mail
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/develop" activeClassName="headerState">
                    <a className="scaleLinks  Block">
                      <div className="gg-attribution" />
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
