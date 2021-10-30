import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'
import Link from 'next/link'

const Picture: React.FC = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>picture - sou</title>
          <meta name="description" content="イラスト"/>
        </Head>
        <main className="margin50p">
          <h1>Picture</h1>
            <div className="triangle-bottom" />
            <div className="Zoom-in margin10"><img className="PM" src="/picture/otoko.png" width={255} height={403} /></div>
            <div className="Zoom-in margin10"><img className="PM" src="/picture/haruka.png" width={255} height={360} /></div>  
        </main>
      </motion.div>
    </Layout>
  );
}

export default Picture;