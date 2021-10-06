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
        <p>TypeScript/React.JSX/HTML CSS</p>
        <p>Python</p>
        <Link href="https://nextjs.org/docs"><a><h5>Next.js document</h5></a></Link>
        <Link href="architects"><a><h5>architects fairy</h5></a></Link>

        <h4>「 Iffy 」</h4>
        <p>( C <s>C+ C++ C# Rust</s> )</p>
        <p><s>Clojure</s></p>
        <p><s>Scala</s></p>
        <p><s>Haskell</s></p>

        <h4>「 e-Typing Score 」</h4>
        <p>Ninja~Professor</p>

        <h4>「 Sequential Read 」</h4>
        <p>54000moji/h</p>

        <h4>「 Sequential Write 」</h4>
        <p>2500～3700moji/h</p>
      </main>
    </div>
  );
}

export default Skills;