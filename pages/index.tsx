import { motion } from "framer-motion";
import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <motion.div className="inblo"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <Head>
        <title>sou</title>
        <meta name="description" content="トップ"/>
      </Head>
      <main>
        <h1 className="Home">Sou Watanabe</h1>
      </main>
    </motion.div>
  );
}

export default Index;