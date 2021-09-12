import Link from 'next/link'

// 上のなんか並んでるやつ
const Navbar: React.FC = () => {
    return (     
        <header>
            <div className="disableN">
            <nav>           
                <ul>
                    <a className="scale"><Link href="about"><li>ABOUT</li></Link></a>
                    <a className="scale"><Link href="skills"><li>SKILL SET</li></Link></a>
                    <a className="scale"><Link href="design"><li>DESIGN</li></Link></a>
                    <a className="scale"><Link href="picture"><li>PICTURE</li></Link></a>
                    <a className="scale"><Link href="access"><li>LINK</li></Link></a>
                </ul>
            </nav>  
            </div>
        </header>
        
    );
}

export default Navbar;