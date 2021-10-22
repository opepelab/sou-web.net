import { motion } from "framer-motion";
import Layout from '../components/layout'
import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Layout nav={true} home={true}>
      <Head>
        <title>sou</title>
        <meta name="description" content="トップ"/>
      </Head>
      <main>
      </main>
      </Layout>
    </motion.div>
  );
}

export default Index;