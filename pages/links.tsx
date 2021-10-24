import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'

const Links: React.FC = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>links - sou</title>
          <meta name="description" content="リンク"/>
        </Head>
        <main className="CN">
          <h1>Links</h1>
            <div className="triangle-bottom" />
          <dl>
            <dd><a className="redLinks" href="https://github.com/opepelab" target="_blank">GitHub </a></dd>
            <dd><a className="redLinks" href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">LinkdIn</a></dd>
            <dd><a className="redLinks" href="https://www.pixiv.net/users/10729947" target="_blank">Pixiv</a></dd>
            <dd><a className="redLinks" href="https://www.amazon.jp/hz/wishlist/ls/21U6KMZ0YZN25?ref_=wl_share" target="_blank">Amazon</a></dd>
            <dd><a className="redLinks" href="https://com.nicovideo.jp/community/co1568349" target="_blank">Streem</a></dd>
            <dd><a className="redLinks" href="https://opepelab.org/" target="_blank">Article(WordPress)</a></dd>
          </dl>
        </main>
      </motion.div>
    </Layout>
  );
}

export default Links;