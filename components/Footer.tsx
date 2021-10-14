import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <footer>
                <div className="flex-container">
                    <a href="https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics/">
                        <img className="Zoom" src="/SVG/HT.svg" width={40} height={40} />
                    </a>

                    <a href="https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/CSS_basics/">
                        <img className="Zoom" src="/SVG/CS.svg" width={40} height={40} />
                    </a>  

                    <a href="https://typescript-jp.gitbook.io/deep-dive/">
                        <img className="Zoom" src="/SVG/TS.svg" width={50} height={50} />
                    </a>

                    <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/">
                        <img className="Zoom" src="/SVG/JS.svg" width={50} height={50} />
                    </a>
                    
                    <a href="https://ja.reactjs.org/">
                        <img className="Zoom" src="/SVG/RE.svg" width={50} height={50} />
                    </a>

                    <a href="https://nextjs.org/docs/">
                        <img className="Zoom" src="/SVG/NE.svg" width={45} height={45} />
                    </a>
                        

                </div>
                <Link href="/"><a className="scale"><h6 className="inblo">Copyright © 2021 Sou/W. inc.</h6></a></Link>
            </footer>
        </div>
    );
}

export default Footer;