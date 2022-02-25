import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Webclip: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>これだと思っていた重要なWEBページを公開クリップしています - sou</title>
        <meta name="description" content="開発環境" />
      </Head>
      <main className="Hlink list textLeft margin50p resizeimage">
        <h1>これだと思った重要なウェブページを公開クリップしています</h1>
        <div className="triangle-bottom" />
        <ul>
          <li>
            <a href="https://nico0927.hatenablog.com/entry/2017/10/31/221613">
              クリエイターとデザイナーとアーティストの違い
            </a>
          </li>
          <p>三つの違いについて絵コンテをもちいて説明されています、当てはまる人は一読の価値があります。</p>
          <li>
            <a href="https://digitalidentity.co.jp/blog/creative/color-psychology.html#i-10">
              色彩と心理の関係-「配色」をブランディングに活かそう！
            </a>
          </li>
          <p>色と心理学の関係を死ぬほど調べていた時期があってその時見つけたページです。</p>
          <p>個人的に何度も訪れる必須のページ。</p>
        </ul>
      </main>
    </Framerdiv>
  );
};

export default Webclip;
