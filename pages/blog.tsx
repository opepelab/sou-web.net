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

const Blog: React.FC<Map> = ({ blog }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>Blog - sou</title>
        <meta name="description" content="ログ" />
      </Head>
      <main className="textLeft margin50p inblo">
        <h5>記事一覧</h5>
        {blog.map((blog: Entry<IPostFields>) => (
          <dl key={blog.sys.id}>
            <dt>
              <Date dateString={blog.fields.date} />
            </dt>
            <Link href={`/blog/${blog.fields.slug}`}>
              <a className="scaleArticle pinkLinks">{blog.fields.title}</a>
            </Link>
          </dl>
        ))}
      </main>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: 100,
  });
  return {
    props: {
      blog: data.items,
    },
  };
};

export default Blog;
