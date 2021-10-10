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
                            <Link href="/about"><a className="scale"><li>About</li></a></Link>
                            <Link href="/artwork"><a className="scale"><li>ArtWork</li></a></Link>
                            <Link href="/blog"><a className="scale"><li>Blog</li></a></Link>
                            <Link href="/devenvi"><a className="scale"><li>Dev Envi</li></a></Link>
                            <Link href="/access"><a className="scale"><li>Links</li></a></Link>
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