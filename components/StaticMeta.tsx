import Head from 'next/head';
// 静的なメタタグ管理
const StaticMeta: React.FC = () => {
    return (
        <Head>
            <link rel="icon" href="/azur.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="robots" content="noindex,nofollow" />
            <link href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic" rel="stylesheet" />
        </Head>
    );
} 

export default StaticMeta;