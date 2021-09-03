import Link from 'next/link'

// 上のなんか並んでるやつ
const Sidebar: React.FC = () => {
    return (     
        <div className="navSide">           
        <ul>
        <Link href="/"><a><div className="migi"><li className="hako">Home</li></div></a></Link>
        <Link href="about"><a><div className="migi"><li className="hako">About</li></div></a></Link>
        <Link href="skills"><a><div className="migi"><li className="hako">Skills</li></div></a></Link>
        <Link href="access"><a><div className="migi"><li className="hako">Access</li></div></a></Link>
        <Link href="service"><a><div className="migi"><li className="hako">Service</li></div></a></Link>
        <Link href="design"><a><div className="migi"><li className="hako">Design</li></div></a></Link>
        </ul>
        </div>  
    );
}

export default Sidebar;