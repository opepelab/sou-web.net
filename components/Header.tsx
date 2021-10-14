import ActiveLink from '../components/ActiveLink'
import React from 'react';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <div>
            <header className="bgg">
                <ActiveLink href="/" activeClassName="hideState"><a className="scale TopLogo"><div>Sou/W.</div></a></ActiveLink>
                <div className="disableN">
                    <nav>           
                        <ul>
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>About</li></a></ActiveLink>
                            <ActiveLink href="/artwork" activeClassName="colorState"><a className="scale"><li>ArtWork</li></a></ActiveLink>
                            <ActiveLink href="/environment" activeClassName="colorState"><a className="scale"><li>Environment</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>Links</li></a></ActiveLink>
                        </ul>
                    </nav>  
                </div>
            </header>
            <div className="Line">
                <button aria-expanded={open} onClick={() => setOpen(!open)}
                    aria-label="Toggle mobile navigation menu">
                        <span />
                        <span />
                </button>
            </div>
        </div>
    );
}

export default Header;