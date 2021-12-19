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
          <dd>sou333</dd>
          <dt>Sign</dt>
          <dd>Scorpio</dd>
          <dt>Type</dt>
          <dd>ENTP</dd>
          <dt>Eto</dt>
          <dd>Dog</dd>
          <dt>Location</dt>
          <dd>Tokyo</dd>
          <dt>Merci papa maman.</dt>
          <dd>生んでくれた母と父に感謝します。</dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default About;
