import { motion } from "framer-motion";
import Layout from '../components/layout'
import Head from 'next/head'


const Env: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <Layout home={false}>
      <Head>
        <title>environment - sou</title>
        <meta name="description" content="環境"/>
      </Head>
      <main>
        <h1>Env</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>OS</dt>
          <dd>Windows</dd>
          <dt>Version</dt>
          <dd>Git</dd>
          <dt>IDE</dt>   
          <dd>Visual Studio Code</dd>
          <dt>language</dt>
          <dd>TypeScript</dd>
          <dt>Browser</dt>
          <dd>Edge/Chrome/Safari</dd>
          <dt>Host</dt>
          <dd>Vercel</dd>
          <br/>
        <h2>「 デザイン環境 」</h2>
          <dt>Tablet</dt>
          <dd>Cintiq Pro</dd>
          <dt>Software</dt>
          <dd>Photosohp. SAI2. CLIPSTUDIO</dd>
          <dt>Display</dt>
          <dd>ColorEdge CS2410</dd>
          </dl>
      </main>
      </Layout>
    </motion.div>
  );
}

export default Env;