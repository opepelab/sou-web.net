import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'


const Env: React.FC = () => {
  return (
    <Layout>  
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>environment - sou</title>
          <meta name="description" content="環境"/>
        </Head>
        <main className="CN">
            <h1>Dev/Env</h1>
            <div className="triangle-bottom" />
            <dl>
            <dt>OS</dt>
            <dd>Windows</dd>
            <dt>Version</dt>
            <dd>Git</dd>
            <dt>IDE</dt>   
            <dd>Visual Studio Code</dd>
            <dt>language</dt>
            <dd>TypeScript/Sass(Scss)</dd>
            <dt>Browser</dt>
            <dd>Edge/Chrome/Safari</dd>
            <dt>Host</dt>
            <dd>Vercel/Cloudflare</dd>
          </dl>
        </main>
      </motion.div>
    </Layout>
  );
}

export default Env;