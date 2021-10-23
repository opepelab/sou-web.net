import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'


const Env: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Layout>
        <Head>
          <title>environment - sou</title>
          <meta name="description" content="環境"/>
        </Head>
        <main className="CN">
            <h1>Env</h1>
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
            <dd>Cloudflare</dd>
          </dl>
        </main>
      </Layout>
    </motion.div>
  );
}

export default Env;