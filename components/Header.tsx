import Link from 'next/link'

type Props = {
    open: boolean;
    setOpen: Function;
};

const Header: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <div>
            <img className="left" src="/images/ore.png" width={148} height={100} />
            <div aria-expanded={open} onClick={() => setOpen(!open)}>
                <header>
                    <h1 id="title"><Link href="/"><a  className="dark">Watanabe S.</a></Link></h1>
                </header>
            </div>
            <div className="Line">
                <div aria-expanded={open} onClick={() => setOpen(!open)}>
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
}

export default Header;