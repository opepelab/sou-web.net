import Image from 'next/image'

const Logo: React.FC = () => {
    return (
        <div className="Logo inblo">
            <Image className="Maru mobile" src="/SVG/jett.svg" width={50} height={50} />
        </div>
    );
}

export default Logo;