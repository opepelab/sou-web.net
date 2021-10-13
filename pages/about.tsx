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
        <div className="triangle-bottom" />
        <h2>私について</h2>
        <h3>学歴について</h3>
        <p>幼少から学校に行けず家で勉強していました。<br/>友達と呼べる人も唯一1人くらいしかなかったです。</p>
        <p>成人してから国家資格である文部科学省の高認資格を取りました。</p>
        <p>一度見たものをずっと記憶してしまうという特性を持っています。</p>
        <br />
        <h2>「設計思想」</h2>
        <h3>スタイルについて</h3>
        <p>カッコよくて美しくシンプルなモノ。<br />元々デザインすることが好きだったためCSSを書くのは好きです。</p>
        <br />
        <h3>コードについて</h3>
        <p>より高速に動く軽量なコードが好きです。<br />最小限かつ最大限の役割を果たすことが前提だと思っています。</p>
        <p>あまり意味を付けられない動きや動作は好みではなく、そのためコメントアウトを無闇に入れるようなことが嫌いです。</p>
        <p>コード作りの理想は子供たちに見せて説明しても理解できるものです。</p>
        <br />
        <h4>敬意と感謝</h4>
        <p>子供の頃からAppleやMicrosoftの製品が手元にあったこと、</p>
        <p>この時代と生んでくれた@父と母に感謝しています。</p>
      </main>
    </div>
  );
}

export default About;