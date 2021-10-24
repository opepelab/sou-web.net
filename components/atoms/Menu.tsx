import Link from 'next/link'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ open, setOpen }) => {
    return (     
            <div className="MenuList">
            {/* 表示させとくから先に書く次のコードで新たに上書きして真偽値を書き換えて描写 */}
                    <div aria-expanded={open} onClick={() => setOpen(!open)}>
                        <div className="CN">
                            <Link href="/"><a><li className="tate border redLinks">Home</li></a></Link>
                            <Link href="/about"><a><li className="tate">About</li></a></Link>
                            <Link href="/env"><a><li className="tate">Dev/Env</li></a></Link>
                            <Link href="/links"><a><li className="tate">Links</li></a></Link>
                            <Link href="/contact"><a><li className="tate">Email</li></a></Link>
                        </div>
                    </div>
            </div>
    );
};

export default Menu;