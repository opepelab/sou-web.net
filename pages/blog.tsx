import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Date from "../components/Sys/date";
import Head from "next/head";
import Link from "next/link";

type Map = {
  blog: {
    map: NumberConstructor;
  };
};

type Content = {
  publishedAt: string;
  id: string;
  title: string;
};

const Blog: React.FC<Map> = ({ blog }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>Blog - sou</title>
        <meta name="description" content="ログ" />
      </Head>
      <main className="textLeft margin50p inblo">
        <h5>記事一覧</h5>
        {blog.map((props: Content) => (
          <div className="hoverbob">
            <dl key={props.id}>
              <Link href={`/blog/${props.id}`}>
                <a>
                  <dt className="dateST">
                    <Date dateString={props.publishedAt} />
                  </dt>
                  <div className="PPx hoverbob pinkLinks">{props.title}</div>
                </a>
              </Link>
            </dl>
          </div>
        ))}
      </main>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://sou.microcms.io/api/v1/blog?limit=200", key);
  const data = await res.json();

  return {
    props: {
      blog: data.contents,
    },
  };
};
export default Blog;
