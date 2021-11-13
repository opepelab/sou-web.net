import { motion } from "framer-motion";
import HomeLayout from '../components/Layout/HomeLayout'
import Head from 'next/head'

const Index = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <HomeLayout home={true}>
        <Head>
          <title>sou</title>
          <meta name="description" content="インデックス"/>
        </Head>
        <main>
        </main>
      </HomeLayout>
    </motion.div>
  );
}

export default Index;