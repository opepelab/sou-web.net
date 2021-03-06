import ActiveLink from './Sys/ActiveLink';
import { useRecoilState } from 'recoil';
import { menuState, aboutStateRes, linksStateRes } from 'libs/unique';
import { CgProfile } from 'react-icons/cg';

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
                <ActiveLink href="/" activeClassName="Done blockState headerState">
                  <a onClick={() => setMenu(false)}>
                    <div className="gg-home-alt" />
                    Home
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/profile" activeClassName="Done blockState headerState">
                  <a onClick={() => setMenu(false)}>
                    <CgProfile className="Top-2px" />
                    Profile
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="Done blockState headerState">
                  <a onClick={() => setMenu(false)}>
                    <div className="gg-mail" />
                    Mail
                  </a>
                </ActiveLink>
              </li>
              <li className="LinePadd">
                <div
                  onClick={() => {
                    setAboutRes(!aboutRes);
                    setLinksRes(false);
                  }}
                >
                  <a className={aboutRes === true ? 'blockSecond' : 'blockSecondDis'}>
                    .... About
                    <div className="SankakuBlack" />
                  </a>
                </div>
                <div className="LineBlock">
                  <div aria-expanded={aboutRes}>
                    <ul>
                      <li>
                        <ActiveLink href="/lifestyle" activeClassName="Done headerState">
                          <a
                            onClick={() => {
                              setMenu(false);
                            }}
                          >
                            Lifestyle
                          </a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/artwork" activeClassName="Done headerState">
                          <a onClick={() => setMenu(false)}>Artwork</a>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink href="/webclip" activeClassName="Done headerState">
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
                        <ActiveLink href="/rss/atom.xml" activeClassName="Done headerState">
                          <a onClick={() => setMenu(false)}>RSS.xml</a>
                        </ActiveLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="LinePadd">
                <div
                  onClick={() => {
                    setLinksRes(!linksRes);
                    setAboutRes(false);
                  }}
                >
                  <a className={linksRes === true ? 'blockSecond' : 'blockSecondDis'}>
                    <div className="left2p">
                      <div className="gg-style" />
                      Link
                      <div className="SankakuBlack" />
                    </div>
                  </a>
                </div>
                <div className="LineBlock">
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
