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
          <p id="p2">JA: Google さらわびゴシック</p>
          <p id="p2">EN: Adobe Arabic Regular</p>
        <br />
        <h4>「Development Environment」</h4>
          <p id="p2">Windows</p>
          <p id="p2">Git</p>
          <p id="p2">Visual Studio Code</p>
          <p id="p2">TypeScript</p>
          <p id="p2">Eslint</p>
          <p id="p2">Edge/Chrome/Safari</p>
          <p id="p2">Vercel</p>
        <br />
        <h4>「Art Work」</h4>
          <p id="p2">Wacom Cintiq Pro, Intuos Lage</p>
          <p id="p2">PowerMate</p>
          <p id="p2">Game Sir Z1 R</p>
          <p id="p2">CLIPSTUDIO</p>
          <p id="p2">SAI2</p>
      </main>
    </div>
  );
}

export default Design;