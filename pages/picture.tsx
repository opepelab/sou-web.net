import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'

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

            <div>
            <a href="#01"><img className="PM margin10 point" src="/picture/otoko.png" width={255} height={403} /></a>
            <a id="01" href="#close" className="lb"><img className="PM" src="/picture/otoko.png" width={255} height={403} /></a>
            </div>

            <div>
            <a href="#02"><img className="PM margin10 point" src="/picture/haruka.png" width={255} height={360} /></a>
            <a id="02" href="#close" className="lb"><img className="PM" src="/picture/haruka.png" width={255} height={360} /></a>
            </div>


            <div className="Zoom-in margin10 point z-index"></div>  
        </main>
      </motion.div>
    </Layout>
  );
}

export default Picture;