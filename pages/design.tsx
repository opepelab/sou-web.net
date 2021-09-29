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
          <p>JA: Google さらわびゴシック</p>
          <p>EN: Adobe Arabic Regular</p>
        <br />
        <h4>「Development Environment」</h4>
          <p>Windows</p>
          <p>Git</p>
          <p>Visual Studio Code</p>
          <p>TypeScript</p>
          <p>Eslint</p>
          <p>Edge/Chrome/Safari</p>
          <p>Vercel</p>
        <br />
        <p>「ハンバーガーメニューの実装方法」</p>
        <p>RyusouさんのBlogを参考にさせて頂きました。</p>
        <p>とても詳しくReactのHooksについて説明されているので、</p>
        <p>Reactを開拓してる人にはオススメだと思います。</p>
        <br/>
        <h4>「Art Work」</h4>
          <p>Wacom Cintiq Pro, Intuos Lage</p>
          <p>PowerMate</p>
          <p>Game Sir Z1 R</p>
          <p>CLIPSTUDIO</p>
          <p>SAI2</p>
      </main>
    </div>
  );
}

export default Design;