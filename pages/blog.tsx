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
        <title>log - sou</title>
        <meta name="description" content="ログ" />
      </Head>
      <main className="textLeft margin50p inblo">
        {blog.map((props: Content) => (
          <dl key={props.id}>
            <dt>
              <Date dateString={props.publishedAt} />
            </dt>
            <dd>
              <Link href={`/blog/${props.id}`}>
                <a className="scaleArticle pinkLinks">{props.title}</a>
              </Link>
            </dd>
          </dl>
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
