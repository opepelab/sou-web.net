import Link from 'next/link'
import Image from 'next/image'

const PictureHigh = () => {
    return(

        <div className="flex-container">
            <Link href="https://github.com/opepelab">
                <Image src="/images/gitx.png" width={50} height={50} />
            </Link>
                <table width="1%"></table>
            <Link href="mailto:ocelot2828@gmail.com">
                 <Image src="/images/mail.png" width={50} height={50} />
            </Link>
                 <table width="1%"></table>
            <Link href="https://www.linkedin.com/in/s-watanabe-a25157205">
                 <Image src="/images/linkedx.png" width={50} height={50} />
            </Link>
        </div>
    );
}

export default PictureHigh;