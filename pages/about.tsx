import Head from 'next/head';


const About: React.FC = () => {
  return (
    <div className="inblo">
      <Head>
        <title>about - sou</title>
        <meta name="description" content="彼について"/>
      </Head>
      <main>
        <h1>About</h1>
        <div className="triangle-bottom" /><br />
        <p>フロントエンド開発者です</p>
        <h2>学歴</h2>
        <p>学校に行ってなかったので成人してから国家資格の文部科学省の高認資格を取りました。</p>
        <br />
        <h2>設計思想スタイル</h2>
        <p>シンプルで美しくカッコいいデザイン</p>
        <p>高速に動く軽量な短いコードが好きです。</p>
        <p>コード作りの基本は子供に説明しても理解できるものがいいです。</p>
        <br />
        <h4>敬意と感謝</h4>
        <p>子供の頃からAppleやMicrosoftの製品が手元にあったこと</p>
        <p>この時代と生んでくれた@父と母に感謝しています。</p>
      </main>
    </div>
  );
}

export default About;