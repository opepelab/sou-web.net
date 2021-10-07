import Link from 'next/link'
import React from 'react';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<Props> = ({ open, setOpen }) => {
    return (     
            <div className="MenuList">
            {/* 表示させとくから先に書く次のコードで新たに上書きして真偽値を書き換えて描写 */}
                    <div aria-expanded={open} onClick={() => setOpen(!open)}>
                        <div id="Pmoji">
                            <Link href="/about">
                                <a id="c2">
                                    <li className="tate">ABOUT</li>
                                </a>
                            </Link>
                            <Link href="https://opepelab.org/">
                                <a id="c2">
                                    <li className="tate">BLOG</li>
                                </a>
                            </Link>
                            <Link href="/picture">
                                <a id="c2">
                                    <li className="tate">PICTURE</li>
                                </a>
                            </Link>
                            <Link href="/design">
                                <a id="c2">
                                    <li className="tate">DESIGN SKILL</li>
                                </a>
                            </Link>
                            <Link href="/access">
                                <a id="c2">
                                    <li className="tate">LINK</li>
                                </a>
                            </Link>
                        </div>
                    </div>
            </div>
    );
};

export default Menu;