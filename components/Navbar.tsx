import Link from 'next/link'

// 上のなんか並んでるやつ
const Navbar = () => {
    return(     
        <header> 
            <nav>     
                <div className="flex-navbar">           
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="about"><a>About</a></Link></li>
                            <li><Link href="career"><a>Career</a></Link></li>
                            <li><Link href="access"><a>Access</a></Link></li>
                            <li><Link href="active"><a>Active Log</a></Link></li>
                            <li><Link href="https://opepelab.org/"><a>News Blog</a></Link></li>
                            
                        </ul>
                </div>
            </nav>    
        </header>
        
    );
}

export default Navbar;