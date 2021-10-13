import Head from 'next/head'


const DevEnvi: React.FC = () => {
  return (
    <div>
      <Head>
        <title>envi - sou</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <main>
        <h1>Environment</h1>
        <div className="triangle-bottom" />
        <h2>DESIGN</h2>
        <p>Wacom Cintiq Pro, Intuos SL</p>
        <p>PowerMate</p>
        <p>Game Sir Z1 R</p>
        <p>CLIPSTUDIO</p>
        <p>Photosohp CS6</p>
        <p>SAI2</p>
        <p>Eizo ColorEdge CS2410</p>
        <br />
        <h2>ENGINE</h2>
        <p>TypeScript/React.Tsx/HTML CSS</p>
        <p>Windows</p>
        <p>Git</p>
        <p>Visual Studio Code</p>
        <p>TypeScript</p>
        <p>Eslint</p>
        <p>Edge/Chrome/Safari</p>
        <p>Vercel</p>
        <p>Typing Score : Professor</p>
      </main>
    </div>
  );
}

export default DevEnvi;