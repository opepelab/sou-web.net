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
                <ActiveLink href="/" activeClassName="colorState"><a className="scaleh1 TopLogo"><div>Watanabe S.</div></a></ActiveLink>
                <div className="disableN">
                    <nav>           
                        <ul>
                            <ActiveLink href="/about" activeClassName="borderState"><a className="scale"><li>About</li></a></ActiveLink>
                            <ActiveLink href="/artwork" activeClassName="borderState"><a className="scale"><li>ArtWork</li></a></ActiveLink>
                            <ActiveLink href="/environment" activeClassName="borderState"><a className="scale"><li>Environment</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="borderState"><a className="scale"><li>Links</li></a></ActiveLink>
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