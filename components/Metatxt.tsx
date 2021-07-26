import Head from 'next/head';
// 静的なメタタグ管理,動的なメタタグは該当部分に'next/head'で差し込み
const Metatxt: React.FC = () => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="robots" content="noindex,nofollow" />
        </Head>
    );
} 

export default Metatxt;