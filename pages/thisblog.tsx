import Freya from "../components/Sys/Freya";
import Head from "next/head";

const Thisblog: React.FC = () => {
  return (
    <Freya>
      <Head>
        <title>Development Environment - sou</title>
        <meta name="description" content="開発環境" />
      </Head>
      <main className="textLeft margin-Mobile-PC">
        <h1>What is this blog?</h1>
        <p>Cloud: Cloudflare</p>
        <p>CSS: TailWind CSS Sass</p>
        <p>use TypeScript(Lint strict)</p>
        <p>use Node.js React library Nexet.js</p>
        <p>Blog: Contentful</p>
        <p>スマートホンから投稿したりしています。</p>
        <p>
          Zenn.devやQiitaを使うことも考えたのですがあちらはコード専用な感じな気がしたので
          <br />
          もっというと日常的なことも書きたい日記にしたかったので手作りしました。
          <br />
        </p>
        <p>普段はプログラミング以外はねこと遊んだりもしているので気軽に話しかけたりコンタクト送ってくださいね。</p>
        <p>Welcome to my home page, refresh and swich your identitiy.</p>
        <p>Let's enjoy the code architect and programing! I'm going OSS mobile application contribution.</p>
      </main>
    </Freya>
  );
};

export default Thisblog;
