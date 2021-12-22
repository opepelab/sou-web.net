import { motion } from "framer-motion";
import Head from "next/head";

const Index = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>sou-web</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="margin50p">
        <p>ダークモードが怖い方は星マークからライトモードをご利用ください。</p>
        <p>フロントエンド開発ヘッドレスCMSAPIサービスなど質問などあればメールください</p>
      </main>
    </motion.div>
  );
};

export default Index;
