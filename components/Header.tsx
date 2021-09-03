import Link from 'next/link'
const Header: React.FC = () => {
    return (
        <div>
            <img className="left" src="/images/ore.png" width={148} height={100} />
            <label htmlFor="checkBtn">     
                <header>
                    <h1 id="title"><Link href="/"><a  className="dark">Watanabe S.</a></Link></h1>
                </header>
            </label>
        </div>
    );
}

export default Header;