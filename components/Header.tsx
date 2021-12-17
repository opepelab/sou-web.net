import ActiveLink from "./Sys/ActiveLink"
import React from "react"

const Header: React.FC = () => {
  return (
    <div>
      <header className="bgg">
        <div className="disableN">
          <nav>
            <ul className="nav1">
              <li>
                <ActiveLink href="/about" activeClassName="headerState">
                  <a className="scaleLinks">About</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="headerState">
                  <a className="scaleLinks">Email</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/blog/page/1" activeClassName="headerState">
                  <a className="scaleLinks">Posts</a>
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
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
