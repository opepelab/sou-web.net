import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <div>
      <Head>
        <title>TOP Watanabe S.</title>
        <meta name="description" content="トップページ"/>
      </Head>
      <h2 id="TitleColor">Watanabe S.</h2>
      <div className="triangle-bottom" />
        <main>
        <img className="Zoom pm" src="/images/ore.png" width={110} height={75} />
          <p>私のコンピュータサイエンスの活動内容や記録を載せています。</p>
          <h3>プロフィール</h3>
          <p>出身住まい：日本 東京都</p>
          <p>生年：1994年生まれ 戌年</p>
          <p>趣味：読書 音楽 CS/PC</p>
          <p>4タイプ:法則</p>
        </main>
    </div>
  );
}

export default Index;