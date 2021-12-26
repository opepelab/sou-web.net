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
        <h1>ダークモードが怖い方はライトモードを使用してください</h1>
      </main>
    </motion.div>
  );
};

export default Index;
