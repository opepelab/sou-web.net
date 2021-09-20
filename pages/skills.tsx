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
        <p id="p2">TypeScript</p>
        <p id="p2">React.JSX</p>
        <p id="p2">HTML CSS</p>
        <p id="p2">Python</p>
        <Link href="https://nextjs.org/docs"><a><h5>Next.js document</h5></a></Link>
        <Link href="architects"><a><h5>architects fairy</h5></a></Link>

        <h4>「 Iffy 」</h4>
        <p id="p2">( C <s>C+ C++ C# Rust</s> )</p>
        <p id="p2"><s>Clojure</s></p>
        <p id="p2"><s>Scala</s></p>
        <p id="p2"><s>Haskell</s></p>

        <h4>「 e-Typing Score 」</h4>
        <p id="p2">Ninja~Professor</p>

        <h4>「 Sequential Read 」</h4>
        <p id="p2">54000moji/h</p>

        <h4>「 Sequential Write 」</h4>
        <p id="p2">2500～3700moji/h</p>
      </main>
    </div>
  );
}

export default Skills;