import { motion } from "framer-motion";
import HomeLayout from '../components/Layout/HomeLayout'
import Head from 'next/head'

const Index = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <HomeLayout home={true}>
        <Head>
          <title>sou</title>
          <meta name="description" content="トップ"/>
        </Head>
        <main>
        </main>
      </HomeLayout>
    </motion.div>
  );
}

export default Index;