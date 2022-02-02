import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLUListElement>(null!);
  React.useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);
  return (
    <div>
      <header className="bgg">
        <div className="disableN">
          <nav>
            <ul className="nav1 HeadMenu">
              <li>
                <ActiveLink href="/about" activeClassName="headerState">
                  <a className="scaleLinks">About</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/profile" activeClassName="headerState">
                  <a className="scaleLinks">Profile</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/list/1" activeClassName="headerState">
                  <a className="scaleLinks">Posts</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="headerState">
                  <a className="scaleLinks">Email</a>
                </ActiveLink>
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
              <div id="sample">
                <label htmlFor="toggle">ここをクリックすると</label>
                <input type="checkbox" id="toggle" autoComplete="off" />
                <ul>
                  <li>要素が変化します</li>
                  <li>要素が変化します</li>
                  <li>要素が変化します</li>
                  <li>要素が変化します</li>
                </ul>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
