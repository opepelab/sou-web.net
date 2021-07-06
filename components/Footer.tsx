import Link from 'next/link'
import Image from 'next/image'

// + Pct for Under

const Footer = () => {
    return(
        <div>
            <footer>
                <div className="flex-container">
                    <Link href="https://github.com/opepelab">
                        <Image src="/images/twi.png" width={30} height={30} />
                    </Link>
                    <table width="2%"></table>
                    <Link href="">
                        <Image src="/images/you.png" width={30} height={30} />
                    </Link>
                    <table width="2%"></table>
                    <Link href="https://www.linkedin.com/in/s-watanabe-a25157205">
                        <Image src="/images/linkedx.png" width={30} height={30} />
                    </Link>
                </div>
                <h5>Copyright 2021 <a href="mailto:ocelot2828@gmail.com">su</a> inc.</h5>
            </footer>
        </div>
    );
}

export default Footer;
















