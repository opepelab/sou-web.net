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
                    <h1 className="h1"><Link href="/"><a className="black">Watanabe S.</a></Link></h1>
                </header>
            <div className="Line">
                <div aria-expanded={open} onClick={() => setOpen(!open)}>
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
}

export default Header;