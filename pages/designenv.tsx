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

        </main>
      </motion.div>
    </Layout>
  );
}

export default Design;