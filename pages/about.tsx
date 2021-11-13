import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'


const About: React.FC  = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <Head>
          <title>about - sou</title>
          <meta name="description" content="私について"/>
        </Head>
        <main className="CN">
          <h1>About</h1>
          <div className="triangle-bottom" />
          <dl>
            <dt>name</dt>
            <dd>渡邊 蒼</dd>
            <dt>sign</dt>
            <dd>蠍座</dd>
            <dt>4type</dt>
            <dd>法則</dd>
            <dt>Eto!</dt>
            <dd>戌年</dd>
            <dt>location</dt>
            <dd>東京</dd>
            TypeScriptとReactとNext.js(Vercelに心酔しています)
            <dd>この時代と生んでくれた母と父に感謝します。</dd>
          </dl>
        </main>
      </motion.div>
    </Layout>
  );
}

export default About;