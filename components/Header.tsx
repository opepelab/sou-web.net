import ActiveLink from "./Sys/ActiveLink";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { aboutState, linksState, menuState, aboutStateRes, linksStateRes } from "libs/unique";
import ToggleDarkMode from "components/DarkToggle";
import Text from "components/Text";
import Reactive from "components/Sys/Reactive";

const Header: React.FC = () => {
  const [about, setAbout] = useRecoilState(aboutState);
  const [links, setLinks] = useRecoilState(linksState);
  const [menu, setMenu] = useRecoilState(menuState);
  const setAboutRes = useSetRecoilState(aboutStateRes);
  const setLinksRes = useSetRecoilState(linksStateRes);
  const [aboutBorder, setAboutBorder] = useState(false);
  const [linksBorder, setLinksBorder] = useState(false);
  const [mail, setMail] = useState(false);
  const [room, setRoom] = useState(false);

  return (
    <div>
      <header>
        <div
          className="bgg"
          onClick={() => {
            menu ? setMenu(false) : null;
            about ? setAbout(false) : null;
            links ? setLinks(false) : null;
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
                  <div
                    onClick={() => setAbout(!about)}
                    onKeyPress={() => setAbout(!about)}
                    onMouseEnter={() => setAboutBorder(true)}
                    onMouseLeave={() => setAboutBorder(false)}
                  >
                    <a className={about || aboutBorder ? "underline Block point" : "underline2 Block"} tabIndex={0}>
                      <div className="gg-details-more" />
                      About
                      <div className="SankakuBlack" />
                    </a>
                  </div>
                  <div className="NavDrop">
                    <div aria-expanded={about}>
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
                  <div
                    onClick={() => setLinks(!links)}
                    onKeyPress={() => setLinks(!links)}
                    onMouseEnter={() => setLinksBorder(true)}
                    onMouseLeave={() => setLinksBorder(false)}
                  >
                    <a className={links || linksBorder ? "underline Block point" : "underline2 Block"} tabIndex={0}>
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
                <div onMouseEnter={() => setMail(true)} onMouseLeave={() => setMail(false)}>
                  <li>
                    <Reactive url={"/mail"} state={mail} on={"underlineDuo Block"} off={"underlineNormal Block"}>
                      <div className="gg-mail" />
                      Mail
                    </Reactive>
                  </li>
                </div>
                <div onMouseEnter={() => setRoom(true)} onMouseLeave={() => setRoom(false)}>
                  <li>
                    <Reactive url={"/room"} state={room} on={"underlineDuo Block"} off={"underlineNormal Block"}>
                      <div className="gg-git-fork" />
                      My room
                    </Reactive>
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
