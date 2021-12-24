import { motion } from "framer-motion";
import Head from "next/head";

const Index = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>sou-web</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="margin50p textLeft">
        <h1>ダークモード/ライトモードをご利用いただけます</h1>
        <p>フロントエンド開発ヘッドレスAPIサービスなど質問などあれば知ってる範囲で答えられます。</p>
        <h2>経緯</h2>
        <p>最初CSSHTMLから始めてFirebaseにデプロイしHugoを触りNext.jsに行き着きました。</p>
        <p>GraphQLをちょっと勉強しましたがJavaScript(TS)が少し書ける程度です。</p>
        <p>現在はFigmaみたいなワイヤーフレームとデザインみたいなの少し勉強しています。</p>
      </main>
    </motion.div>
  );
};

export default Index;
