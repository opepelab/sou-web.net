import { motion } from "framer-motion";
import Head from "next/head";

const Develop: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>index - sou</title>
        <meta name="description" content="ホーム" />
      </Head>
      <main className="margin50p inblo">
        <h1>index</h1>
        <div className="triangle-bottom" />
        <p>NPOでエンジニアをしているSOUWEB(Sou Watanabe)のウェブサイトです。</p>
        <p>日常で思った事やお買い物のブログなど配信中</p>
      </main>
    </motion.div>
  );
};

export default Develop;
