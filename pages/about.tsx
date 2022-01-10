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
        <h1>About</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>Name</dt>
          <dd>sou Watanabe</dd>
          <dt>Sign</dt>
          <dd>Scorpio</dd>
          <dt>Type</dt>
          <dd>INTJ</dd>
          <dt>Eto</dt>
          <dd>Dog</dd>
          <dt>Location</dt>
          <dd>Kokura and Tokyo</dd>
          <dt>Merci papa mama.</dt>
          <dd>私を作ってくれた生んでくれた母と父に感謝しています。</dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default About;
