import Link from 'next/link'
import React from 'react';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <div>
            <header className="bgg">
                <h1><a className="scaleh1"><Link href="/">Watanabe S.</Link></a></h1>
                <div className="disableN">
                    <nav>           
                        <ul>
                            <Link href="/about"><a className="scale"><li>ABOUT</li></a></Link>
                            <Link href="/artwork"><a className="scale"><li>ARTWORK</li></a></Link>
                            <Link href="/environment"><a className="scale"><li>ENVIRONMENT</li></a></Link>
                            <Link href="/links"><a className="scale"><li>LINKS</li></a></Link>
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