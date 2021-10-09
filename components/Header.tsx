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
                            <Link href="/blog"><a className="scale"><li>BLOG</li></a></Link>
                            <Link href="/picture"><a className="scale"><li>PICTURE</li></a></Link>
                            <Link href="/design"><a className="scale"><li>DESIGN SKILL</li></a></Link>
                            <Link href="/access"><a className="scale"><li>LINK</li></a></Link>

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