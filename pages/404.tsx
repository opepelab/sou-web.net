import Link from 'next/link'

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h2>
                That page cannot be found.
            </h2>
        <p>
            Go back to the <Link href="/"><a>Homepage</a></Link>
        </p>
        </div>
    );
}

export default NotFound;