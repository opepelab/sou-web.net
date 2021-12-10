import { motion } from "framer-motion";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Head>
        <title>about - sou</title>
        <meta name="description" content="私について" />
      </Head>
      <main className="CN">
        <h1>About</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>name</dt>
          <dd>SOU</dd>
          <dt>sign</dt>
          <dd>Scorpio</dd>
          <dt>Type Four</dt>
          <dd>law</dd>
          <dt>eto</dt>
          <dd>Dog</dd>
          <dt>location</dt>
          <dd>Tokyo</dd>
          <dt>Merci papa maman.</dt>
          <dd>生んでくれた母と父に感謝します。</dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default About;
