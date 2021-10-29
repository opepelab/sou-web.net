import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
    return (
        <div className="Logo inblo">
            <div className="scale2">
            <Link href="/">
                <a>
                    <Image className="Maru mobile" src="/SVG/ico.svg" width={50} height={50} />
                </a>
            </Link>
            </div>
        </div>
    );
}

export default Logo;