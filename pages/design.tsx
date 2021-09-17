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
        <h4>「Font」</h4><br /> 
        JA: Google さらわびゴシック<br />
        EN: Adobe Arabic Regular<br />
        <br />
        <h4>「Development Environment」</h4><br />
        Windows<br />
        Git<br />
        Visual Studio Code<br />
        TypeScript<br />
        Eslint<br />
        Edge/Chrome/Safari<br />
        Vercel<br />
        <h4>「Art Work」</h4>
          Cintiq 24 Pro<br />
          Intuos 5 Lage<br />
          PowerMate<br />
          Game Sir Z1 R<br />
          CLIPSTUDIO<br />
          SAI2<br />
      </main>
    </div>
  );
}

export default Design;