import Head from 'next/head'


const Design: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Design Watanabe S.</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <h2>DESIGN</h2>
      <div className="triangle-bottom" />
      <main>
        <h4>「Font」</h4>
        <br />
        <p>JA: Google さらわびゴシック</p>
        <p>EN: Adobe Arabic Regular</p>
        <br />
        <h4>「Development Environment」</h4>
        <br />
        <p>Windows</p>
        <p>Git</p>
        <p>Visual Studio Code</p>
        <p>TypeScript</p>
        <p>Eslint</p>
        <p>Edge/Chrome/Safari</p>
        <p>Vercel</p>
        <h4>「Art Work」</h4>
          <p>Cintiq 24 Pro</p>
          <p>Intuos 5 Lage</p>
          <p>PowerMate</p>
          <p>Game Sir Z1 R</p>
          <p>CLIPSTUDIO</p>
          <p>SAI2</p>
      </main>
    </div>
  );
}

export default Design;