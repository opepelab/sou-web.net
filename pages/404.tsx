import Link from 'next/link'
import Head from 'next/head';

const NotFound: React.FC = () => {
    return (
        <div>
            <Head>
                <title>404 - sou</title>
                <meta name="description" content="存在しないページ"/>
            </Head>
            <h1>This page is not found.</h1>
                <div className="triangle-bottom" />
            <p>
                Go To <Link href="/"><a>HOMEPAGE</a></Link>
            </p>
        </div>
    );
}

export default NotFound;