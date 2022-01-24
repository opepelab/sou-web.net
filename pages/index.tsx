import client from "../libs/contentful";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "../libs/types";
import Date from "../components/Sys/date";
import Head from "next/head";
import Link from "next/link";

type Map = {
  blog: {
    map: StringConstructor;
  };
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
        {blog.map((blog: Entry<IPostFields>) => (
          <div className="">
            <dl key={blog.sys.id}>
              <Link href={`/blog/${blog.fields.slug}`}>
                <a>
                  <dt className="dateST">
                    <Date dateString={blog.fields.date} />
                  </dt>
                  <div className="PPx hoverbomb pinkLinks">{blog.fields.title}</div>
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
  const data: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: 6,
  });
  return {
    props: {
      blog: data.items,
    },
  };
};

export default Index;
