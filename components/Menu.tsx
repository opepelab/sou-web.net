import Link from 'next/link'

type Props = {
    open: boolean;
    setOpen: Function;
};

const Menu: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div>
            <nav className="MenuList">
                    <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
                        <div id="ms">
                            <Link href="/about">
                                <a>
                                    <li className="tate">ABOUT</li>
                                </a>
                            </Link>
                            <Link href="/access">
                                <a>
                                    <li className="tate">ACCESS</li>
                                </a>
                            </Link>
                            <Link href="/skills">
                                <a>
                                    <li className="tate">SKILL SET</li>
                                </a>
                            </Link>
                            <Link href="/service">
                                <a>
                                    <li className="tate">SERVICE</li>
                                </a>
                            </Link>
                            <Link href="/design">
                                <a>
                                    <li className="tate">DESIGN</li>
                                </a>
                            </Link>
                    </div>
                     </button>
                
            </nav>

        </div>
    );
};

export default Menu;