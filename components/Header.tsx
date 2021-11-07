import ActiveLink from './Sys/ActiveLink'
import React from 'react';


const Header: React.FC = () => {
    return (
        <div>
            <header className="bgg">
                <div className="disableN">
                    <nav>           
                        <ul className="nav1">
                            <ActiveLink href="/mail" activeClassName="colorState"><a className="scale"><li>メール</li></a></ActiveLink>
                            <ActiveLink href="/blog/page/1" activeClassName="colorState"><a className="scale"><li>ポスト</li></a></ActiveLink>
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>詳細</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>リンク</li></a></ActiveLink>
                            <ActiveLink href="/picture" activeClassName="colorState"><a className="scale"><li>写真</li></a></ActiveLink>
                            <ActiveLink href="/designenv" activeClassName="colorState"><a className="scale"><li>Design.Env</li></a></ActiveLink>
                            <ActiveLink href="/developenv" activeClassName="colorState"><a className="scale"><li>Develop.Env</li></a></ActiveLink>
                        </ul>
                    </nav>  
                </div>
            </header>
        </div>
    );
}

export default Header;