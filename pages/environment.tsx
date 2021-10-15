import Head from 'next/head'


const DevEnvi: React.FC = () => {
  return (
    <div className="inblo textLeft">
      <Head>
        <title>environment - sou</title>
        <meta name="description" content="環境"/>
      </Head>
      <main>
        <h1>Design</h1>
        <dl>
        <dt>Tablet</dt>
        <dd>Cintiq Pro, Intuos SL</dd>
        <br />
        <dt>Software</dt>
        <dd>Photosohp, SAI2, CLIPSTUDIO</dd>
        <br />
        <dt>Display</dt>
        <dd>ColorEdge CS2410</dd>
        <br />
        <h2>Environment</h2>
        <dt>OS</dt>
        <dd>Windows</dd><br />
        <dt>Version</dt>
        <dd>Git</dd><br />
        <dt>IDE</dt>   
        <dd>Visual Studio Code</dd><br />
        <dt>language</dt>
        <dd>TypeScript</dd><br />
        <dt>Browser</dt>
        <dd>Edge/Chrome/Safari</dd><br />
        <dt>Host</dt>
        <dd>Vercel</dd>
        </dl>
      </main>
    </div>
  );
}

export default DevEnvi;