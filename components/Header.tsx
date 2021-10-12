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
                <div className="TopLogo"><a className="scaleh1"><Link href="/">Watanabe S.</Link></a></div>
                <div className="disableN">
                    <nav>           
                        <ul>
                            <Link href="/about"><a className="scale"><li>About</li></a></Link>
                            <Link href="/artwork"><a className="scale"><li>ArtWork</li></a></Link>
                            <Link href="/environment"><a className="scale"><li>Environment</li></a></Link>
                            <Link href="/links"><a className="scale"><li>Links</li></a></Link>
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