import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Links: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Head>
        <title>links - sou</title>
        <meta name="description" content="リンク" />
      </Head>
      <main className="CN">
        <h1>Links</h1>
        <div className="triangle-bottom" />
        <dl>
          <dd>
            <a className="pinkLinks scale" href="https://github.com/opepelab" target="_blank">
              GitHub{" "}
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
              LinkdIn
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://www.pixiv.net/users/10729947" target="_blank">
              Pixiv
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://www.amazon.jp/hz/wishlist/ls/21U6KMZ0YZN25?ref_=wl_share" target="_blank">
              Amazon
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://com.nicovideo.jp/community/co1568349" target="_blank">
              Streem
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://opepelab.org/" target="_blank">
              WordPress Blog
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://ikizura-wh.jimdofree.com/" target="_blank">
              生きづらわーほりプロジェクト
            </a>
          </dd>
          <Link href="/special">
            <a className="scale pinkLinks">Special Thanks</a>
          </Link>
        </dl>
      </main>
    </motion.div>
  );
};

export default Links;
