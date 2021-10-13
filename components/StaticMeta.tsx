import Head from 'next/head';
// 静的なメタタグ管理
const StaticMeta: React.FC = () => {
    return (
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.typekit.net/qev6edb.css" />
            <link rel="icon" href="/location.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="robots" content="noindex,nofollow" />
        </Head>
    );
} 

export default StaticMeta;