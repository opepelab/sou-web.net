import Head from 'next/head';
import Link from 'next/link';

const Skills: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Skills - S.watana</title>
        <meta name="description" content="私の習得ルート"/>
      </Head>
      <main>
        HTML,CSS<br />
        <b>JavaScript</b><br />
        React(Next.js)<br />
        Vue(Nuxt.js)<br />
        Aurelia<br />
        <br />
        <b>now loading...</b><br />
        Java<br />
        Rust<br />
        React Native<br />
        Kotolin,Swift<br />
        <h5>
          <Link href="document">
            <a>document</a>
          </Link>
        </h5>
      </main>
    </div>
  );
}

export default Skills