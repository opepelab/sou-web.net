import ActiveLink from "./Sys/ActiveLink";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { aboutState, linksState, menuState, aboutStateRes, linksStateRes } from "libs/unique";
import ToggleDarkMode from "components/DarkToggle";
import Text from "components/Text";

const Header: React.FC = () => {
  const router = useRouter();
  const [about, setAbout] = useRecoilState(aboutState);
  const [links, setLinks] = useRecoilState(linksState);
  const [menu, setMenu] = useRecoilState(menuState);
  const setAboutRes = useSetRecoilState(aboutStateRes);
  const setLinksRes = useSetRecoilState(linksStateRes);
  const A = () => setAbout(!about);
  const B = () => setLinks(!links);
  const [aboutBorder, setAboutBorder] = useState(false);
  const [linkBorder, setLinkBorder] = useState(false);
  const [mail, setMail] = useState(false);
  const [room, setRoom] = useState(false);

  return (
    <div>
      <header>
        <div
          className="bgg"
          onClick={() => {
            menu ? setMenu(false) : null;
            setAboutRes(false);
            setLinksRes(false);
          }}
        >
          <Text />
          <ToggleDarkMode />
          <div className="disableN">
            <nav>
              <ul className="nav1-left">
                <li>
                  <div onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
                    <a className={about ? "underline Block point" : "underline2 Block"} tabIndex={0}>
                      <div className="gg-details-more" />
                      About
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="NavDrop">
                    <div aria-expanded={about} onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
                      <ul className="White menu">
                        <li>
                          <ActiveLink href="/overview" activeClassName="headerState">
                            <a onClick={() => setAbout(false)}>
                              <div className="hoverBG BlockM">Overview</div>
                            </a>
                          </ActiveLink>
                        </li>
                        <li>
                          <ActiveLink href="/profile" activeClassName="headerState">
                            <a onClick={() => setAbout(false)}>
                              <div className="hoverBG BlockM">Profile</div>
                            </a>
                          </ActiveLink>
                        </li>
                        {/* <li>
                          <ActiveLink href="/thisis" activeClassName="headerState">
                            <a>
                              <div className="hoverBG BlockM">Thisis</div>
                            </a>
                          </ActiveLink>
                        </li> */}
                        <li>
                          <ActiveLink href="/webclip" activeClassName="headerState">
                            <a onClick={() => setAbout(false)}>
                              <div className="hoverBG BlockM">WebClip</div>
                            </a>
                          </ActiveLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div onMouseEnter={() => setLinks(true)} onMouseLeave={() => setLinks(false)}>
                    <a className={links ? "underline Block point" : "underline2 Block"} tabIndex={0}>
                      <div className="gg-style" />
                      Link
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="NavDrop HeadMenu">
                    <div aria-expanded={links} onMouseEnter={() => setLinks(true)} onMouseLeave={() => setLinks(false)}>
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
                <div onMouseEnter={() => setMail(true)} onMouseLeave={() => setMail(false)}>
                  <li>
                    <ActiveLink href="/mail" activeClassName="cursorDefault">
                      <a className={router.asPath === "/mail" || mail ? "underlineDuo Block" : "underlineNormal Block"}>
                        <div className="gg-mail" />
                        Mail
                      </a>
                    </ActiveLink>
                  </li>
                </div>
                <div onMouseEnter={() => setRoom(true)} onMouseLeave={() => setRoom(false)}>
                  <li>
                    <ActiveLink href="/room" activeClassName="cursorDefault">
                      <a
                        className={
                          router.asPath === "/room" || room ? "underlineDuo scaleLinks Block" : "underlineNormal Block"
                        }
                      >
                        <div className="gg-git-fork" />
                        My room
                      </a>
                    </ActiveLink>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
