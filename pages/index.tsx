import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Head>
        <title>sou-web</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="CN">
        <p>
          ライトテーマが見えづらい方は右上の四角いボタンでダークモードをご利用ください。
        </p>
      </main>
    </motion.div>
  );
};

export default Index;
