import ActiveLink from "./Sys/ActiveLink";
import { useRecoilState } from "recoil";
import { menuState } from "libs/unique";

const Menu: React.FC = () => {
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <div className="none">
      <div className="Line text-teal-100">
        <button
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
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
                <label htmlFor="toggle1">
                  <a className="left2p">
                    <div className="gg-details-more" />
                    About
                    <div className="SankakuBlack" />
                  </a>
                </label>
                <input type="checkbox" id="toggle1" />
                <ul>
                  <li>
                    <ActiveLink href="/profile" activeClassName="headerState">
                      <a onMouseDown={() => setMenu(!menu)}>Profile</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/resume" activeClassName="headerState">
                      <a onMouseDown={() => setMenu(!menu)}>Resume</a>
                    </ActiveLink>
                  </li>
                  {/* <li>
                      <ActiveLink href="/thisis" activeClassName="headerState">
                        <a onMouseDown={() => setMenu(!menu)}>Thisis</a>
                      </ActiveLink>
                    </li> */}
                  <li>
                    <ActiveLink href="/webclip" activeClassName="headerState">
                      <a onMouseDown={() => setMenu(!menu)}>WebClip</a>
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li id="Links">
                <label htmlFor="toggle2">
                  <a className="right3p">
                    <div className="gg-style" />
                    Link
                    <div className="SankakuBlack" />
                  </a>
                </label>
                <input type="checkbox" id="toggle2" />
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
              </li>
              <li>
                <ActiveLink href="/rss/atom.xml" activeClassName="headerState">
                  <a className="left1p" onMouseDown={() => setMenu(!menu)}>
                    <div className="gg-data" />
                    RSS
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="headerState">
                  <a onMouseDown={() => setMenu(!menu)}>
                    <div className="gg-mail" />
                    Mail
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/feature" activeClassName="headerState">
                  <a className="right1p" onMouseDown={() => setMenu(!menu)}>
                    <div className="gg-git-fork" />
                    Feature
                  </a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/privacy" activeClassName="headerState">
                  <a className="right4p" onMouseDown={() => setMenu(!menu)}>
                    <div className="gg-coffee" />
                    Privacy Policy
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
