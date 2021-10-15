import Head from 'next/head'

const Picture: React.FC = () => {
  return (
    <div id="pic" className="inblo">
      <Head>
        <title>artwork - sou</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <main>
        <h1>Picture</h1>
        <div className="triangle-bottom" />
          <div className="PZoom-in margin10 border2 cursorIn"><img className="PM" src="/picture/haruka.png" width={255} height={360} /></div>  
          <div className="PZoom-in margin10 border2 cursorIn"><img className="PM" src="/picture/jett.png" width={255} height={266} /></div> 
          <div className="PZoom-in margin10 border2 cursorIn"><img className="PM" src="/picture/otoko.png" width={255} height={403} /></div> 
      </main>
    </div>
  );
}

export default Picture;