import { motion } from "framer-motion";
import Head from "next/head";

const Index = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Head>
        <title>sou-web</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="margin50p">
        <p>初めまして 😎 😸</p>
        <p>ダークモードが怖い方は星マークからライトモードをご利用ください。</p>
        <p>フロントエンド開発、HTML CSSに関する深い知識、React Nextなどの近代技術やヘッドレスCMSの文化など</p>
      </main>
    </motion.div>
  );
};

export default Index;
