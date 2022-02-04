import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";
import Link from "next/link";

const Privacy: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>404 - sou</title>
        <meta name="description" content="存在しないページ" />
      </Head>
      <main className="list margin50p textLeft inblo">
        <h1>このサイトについて</h1>
        <p>JavaScriptが動作しない環境では動作が保証されません。</p>
        <p>このサイトはGoogleAnalyticsを使用しています。</p>
        <p>古い端末での動作をサポートしてない場合があります。</p>
        <p>全てのブラウザに対応していません。</p>
        <h1>クッキー</h1>
        <p>このサイトはGoogleAnalyticsを使用しデータを収集していることを明示します。</p>

        <h2>制作に使っている素材</h2>
        <ul>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Eslint</li>
          <li>Prettier</li>
          <li>Scss</li>
          <li>Contentful</li>
        </ul>
        <br />
      </main>
    </Framerdiv>
  );
};

export default Privacy;
