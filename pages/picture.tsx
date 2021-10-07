import Head from 'next/head'

const Picture: React.FC = () => {
  return (
    <div id="pic">
      <Head>
        <title>Picture Watanabe S.</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <h2>PICTURE</h2>
      <div className="triangle-bottom" />
      <main>
      <img className="Zoom pm" src="/picture/haruka.png" width={214} height={302} />
      <img className="Zoom pm" src="/picture/watas.png" width={214} height={302} />
      <img className="Zoom pm" src="/picture/otoko.png" width={255} height={404} />
      </main>
    </div>
  );
}

export default Picture;