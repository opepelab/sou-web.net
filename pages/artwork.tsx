import Head from 'next/head'

const ArtWork: React.FC = () => {
  return (
    <div id="pic">
      <Head>
        <title>artwork - sou</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <h1 className="h1class">ArtWork</h1>
      <div className="triangle-bottom" />
      <main>
      <img className="PZoom pm" src="/picture/haruka.png" width={255} height={358} />
      <img className="PZoom pm" src="/picture/jett.png" width={255} height={269} />
      <img className="PZoom pm" src="/picture/otoko.png" width={255} height={404} />
      </main>
    </div>
  );
}

export default ArtWork;