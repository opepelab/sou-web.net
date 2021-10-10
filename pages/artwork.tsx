import Head from 'next/head'

const ArtWork: React.FC = () => {
  return (
    <div id="pic">
      <Head>
        <title>ArtWork Watanabe S.</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <h2>ArtWork</h2>
      <div className="triangle-bottom" />
      <main>
      <img className="Zoom pm" src="/picture/haruka.png" width={214} height={302} />
      <img className="Zoom pm" src="/picture/jett.png" width={350} height={364} />
      <img className="Zoom pm" src="/picture/otoko.png" width={255} height={404} />
      </main>
    </div>
  );
}

export default ArtWork;