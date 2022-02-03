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
    <div className="Nlink">
      <header>
        <div className="Top-BG" />
        <div className="bgg">
          <div className="disableN">
            <nav>
              <ul className="nav1">
                <li>
                  <div aria-expanded={about} onClick={() => setAbout(!about)}>
                    <a className="hoverBG Block">
                      About
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="" ref={aboRef} tabIndex={0} onBlur={() => setTimeout(() => setAbout(!about), 125)}>
                    <div className="NavDrop">
                      <div aria-expanded={about} onClick={() => setAbout(!about)}>
                        {about && (
                          <ul className="White menu">
                            <li>
                              <ActiveLink href="/about" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">私について(詳細)</div>
                                </a>
                              </ActiveLink>
                            </li>
                            <li>
                              <ActiveLink href="/profile" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">プロフィール(概要)</div>
                                </a>
                              </ActiveLink>
                            </li>
                            <li>
                              <ActiveLink href="/konokey" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">このサイトについて</div>
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
                    <a className="hoverBG Block">
                      Works
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="" ref={linkRef} tabIndex={0} onBlur={() => setTimeout(() => setLinks(!links), 125)}>
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
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div aria-expanded={graph} onClick={() => setGraph(!graph)}>
                    <a className="hoverBG Block">
                      Graphics
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="" ref={graRef} tabIndex={0} onBlur={() => setTimeout(() => setGraph(!graph), 125)}>
                    <div className="NavDrop">
                      <div aria-expanded={graph} onClick={() => setGraph(!graph)}>
                        {graph && (
                          <ul className="White menu">
                            <li>
                              <a href="https://github.com/opepelab" target="_blank">
                                <div className="hoverBG BlockM">Instagram</div>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pixiv.net/users/10729947" target="_blank">
                                <div className="hoverBG BlockM">Pixiv</div>
                              </a>
                            </li>
                            <li>
                              <ActiveLink href="/photo" activeClassName="headerState">
                                <a>
                                  <div className="hoverBG BlockM">Whiteboard</div>
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
                  <ActiveLink href="/list/1" activeClassName="headerState">
                    <a className="hoverBG Block">I/O</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/mail" activeClassName="headerState">
                    <a className="hoverBG Block">Contact</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/develop" activeClassName="headerState">
                    <a className="hoverBG Block">Development Environment</a>
                  </ActiveLink>
                </li>

                {/* <ul className="ire">
                <li>
                  <a className="scaleLinks">About▿</a>
                  <ul>
                    <li>this Blog</li>
                    <li>Profile</li>
                    <li></li>
                    <li>aaa</li>
                    <li>aaa</li>
                  </ul>
                </li>
              </ul> */}
                {/* <div id="sample">
                  <label htmlFor="toggle">ここをクリックすると</label>
                  <input type="checkbox" id="toggle" autoComplete="off" />
                  <ul>
                    <li>要素が変化します</li>
                    <li>要素が変化します</li>
                    <li>要素が変化します</li>
                    <li>要素が変化します</li>
                  </ul>
                </div> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
