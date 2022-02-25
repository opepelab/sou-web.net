import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Webclip: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>これだと思っていた重要なWEBページを公開クリップしています - sou</title>
        <meta name="description" content="開発環境" />
      </Head>
      <main className="margin50p textLeft resizeimage inblo">
        <h1>これだと思っていた重要なWEBページを公開クリップしています</h1>
        <div className="triangle-bottom" />
        <ul>
          <li>
            <a href=""></a>クリエイターとデザイナーとアーティストの違い
          </li>
          <p>三つの違いについて絵コンテをもちいて説明されています、当てはまる人は一読の価値があります。</p>
          <li>クリエイターとデザイナーとアーティストの違い</li>
          <p>三つの違いについて絵コンテをもちいて説明されています、当てはまる人は一読の価値があります。</p>
          <li>クリエイターとデザイナーとアーティストの違い</li>
          <p>三つの違いについて絵コンテをもちいて説明されています、当てはまる人は一読の価値があります。</p>
        </ul>
      </main>
    </Framerdiv>
  );
};

export default Webclip;
