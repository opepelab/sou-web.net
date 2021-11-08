import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
    return (
        <div className="Logo inblo">
            <Link href="/">
                <a>
                    <Image className="m0" src="/logogo.png" width={50} height={50} />
                </a>
            </Link>
        </div>
    );
}

export default Logo;