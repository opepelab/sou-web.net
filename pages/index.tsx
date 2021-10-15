import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <div className="inblo textLeft">
      <Head>
        <title>sou</title>
        <meta name="description" content="トップ"/>
      </Head>
      <main>
        <h1 className="TitleColor">Sou/W.</h1>
        <dl>
          <dt>性別</dt>
          <dd>男性</dd><br/>
          <dt>Birthday</dt>
          <dd>2nd November 1994</dd><br/>
          <dt>Sign</dt>
          <dd>Scorpio</dd><br/>
          <dt>十二支 </dt>
          <dd>戌年 (Dog)</dd><br/>
          <dt>血液型</dt>
          <dd>O型</dd><br/>
          <dt>4タイプ </dt>
          <dd>法則</dd><br/>
          <dt>趣味</dt>
          <dd>趣味 読書 倫理 ゲーム</dd>
        </dl>
      </main>
    </div>
  );
}

export default Index;