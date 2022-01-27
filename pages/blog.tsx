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
      </main>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: 100,
  });
  return {
    props: {
      blog: entries.items,
    },
  };
};

export default Blog;
