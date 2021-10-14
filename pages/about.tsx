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
        <p>name : Sou Watanabe</p>
        <p>handle : opera</p>
        <p>job : Front End Developer, Illustrator</p>
        <h4>敬意と感謝</h4>
        <p>子供の頃からコンピュータが手元にあったこと</p>
        <p>この時代と生んでくれた母と父に感謝します。</p>
      </main>
    </div>
  );
}

export default About;