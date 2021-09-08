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
        <h4>「 Organize 」</h4>
        TypeScript<br />
        HTML CSS<br />
        Python<br />
          <Link href="https://nextjs.org/docs"><a><h5>Next.js document</h5></a></Link>
        <br />
        <br />
        <b>now loading...</b><br />
        ( C C+ C++ C# Rust )<br />
        <s>Clojure</s><br />
        <s>Scala</s><br />
        <s>Haskell</s><br />
        <br />
        <h4>「 e-Typing Score 」</h4>
        Professor
        <br /><br />
        <h4>「 Sequential Read 」</h4>
        20000moji/h
        <br /><br />
        <h4>「 Sequential Write 」</h4>
        2500moji/h 


      </main>
    </div>
  );
}

export default Skills;