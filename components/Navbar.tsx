import Link from 'next/link'

// 上のなんか並んでるやつ
const Navbar: React.FC = () => {
    return (     
        <header> 
            <nav>           
                <ul className="scroll">
                    <li><Link href="/"><a className="Nlink">Home</a></Link></li>
                    <li><Link href="about"><a className="Nlink">About</a></Link></li>
                    <li><Link href="skills"><a className="Nlink">Skills</a></Link></li>
                    <li><Link href="access"><a className="Nlink">Access</a></Link></li>
                    <li><Link href="service"><a className="Nlink">Service</a></Link></li>
                    <li><Link href="Controller"><a className="Nlink">Controller</a></Link></li>
                </ul>
            </nav>  
        </header>
        
    );
}

export default Navbar;