// + Pct for Under ピクチャーを内包
const Footer: React.FC = () => {
    return (
        <div className="footer">
            <footer>
                <div className="flex-container">                      
                        <img className="Maru Zoom" src="/SVG/react.svg" width={50} height={50} />
                        <img className="Maru Zoom" src="/SVG/nextjs.svg" width={50} height={50} />
                        <img className="Maru Zoom" src="/SVG/html5.svg" width={50} height={50} />
                        <img className="Maru Zoom" src="/SVG/css3.svg" width={50} height={50} />
                        <img className="Maru Zoom" src="/SVG/python3.svg" width={50} height={50} />  
                </div>
                <h5>Copyright 2021 <a href="/">su</a> inc.</h5>
            </footer>
        </div>
    );
}

export default Footer;