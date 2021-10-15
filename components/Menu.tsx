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
                                <a>
                                    <li className="tate">About</li>
                                </a>
                            </Link>
                            <Link href="/environment">
                                <a>
                                    <li className="tate">Env</li>
                                </a>
                            </Link>
                            <Link href="/picture">
                                <a>
                                    <li className="tate">Picture</li>
                                </a>
                            </Link>
                            <Link href="/links">
                                <a>
                                    <li className="tate">Links</li>
                                </a>
                            </Link>
                        </div>
                    </div>
            </div>
    );
};

export default Menu;