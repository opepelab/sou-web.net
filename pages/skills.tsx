import Head from 'next/head'
import Link from 'next/link'

const Skills: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Skills - S.watana</title>
        <meta name="description" content="私の習得ルート"/>
      </Head>
      <h2>Skills</h2>
      <div className="triangle-bottom" />
      <main>
        HTML,CSS<br />
        <b>TypeScript</b><br />
        React(Next.js)<br />
        Vue(Nuxt.js)<br />
        <br />
        <b>now loading...</b><br />
        Rust(C C+)<br />
        Clojure<br />
        Haskell<br />
        Python(Deep node AI)<br />
        Angular<br />
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

export default Skills;