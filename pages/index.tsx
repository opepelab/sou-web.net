import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <div className="inblo">
      <Head>
        <title>sou</title>
        <meta name="description" content="トップページ"/>
      </Head>
      <main>
      <h1 className="TitleColor">Sou/W.</h1>
      <div className="triangle-bottom" />
        <p>性別 男性</p>
        <p>出身住まい 日本 東京都</p>
        <p>生年 1994年11月2日生まれ</p>
        <p>星座 さそり座</p>
        <p>十二支 戌年</p>
        <p>血液型 O型</p>
        <p>4タイプ 法則</p>
        <p>趣味 読書 倫理 ゲーム</p>
        <p>タイピングスコア プロフェッサー</p>
      </main>
    </div>
  );
}

export default Index;