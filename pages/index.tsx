import Head from 'next/head'

const Index = () => {
  return (
    <div className="inblo">
      <Head>
        <title>sou</title>
        <meta name="description" content="トップ"/>
      </Head>
      <main>
        <h1 className="TitleColor">Sou/W.</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>性別</dt>
          <dd>男性</dd>
          <dt>Birthday</dt>
          <dd>2nd November 1994</dd>
          <dt>Sign</dt>
          <dd>Scorpio</dd>
          <dt>十二支 </dt>
          <dd>戌年 (Dog)</dd>
          <dt>血液型</dt>
          <dd>O型</dd>
          <dt>4タイプ </dt>
          <dd>法則</dd>
          <dt>趣味</dt>
          <dd>読書 倫理 ゲーム</dd>
        </dl>
      </main>
    </div>
  );
}

export default Index;