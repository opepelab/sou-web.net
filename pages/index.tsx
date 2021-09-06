import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>TOP - S.watana</title>
        <meta name="description" content="トップページ"/>
      </Head>
      <h2>HOME</h2>
      <div className="triangle-bottom" />
        <main>
          このウェブアプリは私のコンピュータサイエンスの活動内容や記録を載せています。
          <h3>プロフィール</h3>
          出身住まい：日本 東京都<br />
          生年：1994年生まれ 戌年<br />
          趣味：読書 音楽<br />
        </main>
    </div>
  );
}

export default Index;