import Head from 'next/head'
import Link from 'next/link'

const Skills: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Skills - S.watana</title>
        <meta name="description" content="私の習得ルート"/>
      </Head>
      <h2>SKILL SET</h2>
      <div className="triangle-bottom" />
      <main>
        TypeScript<br />
        HTML CSS<br />
        Python<br />
        <br />
        <b>now loading...</b><br />
        Rust(C C+ C++)<br />
        Clojure<br />
        Haskell<br />
        Scala<br />
        Swift<br />
        <h5>
          <Link href="document">
            <a>Next.js document</a>
          </Link>
        </h5>
      </main>
    </div>
  );
}

export default Skills;