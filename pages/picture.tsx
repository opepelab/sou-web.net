import { motion } from "framer-motion";
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

const Picture: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Layout nav={false} home={false}>
      <Head>
        <title>picture - sou</title>
        <meta name="description" content="イラスト"/>
      </Head>
      <main className="margin25r">
        <h1>Picture</h1>
        <div className="triangle-bottom" />
          <div className="Zoom-in margin10"><img className="PM" src="/picture/otoko.png" width={255} height={403} /></div>
          <div className="Zoom-in margin10"><img className="PM" src="/picture/jett.png" width={255} height={266} /></div> 
          <div className="Zoom-in margin10"><img className="PM" src="/picture/haruka.png" width={255} height={360} /></div>  
          <Link href="design"><a className="scale Special">Design Env</a></Link>
      </main>
      </Layout>
    </motion.div>
  );
}

export default Picture;