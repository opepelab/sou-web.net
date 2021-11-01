import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'

const Design: React.FC = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>      
        <Head>
            <title>design - sou</title>
            <meta name="description" content="リンク"/>
        </Head>
        <main className="margin50p">
          <h1>Design</h1>
          <div className="triangle-bottom" />
          <dl>
          <div className="Zoom-in margin10 point z-index"><img className="PM" src="/picture/315.jpg" width={255} height={191} /></div>
            <dt>Tablet</dt>
            <dd>Cintiq Pro</dd>
            <dt>Software</dt>
            <dd>Photosohp. SAI2. CLIPSTUDIO</dd>
            <dt>Display</dt>
            <dd>ColorEdge CS2410</dd>
            <dt>CPU</dt>
            <dd>i7</dd>
            <dt>RAM</dt>
            <dd>16GB</dd>
          </dl>
        </main>
      </motion.div>
    </Layout>
  );
}

export default Design;