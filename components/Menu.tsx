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
              <li>
                <ActiveLink href="/" activeClassName="blockState headerState">
                  <a onClick={() => setMenu(false)}>
                    <div className="gg-home-alt" />
                    Home
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/profile" activeClassName="blockState headerState">
                  <a onClick={() => setMenu(false)}>
                    <div className="gg-pin" />
                    Profile
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="blockState headerState">
                  <a onClick={() => setMenu(false)}>
                    <div className="gg-mail" />
                    Email
                  </a>
                </ActiveLink>
              </li>
              <li>
                <div
                  onClick={() => {
                    setAboutRes(!aboutRes);
                    setLinksRes(false);
                  }}
                >
                  <a className={aboutRes === true ? "blockLight" : "blockLightNormal"}>
                    .... About
                    <div className="SankakuBlack" />
                  </a>
                </div>
                <div className="AboutState">
                  <div aria-expanded={aboutRes} className="About">
                    <ul>
                      <li>
                        <ActiveLink href="/room" activeClassName="headerState">
                          <a className="right1p" onClick={() => setMenu(false)}>
                            MyRoom
                          </a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/art" activeClassName="headerState">
                          <a className="right1p" onClick={() => setMenu(false)}>
                            MyArt
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
              <li className="Link">
                <div
                  onClick={() => {
                    setLinksRes(!linksRes);
                    setAboutRes(false);
                  }}
                >
                  <a className={linksRes === true ? "blockLight" : "blockLightNormal"}>
                    <div className="left2p">
                      <div className="gg-style" />
                      Link
                      <div className="SankakuBlack" />
                    </div>
                  </a>
                </div>
                <div className="AboutState">
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
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
