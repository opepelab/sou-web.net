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
                                <li className="tate"><ActiveLink href="/about" activeClassName="colorState"><a>About</a></ActiveLink></li>
                                <li className="tate"><ActiveLink href="/mail" activeClassName="colorState"><a className="scale">Email</a></ActiveLink></li>
                                <li className="tate"><ActiveLink href="/blog/page/1" activeClassName="colorState"><a className="scale">Posts</a></ActiveLink></li>
                                <li className="tate"><ActiveLink href="/links" activeClassName="colorState"><a>Links</a></ActiveLink></li>
                                <li className="tate"><ActiveLink href="/photo" activeClassName="colorState"><a>Photo</a></ActiveLink></li>
                                <li className="tate"><ActiveLink href="/developenv" activeClassName="colorState"><a>Devlop</a></ActiveLink></li>
                            </ul> 
                        </nav>
                    </div>
            </div>
        </div>
    );
};

export default Menu;