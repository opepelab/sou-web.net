import Head from 'next/head'

const ArtWork: React.FC = () => {
  return (
    <div id="pic">
      <Head>
        <title>ARTWORK Watanabe S.</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <h2>ARTWORK</h2>
      <div className="triangle-bottom" />
      <main>
      <img className="Zoom pm" src="/picture/haruka.png" width={255} height={358} />
      <img className="Zoom pm" src="/picture/jett.png" width={255} height={269} />
      <img className="Zoom pm" src="/picture/otoko.png" width={255} height={404} />
      </main>
    </div>
  );
}

export default ArtWork;