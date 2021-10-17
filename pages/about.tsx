import { motion } from "framer-motion";
import Head from 'next/head';



const About: React.FC = () => {
  return (
    <motion.div className="inblo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>about - sou</title>
        <meta name="description" content="私について"/>
      </Head>
      <main>
        <h1>About</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>Name</dt>
          <dd>Sou Watanabe</dd>
          <dt>HN</dt>
          <dd>opera</dd>
          <dt>Country</dt>
          <dd>Japan Tokyo</dd>
          <dt>Job</dt>
          <dd>Front End Developer, Illustrator</dd>
          <dt>敬意と感謝</dt>
          <dd>子供の頃からコンピュータが手元にあったこと<br/>
          この時代と生んでくれた母と父に感謝します。</dd>
        </dl>
      </main>
    </motion.div>
  );
}

export default About;