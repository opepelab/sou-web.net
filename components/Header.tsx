import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null!);
  React.useEffect(() => {
    open && menuRef.current.focus();
  }, [open]);
  return (
    <div>
      <header className="bgg">
        <div className="disableN">
          <nav>
            <ul className="nav1 HeadMenu">
              <li>
                <div aria-expanded={open} onClick={() => setOpen(!open)}>
                  <a className="hoverBG Block">
                    About
                    <div className="triangle-bottomMenu" />
                  </a>
                </div>
                <div className="" ref={menuRef} tabIndex={0} onBlur={() => setTimeout(() => setOpen(!open), 125)}>
                  <div className="NavDrop HeadMenu">
                    <div aria-expanded={open} onClick={() => setOpen(!open)}>
                      {open && (
                        <ul className="menu yoko">
                          <li>
                            <ActiveLink href="/about" activeClassName="headerState">
                              <a>
                                <div className="hoverBG BlockM">このブログについて</div>
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
                          <li>
                            <ActiveLink href="/list/1" activeClassName="headerState">
                              <a>
                                <div className="hoverBG BlockM">Posts</div>
                              </a>
                            </ActiveLink>
                          </li>
                          <li>
                            <ActiveLink href="/mail" activeClassName="headerState">
                              <a>
                                <div className="hoverBG BlockM">Email</div>
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
                <ActiveLink href="/links" activeClassName="headerState">
                  <a className="scaleLinks">Links</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/photo" activeClassName="headerState">
                  <a className="scaleLinks">Photo</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/develop" activeClassName="headerState">
                  <a className="scaleLinks">Develop</a>
                </ActiveLink>
              </li>
              <ul className="ire">
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
              </ul>
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
      </header>
    </div>
  );
};

export default Header;
