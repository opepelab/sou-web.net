import ActiveLink from "./Sys/ActiveLink";
import { useRecoilState } from "recoil";
import { menuState, aboutStateRes, linksStateRes } from "libs/unique";

const Menu: React.FC = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const [aboutRes, setAboutRes] = useRecoilState(aboutStateRes);
  const [linksRes, setLinksRes] = useRecoilState(linksStateRes);

  return (
    <div className="none">
      <div className="Line">
        <button
          aria-expanded={menu}
          onClick={() => {
            setMenu(!menu);
            setAboutRes(false);
            setLinksRes(false);
          }}
          aria-label="Toggle mobile navigation menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="MenuList">
        <div aria-expanded={menu}>
          <nav>
            <ul className="nav2">
              <li className="About">
                <div
                  onClick={() => {
                    setAboutRes(!aboutRes);
                    setLinksRes(false);
                  }}
                >
                  <a className="left2p">
                    <div className="gg-style" />
                    About
                    <div className="SankakuBlack" />
                  </a>
                </div>
                <div className="AboutState">
                  <div aria-expanded={aboutRes}>
                    <ul>
                      <li>
                        <ActiveLink href="/overview" activeClassName="headerState">
                          <a
                            onClick={() => {
                              setMenu(false);
                            }}
                          >
                            Overview
                          </a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/profile" activeClassName="headerState">
                          <a
                            onClick={() => {
                              setMenu(false);
                            }}
                          >
                            Profile
                          </a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/webclip" activeClassName="headerState">
                          <a
                            onClick={() => {
                              setMenu(false);
                            }}
                          >
                            WebClip
                          </a>
                        </ActiveLink>
                      </li>
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
                  </div>
                </div>
              </li>
              <li className="Links">
                <div
                  onClick={() => {
                    setLinksRes(!linksRes);
                    setAboutRes(false);
                  }}
                >
                  <a className="right3p">
                    <div className="gg-style" />
                    Home
                    <div className="SankakuBlack" />
                  </a>
                </div>
                <div className="LinksState">
                  <div aria-expanded={linksRes}>
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
                  </div>
                </div>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="headerState">
                  <a onClick={() => setMenu(false)}>
                    <div className="gg-mail" />
                    Email
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/room" activeClassName="headerState">
                  <a className="right1p" onClick={() => setMenu(false)}>
                    <div className="gg-git-fork" />
                    My room
                  </a>
                </ActiveLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
