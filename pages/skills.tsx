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
        <h3>「My Language」</h3>
        <b>TypeScript</b><br />
        <b>HTML CSS</b><br />
        <b>Python</b><br />
        <br />
        <b>now loading...</b><br />
        Rust(C C+)<br />
        Clojure<br />
        Haskell<br />
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