import Link from 'next/link'

// 上のなんか並んでるやつ
const Navbar: React.FC = () => {
    return (     
        <header>
            <div className="disableN">
            <nav>           
                <ul>
                    <li><a className="scale"><Link href="about">ABOUT</Link></a></li>
                    <li><a className="scale"><Link href="skills">SKILL SET</Link></a></li>
                    <li><a className="scale"><Link href="design">DESIGN</Link></a></li>
                    <li><a className="scale"><Link href="picture">PICTURE</Link></a></li>
                    <li><a className="scale"><Link href="access">LINK</Link></a></li>
                </ul>
            </nav>  
            </div>
        </header>
        
    );
}

export default Navbar;