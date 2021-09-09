import Link from 'next/link'

// 上のなんか並んでるやつ
const Navbar: React.FC = () => {
    return (     
        <header>
            <div className="disableN">
            <nav>           
                <ul>
                    <Link href="about"><a className="scale"><li>ABOUT</li></a></Link>
                    <Link href="skills"><a className="scale"><li>SKILL SET</li></a></Link>
                    <Link href="design"><a className="scale"><li>DESIGN</li></a></Link>
                    <Link href="picture"><a className="scale"><li>PICTURE</li></a></Link>
                    <Link href="access"><a className="scalemigi"><li><i>ACCESS</i></li></a></Link>
                </ul>
            </nav>  
            </div>
        </header>
        
    );
}

export default Navbar;