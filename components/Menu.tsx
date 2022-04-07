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
              <li id="About">
                <div
                  onClick={() => {
                    setAboutRes(!aboutRes);
                    setLinksRes(false);
                  }}
                >
                  <a className="left2p">
                    <div className="gg-details-more" />
                    About
                    <div className="SankakuBlack" />
                  </a>
                </div>
                <div className="AboutState">
                  <div aria-expanded={aboutRes}>
                    <ul>
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
                        <ActiveLink href="/resume" activeClassName="headerState">
                          <a
                            onClick={() => {
                              setMenu(false);
                            }}
                          >
                            Resume
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
                    </ul>
                  </div>
                </div>
              </li>
              <li id="Links">
                <div
                  onClick={() => {
                    setLinksRes(!linksRes);
                    setAboutRes(false);
                  }}
                >
                  <a className="right3p">
                    <div className="gg-style" />
                    Link
                    <div className="SankakuBlack" />
                  </a>
                </div>
                <div className="LinksState">
                  <div aria-expanded={linksRes}>
                    <ul>
                      <li>
                        <a href="https://github.com/s-wataru" target="_blank">
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
                <ActiveLink href="/rss/atom.xml" activeClassName="headerState">
                  <a className="left1p" onClick={() => setMenu(false)}>
                    <div className="gg-data" />
                    RSS
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="headerState">
                  <a onClick={() => setMenu(false)}>
                    <div className="gg-mail" />
                    Mail
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/feature" activeClassName="headerState">
                  <a className="right1p" onClick={() => setMenu(false)}>
                    <div className="gg-git-fork" />
                    Feature
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
