import Link from 'next/link'

const PhoneMenu: React.FC = () => {
    return (     
        <div className="sumaho">
            <input type="checkbox" id="checkBtn" className="checkHidden" />
                <label htmlFor="checkBtn">
                <div className="humberger">
                    <div></div>
                    <div></div>
                </div>
                </label>
            <nav className="bg">
                <div id="ms">
                <Link href="/" ><a><li className="tate">Home</li></a></Link>
                <Link href="about"><a><li className="tate">About</li></a></Link>
                <Link href="skills"><a><li className="tate">Skill</li></a></Link>
                <Link href="access"><a><li className="tate">SNS</li></a></Link>
                <Link href="service"><a><li className="tate">Prod</li></a></Link>
                <Link href="design"><a><li className="tate">Artis</li></a></Link>
                </div>  
            </nav>
        </div>
    );
}

export default PhoneMenu;