import Head from 'next/head';


const About: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>About - S.watana</title>
        <meta name="description" content="彼について"/>
      </Head>
      <main>
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