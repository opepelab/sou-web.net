import ActiveLink from '../Sys/ActiveLink'
import React from 'react';

const Header: React.FC = () => {
    return (
        <div>
            <header className="bgg">
                <div className="disableN">
                    <nav>           
                        <ul>
                            <ActiveLink href="/picture" activeClassName="colorState"><a className="scale"><li>Picture</li></a></ActiveLink>
                            <ActiveLink href="/blog" activeClassName="colorState"><a className="scale"><li>Blog</li></a></ActiveLink>
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>About</li></a></ActiveLink>
                            <ActiveLink href="/env" activeClassName="colorState"><a className="scale"><li>Dev/Env</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>Links</li></a></ActiveLink>
                            <ActiveLink href="/contact" activeClassName="colorState"><a className="scale"><li>Email</li></a></ActiveLink>
                        </ul>
                    </nav>  
                </div>
            </header>
        </div>
    );
}

export default Header;