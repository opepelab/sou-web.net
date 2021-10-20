import { motion } from "framer-motion";
import Layout from '../components/layout'
import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Layout home={true}>
      <Head>
        <title>sou</title>
        <meta name="description" content="トップ"/>
      </Head>
      <main>
        <h1 className="Home">Sou Web</h1>
      </main>
      </Layout>
    </motion.div>
  );
}

export default Index;