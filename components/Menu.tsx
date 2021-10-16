import Link from 'next/link'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ open, setOpen }: Props) => {
    return (     
            <div className="MenuList">
            {/* 表示させとくから先に書く次のコードで新たに上書きして真偽値を書き換えて描写 */}
                    <div aria-expanded={open} onClick={() => setOpen(!open)}>
                        <div id="Pmoji">
                            <Link href="/detail">
                                <a>
                                    <li className="tate">Detail</li>
                                </a>
                            </Link>
                            <Link href="/links">
                                <a>
                                    <li className="tate">Links</li>
                                </a>
                            </Link>
                            <Link href="/picture">
                                <a>
                                    <li className="tate">Picture</li>
                                </a>
                            </Link>
                            <Link href="/environment">
                                <a>
                                    <li className="tate">Env</li>
                                </a>
                            </Link>
                        </div>
                    </div>
            </div>
    );
};

export default Menu;