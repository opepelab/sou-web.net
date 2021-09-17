import Head from 'next/head'
import Link from 'next/link'

const Skills: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Skills Watanabe S.</title>
        <meta name="description" content="私の習得ルート"/>
      </Head>
      <h2>SKILL SET</h2>
      <div className="triangle-bottom" />
      <main>
        <h4>「 Must 」</h4>
        TypeScript<br />
        React.JSX<br />
        HTML CSS<br />
        Python<br />
        <Link href="https://nextjs.org/docs"><a><h5>Next.js document</h5></a></Link>
        <Link href="architects"><a><h5>architects fairy</h5></a></Link>
        <br />
        <br />
        <h4>「 Iffy 」</h4>
        ( C <s>C+ C++ C# Rust</s> )<br />
        <s>Clojure</s><br />
        <s>Scala</s><br />
        <s>Haskell</s><br />
        <br />
        <h4>「 e-Typing Score 」</h4>
        Professor
        <br /><br />
        <h4>「 Sequential Read 」</h4>
        54000moji/h
        <br /><br />
        <h4>「 Sequential Write 」</h4>
        2500～3700moji/h<br />
      </main>
    </div>
  );
}

export default Skills;