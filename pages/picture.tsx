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
        <div className="cursorIn">
          <div className="PZoom-in margin10 border2"><img className="PM" src="/picture/haruka.svg" width={255} height={360} /></div>  
          <div className="PZoom-in margin10 border2"><img className="PM" src="/picture/jett.svg" width={255} height={266} /></div> 
          <div className="PZoom-in margin10 border2"><img className="PM" src="/picture/otoko.svg" width={255} height={403} /></div> 
        </div>
      </main>
    </div>
  );
}

export default Picture;