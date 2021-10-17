import Head from 'next/head'

const Index = () => {
  return (
    <div className="inblo">
      <Head>
        <title>sou</title>
        <meta name="description" content="トップ"/>
      </Head>
      <main>
        <h1 className="Title">Sou/Wv.</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>星座 (Sign)</dt>
          <dd>Scorpio</dd>
          <dt>十二支 </dt>
          <dd>戌年 (Dog)</dd>
          <dt>Birthday</dt>
          <dd>2nd November 1994</dd>
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