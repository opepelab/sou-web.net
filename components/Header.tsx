import ActiveLink from '../components/ActiveLink'
import React from 'react';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ open, setOpen }: Props) => {
    return (
        <div>
            <header className="bgg">
                <ActiveLink href="/" activeClassName="hideState"><a className="scale TopLogo"><div>Sou/Wv.</div></a></ActiveLink>
                <div className="disableN">
                    <nav>           
                        <ul>
                            <ActiveLink href="/detail" activeClassName="colorState"><a className="scale"><li>Detail</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>Links</li></a></ActiveLink>
                            <ActiveLink href="/picture" activeClassName="colorState"><a className="scale"><li>Picture</li></a></ActiveLink>
                            <ActiveLink href="/environment" activeClassName="colorState"><a className="scale"><li>Env</li></a></ActiveLink>
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