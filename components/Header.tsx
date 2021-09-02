const Header: React.FC = () => {
    return (
        <div>
            <img className="left" src="/images/ore.png" width={148} height={100} />
        <div className="flex-container">
            <label htmlFor="checkBtn">     
                <header>
                    <h1 id="title"><a href="/">Sou Watanabe</a></h1>
                </header>
            </label>
        </div>
        </div>
    );
}

export default Header;