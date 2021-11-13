import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'
import Link from 'next/link'

const Profile: React.FC  = () => {
    return (
      <Layout>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <Head>
            <title>about - sou</title>
            <meta name="description" content="私について"/>
          </Head>
          <main className="CN">



          TypeScriptと<br/>
ReactとNext.js<br/>
(Vercelに心酔しています)<br/>


        </main>
      </motion.div>
    </Layout>
  );
}

export default Profile;