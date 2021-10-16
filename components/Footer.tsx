import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer">
            <footer>
            <Link href="/"><a className="scale"><h6 className="inblo">Copyright © 2021 Sou/Wv. inc.</h6></a></Link>
                <div className="flex-container">
                    <a href="https://nextjs.org/docs/">
                        <img className="Zoom" src="/SVG/NE.svg" width={40} height={40} />
                    </a>
                    <a href="https://typescript-jp.gitbook.io/deep-dive/">
                        <img className="Zoom" src="/SVG/TS.svg" width={50} height={50} />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;