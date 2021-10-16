import Head from 'next/head';


const About = () => {
  return (
    <div className="inblo">
      <Head>
        <title>detail - sou</title>
        <meta name="description" content="私について"/>
      </Head>
      <main>
        <h1>Detail</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>Name</dt>
          <dd>Sou Watanabe</dd>
          <dt>HN</dt>
          <dd>opera</dd>
          <dt>Country</dt>
          <dd>Japan Tokyo</dd>
          <dt>Job</dt>
          <dd>Front End Developer, Illustrator</dd>
          <dt>敬意と感謝</dt>
          <dd>子供の頃からコンピュータが手元にあったこと<br/>
          この時代と生んでくれた母と父に感謝します。</dd>
        </dl>
      </main>
    </div>
  );
}

export default About;