import Link from 'next/link'
import Head from 'next/head';

const NotFound: React.FC = () => {
    return (
        <div>
            <Head>
                <title>404 - sou</title>
                <meta name="description" content="存在しないページ"/>
            </Head>
            <main>
            <h1>This page does not exist</h1>
                <div className="triangle-bottom" />
                <div>
                    <Link href="/"><a className="pinkLinks">Go To Back</a></Link>
                </div>
            </main>
        </div>
    );
}

export default NotFound;