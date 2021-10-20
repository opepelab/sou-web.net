import { motion } from "framer-motion";
import Layout from '../components/layout'
import Head from 'next/head'

const Design: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <Layout home={false}>
        <Head>
            <title>design - sou</title>
            <meta name="description" content="リンク"/>
        </Head>
        <main className="CN">
            <h1>Design</h1>
            <dl>
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

export default Design;