import Link from 'next/link'
import React from 'react';

type Props = {
    open: boolean;
    setOpen: any;
};

export const Header: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <div>
            <header className="bgg">
                <h1><a className="scaleh1"><Link href="/">Watanabe S.</Link></a></h1>
                <div className="disableN">
                    <nav>           
                        <ul>
                            <li><a className="scale"><Link href="about">ABOUT</Link></a></li>
                            <li><a className="scale"><Link href="skills">SKILL SET</Link></a></li>
                            <li><a className="scale"><Link href="design">DESIGN</Link></a></li>
                            <li><a className="scale"><Link href="picture">PICTURE</Link></a></li>
                            <li><a className="scale"><Link href="access">LINK</Link></a></li>
                        </ul>
                    </nav>  
                </div>
            </header>
            <div className="Line">
                <button aria-expanded={open} onClick={() => setOpen(!open)}
                    aria-label="Toggle mobile navigation visibility">
                        <span />
                        <span />
                </button>
            </div>
        </div>
    );
}

export default Header;