import Head from 'next/head';


const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>about - sou</title>
        <meta name="description" content="彼について"/>
      </Head>
      <h1 className="h1class">About</h1>
      <div className="triangle-bottom" />
      <main>
        <h2 className="h2class">「私について」</h2>
        <p>学歴について、</p>
        <p>幼少から学校に行けず家で勉強していました。</p>
        <p>友達と呼べる人も唯一1人くらいしかなかったです。</p>
        <p>成人してから国家資格である文部科学省の高認資格を取りました。</p>
        <p>海外の大学への憧れはあるのですが現状は目指していません。</p>
        <p>一度見たものをずっと記憶してしまうという特性を持っています。</p>
        
        <br />
    
        <h2 className="h2class">「設計思想」</h2>
        <h3>スタイルについて</h3>
        <p>カッコよくて美しくシンプルなモノ。</p>
        <p>元々デザインすることが好きだったためCSSを書くのは好きです。</p>

        <br />

        <h3 className="h3class">コードについて</h3>
        <p>より高速に動く軽量なコードが好きです。</p>
        <p>最小限かつ最大限の役割を果たすことが前提だと思っています。</p>
        <p>あとは意味を付けられない動きや動作はあまり好きではないです。</p>
        <p>そのためコメントアウトを無闇に入れることが嫌いです。</p>
        <p>コード作りの理想は子供たちに見せて説明しても理解できるものです。</p>
        <p>私は誰かにアイディアを出すために生まれてきました。</p>
        
        <br />

        <h4>敬意と感謝</h4>
        <p>子供の頃からAppleやMicrosoftの製品が手元にあったこと、</p>
        <p>この時代と生んでくれた@父と母に感謝しています。</p>
      </main>
    </div>
  );
}

export default About;