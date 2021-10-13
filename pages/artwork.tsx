import Head from 'next/head'

const ArtWork: React.FC = () => {
  return (
    <div id="pic" className="inblo">
      <Head>
        <title>artwork - sou</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <main>
        <h1>ArtWork</h1>
        <div className="triangle-bottom" />
        <div>
          <img className="PZoom-in cursorIn pm" src="/picture/haruka.png" width={255} height={358} />
          <img className="PZoom-in cursorIn pm" src="/picture/jett.png" width={255} height={269} />
          <img className="PZoom-in cursorIn pm" src="/picture/otoko.png" width={255} height={404} />
        </div>
      </main>
    </div>
  );
}

export default ArtWork;