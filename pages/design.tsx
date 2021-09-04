import Head from 'next/head'


const Design: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Design - S.watana</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <h2>DESIGN</h2>
      <div className="triangle-bottom" />
      <main>
        font: さらわびゴシック Adobe Arabic Regular <br />
        Windows 10
        バージョン管理 Git
      </main>
    </div>
  );
}

export default Design;