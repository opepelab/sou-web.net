import Link from 'next/link'

// 上のなんか並んでるやつ
const Navbar: React.FC = () => {
    return (     
        <header>
            <div className="Pb">
            <nav>           
                <ul>
                    <Link href="/"><a><li>HOME</li></a></Link>
                    <Link href="about"><a><li>ABOUT</li></a></Link>
                    <Link href="skills"><a><li>SKILL SET</li></a></Link>
                    <Link href="design"><a><li>DESIGN</li></a></Link>
                    <Link href="access"><a><li>ACCESS</li></a></Link>
                    <Link href="picture"><a><li>PICTURE</li></a></Link>
                </ul>
            </nav>  
            </div>
        </header>
        
    );
}

export default Navbar;