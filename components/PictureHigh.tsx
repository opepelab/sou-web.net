import Link from 'next/link'

const PictureHigh: React.FC = () => {
    return (
        <div className="flex-container top">
            <Link href="/files">
                <a><img className="Zoom" src="/images/folder.svg" width={70} height={70} /></a>
            </Link>
                 <img className="Maru Zoom" src="/images/orei.png" width={117} height={120} />
            <Link href="/contact">
                 <a><img className="Zoom" src="/images/gm.ico" width={70} height={70} /></a>
            </Link>
        </div>
    );
}

export default PictureHigh;