import ActiveLink from './Sys/ActiveLink'
import React from 'react';


const Header: React.FC = () => {
    return (
        <div>
            <header className="bgg">
                <div className="disableN">
                    <nav>           
                        <ul className="nav1">
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>About</li></a></ActiveLink>
                            <ActiveLink href="/mail" activeClassName="colorState"><a className="scale"><li>Mail</li></a></ActiveLink>
                            <ActiveLink href="/blog/page/[id]" as="/blog/page/1" activeClassName="colorState"><a className="scale"><li>Posts</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>Links</li></a></ActiveLink>
                            <ActiveLink href="/picture" activeClassName="colorState"><a className="scale"><li>Picture</li></a></ActiveLink>
                            <ActiveLink href="/developenv" activeClassName="colorState"><a className="scale"><li>Develop.Env</li></a></ActiveLink>
                        </ul>
                    </nav>  
                </div>
            </header>
        </div>
    );
}

export default Header;