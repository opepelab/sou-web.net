import Link from 'next/link'
import React from 'react';

type Props = {
    open: boolean;
    setOpen: any;
};

export const Menu: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div>
            <div className="MenuList">
                    <nav aria-expanded={open} onClick={() => setOpen(!open)}>
                        <div id="Pmoji">
                            <Link href="/">
                                <a>
                                    <li className="tate">HOME</li>
                                </a>
                            </Link>
                            <Link href="/about">
                                <a>
                                    <li className="tate">ABOUT</li>
                                </a>
                            </Link>
                            <Link href="/skills">
                                <a>
                                    <li className="tate">SKILL SET</li>
                                </a>
                            </Link>
                            <Link href="/design">
                                <a>
                                    <li className="tate">DESIGN</li>
                                </a>
                            </Link>
                            <Link href="/access">
                                <a>
                                    <li className="tate">ACCESS</li>
                                </a>
                            </Link>
                        </div>
                    </nav>
                
            </div>

        </div>
    );
};

export default Menu;