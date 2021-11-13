import ActiveLink from './Sys/ActiveLink'
import React from 'react';


const Header: React.FC = () => {
    return (
        <div>
            <header className="bgg">
                <div className="disableN">
                    <nav>           
                        <ul className="nav1">
                            <li><ActiveLink href="/about" activeClassName="colorState"><a className="scale">About</a></ActiveLink></li>
                            <li><ActiveLink href="/mail" activeClassName="colorState"><a className="scale">Email</a></ActiveLink></li>
                            <li><ActiveLink href="/blog/page/1" activeClassName="colorState"><a className="scale">Posts</a></ActiveLink></li>
                            <li><ActiveLink href="/links" activeClassName="colorState"><a className="scale">Links</a></ActiveLink></li>
                            <li><ActiveLink href="/picture" activeClassName="colorState"><a className="scale">Photo</a></ActiveLink></li>
                            <li><ActiveLink href="/developenv" activeClassName="colorState"><a className="scale">Develop</a></ActiveLink></li>
                        </ul>
                    </nav>  
                </div>
            </header>
        </div>
    );
}

export default Header;