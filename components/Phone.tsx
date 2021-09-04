
const Phone: React.FC = () => {
    return (     
        <div className="none">
            <input type="checkbox" id="checkBtn" className="checkHidden" />
                <label htmlFor="checkBtn">
                <div className="humberger">
                    <div></div>
                    <div></div>
                </div>
                </label>
            <nav className="bg">
                <div id="ms">
                <label htmlFor="checkBtn">
                    <a href="about"><li className="tate">ABOUT</li></a>
                    <a href="access"><li className="tate">ACCESS</li></a>
                    <a href="skills"><li className="tate">SKILL SET</li></a>
                    <a href="service"><li className="tate">SERVICE</li></a>
                    <a href="design"><li className="tate">DESIGN</li></a>
                </label>
                </div>  
            </nav>
        </div>
    );
}

export default Phone;