import Head from 'next/head';


const About: React.FC = () => {
  return (
    <div className="body">
      <Head>
        <title>About - S.watana</title>
        <meta name="description" content="彼について"/>
      </Head>
      <h2>ABOUT</h2>
      <div className="triangle-bottom" />
      <main>
        <h3>「私について」</h3>
        まず学歴について、子供のころから最初から学校に行ってませんでした。<br />
        大人になってから文科認定の世界で言うhigh school認定しました。<br />
        universityへの憧れはありますが、残念なことに日本の学問への興味はありません。
        <br /><br />
        <h3>「このサイトについて」</h3>
        静的サイトジェネレータってなんぞや、hugo?ふむふむ<br />
        と調べていたらReactで作りました。
        <br /><br />
        <h3>「設計思想について」</h3>
        パーツ事に軽量な方が良くて、より高速に動く物が好きです。<br />
        もちろんコードなら最小限であり最大の役割をすることが前提です。<br />
        システムの脆弱性やバグが大好きです。<br />
        子供の頃からAppleやMicrosoftの製品が手元にあったことに感謝しています。<br />
        逆に意味をなさない行為、行動、動き、動作、<br />
        全てを嫌いというレベルではありませんが拒絶反応が出ます。<br />
      </main>
    </div>
  );
}

export default About;