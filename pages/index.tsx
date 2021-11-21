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
        <h1 className="Home hikki">S o u W e b</h1>
      </main>
    </motion.div>
  );
};

export default Index;
