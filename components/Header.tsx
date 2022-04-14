import ActiveLink from "./Sys/ActiveLink";
import { useRecoilState, useSetRecoilState } from "recoil";
import { aboutState, linksState, menuState, aboutStateRes, linksStateRes } from "libs/unique";
import ToggleDarkMode from "components/DarkToggle";
import RSS from "components/RSS";
import Text from "components/Text";

const Header: React.FC = () => {
  const [about, setAbout] = useRecoilState(aboutState);
  const [links, setLinks] = useRecoilState(linksState);
  const [menu, setMenu] = useRecoilState(menuState);
  const setAboutRes = useSetRecoilState(aboutStateRes);
  const setLinksRes = useSetRecoilState(linksStateRes);
  return (
    <div>
      <header>
        <div
          className="bgg"
          onClick={() => {
            about ? setAbout(false) : null;
            links ? setLinks(false) : null;
            menu ? setMenu(false) : null;
            setAboutRes(false);
            setLinksRes(false);
          }}
        >
          <Text />
          <ToggleDarkMode />
          <RSS />
          <div className="disableN">
            <nav>
              <ul className="nav1-left">
                <li>
                  <div onClick={() => setAbout(!about)}>
                    <a className="scaleLinks Block point" tabIndex={0}>
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
                            <a>
                              <div className="hoverBG BlockM">Overview</div>
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
                        {/* <li>
                          <ActiveLink href="/thisis" activeClassName="headerState">
                            <a>
                              <div className="hoverBG BlockM">Thisis</div>
                            </a>
                          </ActiveLink>
                        </li> */}
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
                    <a className="scaleLinks Block point" tabIndex={0}>
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
                  <ActiveLink href="/mail" activeClassName="headerState">
                    <a className="scaleLinks Block">
                      <div className="gg-mail" />
                      Mail
                    </a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/feature" activeClassName="headerState extend">
                    <a className="scaleLinks Block">
                      <div className="gg-git-fork" />
                      MyRoom
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
