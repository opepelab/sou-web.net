import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'


const About: React.FC  = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>about - sou</title>
          <meta name="description" content="私について"/>
        </Head>
        <main className="CN">
          <h1>About</h1>
          <div className="triangle-bottom" />
          <dl>
            <dt>Name</dt>
            <dd>Sou Watanabe</dd>
            <dt>sign</dt>
            <dd>Scorpio</dd>
            <dt>4タイプ</dt>
            <dd>法則理想</dd>
            <dt>干支</dt>
            <dd>戌年(Dog)</dd>
            <dt>Country</dt>
            <dd>Tokyo</dd>
            <dd>子供の頃からコンピュータが手元にあったこと<br/>
            この時代と生んでくれた母と父に感謝します。</dd>
          </dl>
        </main>
      </motion.div>
    </Layout>
  );
}

export default About;