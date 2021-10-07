// + Pct for Under ピクチャーを内包
const Footer: React.FC = () => {
    return (
        <div className="footer">
            <footer>
                <div className="flex-container">        
                
                        <a href="https://docs.python.org/ja/3/reference/index.html">
                            <img className="Zoom" src="/SVG/TypeScript.svg" width={50} height={50} />
                        </a>   

                        <a href="https://ja.reactjs.org/docs/getting-started.html">
                            <img className="Zoom" src="/SVG/Next.svg" width={50} height={50} />
                        </a>
                        
                        <a href="https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics">
                        <img className="Zoom" src="/SVG/html5.svg" width={50} height={50} />
                        </a>

                        <a href="https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/CSS_basics">
                            <img className="Zoom" src="/SVG/css3.svg" width={50} height={50} />
                        </a>

                </div>
                <a className="black" href="/"><h5 className="inblo">Copyright © 2021 Watanabe S. inc.</h5></a> 
            </footer>
        </div>
    );
}

export default Footer;