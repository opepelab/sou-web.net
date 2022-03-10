import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Webclip: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>Development Environment - sou</title>
        <meta name="description" content="開発環境" />
      </Head>
      <main className="margin50p resizeimage inblo">
        <h1>このブログについて</h1>
        <div className="triangle-bottom" />
        <p>Contentfulのリッチテキストで入稿しています。</p>
        <p>iPadや携帯からも投稿できたらいいなと思います。</p>
        <p>
          Zenn.devやQiitaを使うことも考えたのですがあちらはコード専用な感じな気がしたので
          <br />
          TypeScriptとVisual Studio Codeの型推論を学ぶためにReact Next.jsで作ることにしました。
        </p>
        <p>普段はプログラミング以外はねこと遊んだりもしているので気軽にコンタクトを送ってもらってかませいません。</p>
      </main>
    </Framerdiv>
  );
};

export default Webclip;
