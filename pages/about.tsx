import Head from 'next/head';


const About: React.FC = () => {
  return (
    <div className="inblo textLeft">
      <Head>
        <title>about - sou</title>
        <meta name="description" content="彼について"/>
      </Head>
      <main>
        <h1>About</h1>
        <dl>
          <dt>Name</dt>
          <dd>Sou Watanabe</dd>
          <br/>
          <dt>HN</dt>
          <dd>opera</dd>
          <br/>
          <dt>Country</dt>
          <dd>Japan Tokyo</dd>
          <br/>
          <dt>Job</dt>
          <dd>Front End Developer, Illustrator</dd>
          <br/>
          <dt>敬意と感謝</dt>
          <dd>子供の頃からコンピュータが手元にあったこと</dd>
          <dd>この時代と生んでくれた母と父に感謝します。</dd>
        </dl>
      </main>
    </div>
  );
}

export default About;