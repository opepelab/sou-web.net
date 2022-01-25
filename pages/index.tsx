import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Date from "../components/Sys/date";
import Head from "next/head";
import Link from "next/link";
// import Page from "../components/Page";

type Map = {
  blog: {
    map: StringConstructor;
  };
};
type Content = {
  publishedAt: string;
  id: string;
  title: string;
};

const Index: React.FC<Map> = ({ blog }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>Index - sou</title>
        <meta name="description" content="トップレベルインデックス" />
      </Head>
      <main className="textLeft margin50p inblo">
        <h1>Index</h1>
        <div className="triangle-bottom" />
        <p>
          NPOでエンジニアをしているSOUWEB({" "}
          <a className="blue" href="https://www.facebook.com/opepelab" target="_blank">
            Sou Watanabe
          </a>{" "}
          )のウェブサイトです。
        </p>
        <p>技術の切り出しやエラーメモで自分が見る専です。</p>
        <h2>最新記事</h2>
        {blog.map((props: Content) => (
          <div className="">
            <dl key={props.id}>
              <Link href={`/blog/${props.id}`}>
                <a>
                  <dt className="dateST">
                    <Date dateString={props.publishedAt} />
                  </dt>
                  <div className="PPx hoverbomb pinkLinks">{props.title}</div>
                </a>
              </Link>
            </dl>
          </div>
        ))}
        <Link href="/blog">
          <a>
            <h5>全部見る →</h5>
          </a>
        </Link>
      </main>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://sou.microcms.io/api/v1/blog?limit=6", key);
  const data = await res.json();

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Index;
