import ActiveLink from './Sys/ActiveLink'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div className="MenuList">
            <div aria-expanded={open} onClick={() => setOpen(!open)}>
                    <div className="CN">
                        <nav>   
                            <ul className="nav2">                         
                                <ActiveLink href="/" activeClassName="colorState"><a><li className="tate">トップ</li></a></ActiveLink>
                                <ActiveLink href="/about" activeClassName="colorState"><a><li className="tate">詳細</li></a></ActiveLink>
                                <ActiveLink href="/links" activeClassName="colorState"><a><li className="tate">リンク</li></a></ActiveLink>
                                <ActiveLink href="/picture" activeClassName="colorState"><a><li className="tate">写真</li></a></ActiveLink>
                                <ActiveLink href="/designenv" activeClassName="colorState"><a><li className="tate">Design.Env</li></a></ActiveLink>
                                <ActiveLink href="/developenv" activeClassName="colorState"><a><li className="tate">Devlop.Env</li></a></ActiveLink>
                            </ul> 
                        </nav>
                    </div>
            </div>
        </div>
    );
};

export default Menu;