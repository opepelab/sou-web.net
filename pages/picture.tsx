import Head from 'next/head'

const Picture: React.FC = () => {
  return (
    <div id="pic" className="inblo selectNone">
      <Head>
        <title>artwork - sou</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <main>
        <h1>Picture</h1>
        <div className="cursorIn">
          <img className="PZoom-in  pm" src="/picture/haruka.svg" width={255} height={358} />
          <img className="PZoom-in  pm" src="/picture/jett.svg" width={255} height={269} />
          <img className="PZoom-in  pm" src="/picture/otoko.svg" width={255} height={404} />
        </div>
      </main>
    </div>
  );
}

export default Picture;