import Link from 'next/link'

const NotFound: React.FC = () => {
    return (
        <div>
            <h2>
                This page is not found.
            </h2>
        <div className="triangle-bottom" />
        <p>
            Go To <Link href="/"><a>HOMEPAGE</a></Link>
        </p>
        </div>
    );
}

export default NotFound;