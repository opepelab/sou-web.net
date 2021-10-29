import ActiveLink from './Sys/ActiveLink'

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
                            <nav>   
                                <ul className="nav2">                         
                                    <ActiveLink href="/" activeClassName="colorState"><a><li className="tate">Home</li></a></ActiveLink>
                                    <ActiveLink href="/about" activeClassName="colorState"><a><li className="tate">About</li></a></ActiveLink>
                                    <ActiveLink href="/links" activeClassName="colorState"><a><li className="tate">Links</li></a></ActiveLink>
                                    <ActiveLink href="/designenv" activeClassName="colorState"><a><li className="tate">Design/Env</li></a></ActiveLink>
                                    <ActiveLink href="/developenv" activeClassName="colorState"><a><li className="tate">Devlop/Env</li></a></ActiveLink>
                                    <ActiveLink href="/picture" activeClassName="colorState"><a><li className="tate">Picture</li></a></ActiveLink>
                                </ul> 
                            </nav>
                        </div>
                    </div>
            </div>
    );
};

export default Menu;