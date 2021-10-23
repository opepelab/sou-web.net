import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"

const Picture: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Layout>
        <Head>
          <title>picture - sou</title>
          <meta name="description" content="イラスト"/>
        </Head>
        <main className="margin25r">
          <h1>Picture</h1>
            <div className="triangle-bottom" />
            <div className="Zoom-in margin10 PM"><Image src="/picture/otoko.png" unoptimized={true} loading={"eager"} width={255} height={403} /></div>
            <div className="Zoom-in margin10 PM"><Image src="/picture/jett.png" unoptimized={true} loading={"eager"} width={255} height={266} /></div> 
            <div className="Zoom-in margin10 PM"><Image src="/picture/haruka.png"unoptimized={true} loading={"eager"} width={255} height={360} /></div>  
            <Link href="design"><a className="scale Special">Design Environment</a></Link>
        </main>
      </Layout>
    </motion.div>
  );
}

export default Picture;