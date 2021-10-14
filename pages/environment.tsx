import Head from 'next/head'


const DevEnvi: React.FC = () => {
  return (
    <div className="inblo">
      <Head>
        <title>environment - sou</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <main>
        <h1>Design</h1>
        <div className="triangle-bottom" />
        <p>tablet : Cintiq Pro, Intuos SL</p>
        <p>software : PhotosohpCS6 CLIPSTUDIO/SAI2</p>
        <p>display : ColorEdge CS2410</p>
        <br />
        <h2>Environment</h2>
        <p>TypeScript/React.Tsx/HTML CSS</p>
        <p>Windows</p>
        <p>Git</p>
        <p>Visual Studio Code</p>
        <p>TypeScript</p>
        <p>Edge/Chrome/Safari</p>
        <p>Vercel</p>
      </main>
    </div>
  );
}

export default DevEnvi;