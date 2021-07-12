import Image from 'next/image'

// + Pct for Under ピクチャーを内包
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="flex-container">                      
                        <Image src="/SVG/react.svg" width={50} height={50} />
                        <table width="2%"></table>
                        <Image src="/SVG/nextjs.svg" width={50} height={50} />
                        <table width="2%"></table>
                        <Image src="/SVG/facebook.svg" width={50} height={50} />
                        <table width="2%"></table>
                        <Image src="/SVG/html5.svg" width={50} height={50} />
                        <table width="2%"></table>
                        <Image src="/SVG/css3.svg" width={50} height={50} />
                        <table width="2%"></table>
                        <Image src="/SVG/python3.svg" width={50} height={50} />
                </div>
                <h5>Copyright 2021 <a href="mailto:ocelot2828@gmail.com">su</a> inc.</h5>
            </footer>
        </div>
    );
}

export default Footer;















