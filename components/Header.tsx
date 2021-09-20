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
                <h1><a className="scale"><Link href="/">Watanabe S.</Link></a></h1>
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