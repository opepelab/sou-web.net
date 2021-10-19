import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <div>
            <footer>
            <Link href="/"><a className="scale"><h6 className="inblo">©<span className="hikki"> Sou-Web </span></h6></a></Link>
            </footer>
        </div>
    );
}

export default Footer;