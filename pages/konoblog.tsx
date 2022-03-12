import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Webclip: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>Development Environment - sou</title>
        <meta name="description" content="開発環境" />
      </Head>
      <main className="textLeft margin50p">
        <h1>このブログについて</h1>
        <div className="triangle-bottom" />
        <p>Cloudflare registerで取得したドメインでCloudflare Pagesにデプロイしています。</p>
        <p>ContentfulのリッチテキストをMBAからいろんな場所でで入稿しています。</p>
        <p>iPadや携帯からも投稿できたらいいなと思います。</p>
        <p>
          Zenn.devやQiitaを使うことも考えたのですがあちらはコード専用な感じな気がしたので
          <br />
          もっというと日常的なことも書きたい日記にしたかったので手作りおだんごのお手製にしました。
          <br />
          技術的にTypeScriptとVisual Studio Codeの型推論を学ぶためにReact Next.jsで作ることにしました。
        </p>
        <p>
          普段はプログラミング以外はねこと遊んだりもしているので気軽に話しかけたりコンタクト送ってもらって大丈夫です。
        </p>
      </main>
    </Framerdiv>
  );
};

export default Webclip;
