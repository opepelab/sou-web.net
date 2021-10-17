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
                <div className="disableN">
                    <nav>           
                        <ul>
                            <ActiveLink href="/" activeClassName="colorState"><a className="scale"><div>Home</div></a></ActiveLink>
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>About</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>Links</li></a></ActiveLink>
                            <ActiveLink href="/contact" activeClassName="colorState"><a className="scale"><li>Contact</li></a></ActiveLink>
                            <ActiveLink href="/blog" activeClassName="colorState"><a className="scale"><li>Blog</li></a></ActiveLink>
                            <ActiveLink href="/picture" activeClassName="colorState"><a className="scale"><li>Picture</li></a></ActiveLink>
                            <ActiveLink href="/env" activeClassName="colorState"><a className="scale"><li>Env</li></a></ActiveLink>
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