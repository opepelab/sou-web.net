import Link from 'next/link'
import Head from 'next/head';

const NotFound: React.FC = () => {
    return (
        <div>
            <Head>
                <title>404 Watanabe S.</title>
                <meta name="description" content="存在しないページ"/>
            </Head>
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