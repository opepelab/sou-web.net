import { motion } from "framer-motion";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>about - sou</title>
        <meta name="description" content="私について" />
      </Head>
      <main className="CN">
        <h1>Profile</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>Name</dt>
          <dd>sou Watanabe/蒼 渡邊</dd>
          <dt>Sign</dt>
          <dd>Scorpio/さそり座</dd>
          <dt>Type</dt>
          <dd>INTJ/コンセプチュアリプランナー</dd>
          <dt>Eto</dt>
          <dd>Dog/犬</dd>
          <dt>Location</dt>
          <dd>Kokura and Tokyo/小倉と東京</dd>
          <dt>Merci papa mama.</dt>
          <dd>私を作ってくれた生んでくれた母と父に感謝しています。</dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default About;
