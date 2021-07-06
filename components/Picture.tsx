import Link from 'next/link'
import Image from 'next/image'

const Picture = () => {
    return(

        <div className="flex-container">
            <Link href="https://github.com/opepelab">
                <Image src="/images/gitx.png" width={100} height={100} />
            </Link>
                <table width="4%"></table>
            <Link href="https://opepelab.org">
                 <Image src="/images/wpss.png" width={100} height={100} />
            </Link>
                 <table width="4%"></table>
            <Link href="https://www.linkedin.com/in/s-watanabe-a25157205">
                 <Image src="/images/linkedx.png" width={100} height={100} />
            </Link>
        </div>
    )
}

export default Picture;