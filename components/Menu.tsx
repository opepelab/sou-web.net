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
                                    <li className="tate">About</li>
                                </a>
                            </Link>
                            <Link href="/artwork">
                                <a id="c2">
                                    <li className="tate">ArtWork</li>
                                </a>
                            </Link>
                            <Link href="/articles">
                                <a id="c2">
                                    <li className="tate">Articles</li>
                                </a>
                            </Link>
                            <Link href="/devenvi">
                                <a id="c2">
                                    <li className="tate">Dev Envi</li>
                                </a>
                            </Link>
                            <Link href="/access">
                                <a id="c2">
                                    <li className="tate">Links</li>
                                </a>
                            </Link>
                        </div>
                    </div>
            </div>
    );
};

export default Menu;