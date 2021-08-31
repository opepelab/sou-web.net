import Head from 'next/head';


const About: React.FC = () => {
  return (
    <div className="body">
      <Head>
        <title>About - S.watana</title>
        <meta name="description" content="彼について"/>
      </Head>
      <h2>About</h2>
      <div className="triangle-bottom" />
      <main>
        <h3>「設計思想」</h3>
        パーツ事に軽量な方がいい<br />
        より高速に動く物を好む<br />
        それがコードであるなら最短で最高率を好む<br />
        もしシステムなら堅牢かつ物理的にもそうであることは言うまでもない<br />
        一体として柔軟な動きが可能であるべき。<br />
      </main>
    </div>
  );
}

export default About;