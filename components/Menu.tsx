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
                                <ActiveLink href="/about" activeClassName="colorState"><a><li className="tate">About</li></a></ActiveLink>
                                <ActiveLink href="/mail" activeClassName="colorState"><a className="scale"><li className="tate">Mail</li></a></ActiveLink>
                                <ActiveLink href="/blog/page/[id]" as="/blog/page/1" activeClassName="colorState"><a className="scale"><li className="tate">Posts</li></a></ActiveLink>
                                <ActiveLink href="/links" activeClassName="colorState"><a><li className="tate">Links</li></a></ActiveLink>
                                <ActiveLink href="/picture" activeClassName="colorState"><a><li className="tate">Picture</li></a></ActiveLink>
                                <ActiveLink href="/developenv" activeClassName="colorState"><a><li className="tate">Devlop.Env</li></a></ActiveLink>
                            </ul> 
                        </nav>
                    </div>
            </div>
        </div>
    );
};

export default Menu;