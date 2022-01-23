import ActiveLink from "./Sys/ActiveLink";

type BoolProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<BoolProps> = ({ open, setOpen }) => {
  return (
    <div className="MenuList">
      <div aria-expanded={open} onClick={() => setOpen(!open)}>
        <div className="CN">
          <nav>
            <ul className="nav2">
              <li>
                <ActiveLink href="/about" activeClassName="headerState">
                  <a>About</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/profile" activeClassName="headerState">
                  <a>Profile</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/blog" activeClassName="headerState">
                  <a className="scale">Posts</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/mail" activeClassName="headerState">
                  <a className="scale">Email</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/links" activeClassName="headerState">
                  <a>Links</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/photo" activeClassName="headerState">
                  <a>Photo</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/develop" activeClassName="headerState">
                  <a>Devlop</a>
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
