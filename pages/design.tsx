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
        「Font」<br /> 
        JA: Google さらわびゴシック<br />
        EN: Adobe Arabic Regular<br />
        <br />
        「Development Environment」<br />
        Git<br />
        Visual Studio Code<br />
        TypeScript<br />
        Eslint<br />
        Edge/Chrome/Safari<br />
        Vercel<br />

      </main>
    </div>
  );
}

export default Design;