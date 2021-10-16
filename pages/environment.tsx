import Head from 'next/head'


const DevEnvi: React.FC = () => {
  return (
    <div className="inblo">
      <Head>
        <title>environment - sou</title>
        <meta name="description" content="環境"/>
      </Head>
      <main>
        <h1>Env</h1>
        <div className="triangle-bottom" />
        <dl>
          <h2>Design</h2>
          <dt>Tablet</dt>
          <dd>Cintiq Pro, Intuos SL</dd>
          <dt>Software</dt>
          <dd>Photosohp, SAI2, CLIPSTUDIO</dd>
          <dt>Display</dt>
          <dd>ColorEdge CS2410</dd>
          <br/>
          <h2>Computer</h2>
          <dt>OS</dt>
          <dd>Windows</dd>
          <dt>Version</dt>
          <dd>Git</dd>
          <dt>IDE</dt>   
          <dd>Visual Studio Code</dd>
          <dt>language</dt>
          <dd>TypeScript</dd>
          <dt>Browser</dt>
          <dd>Edge/Chrome/Safari</dd>
          <dt>Host</dt>
          <dd>Vercel</dd>
        </dl>
      </main>
    </div>
  );
}

export default DevEnvi;