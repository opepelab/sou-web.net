import client from "../../../libs/contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { motion } from "framer-motion";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "../../../libs/types";
import Date from "../../../components/Sys/date";
import Head from "next/head";
import Link from "next/link";
import ActiveLink from "../../../components/Sys/ActiveLink";
type Map = {
  blog: {
    map: StringConstructor;
  };
  entries: {
    items: number;
  };
};

const MAX_ENTRY = 20;
const page = 3;
const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
const Blog: React.FC<Map> = ({ blog, entries }) => {
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
                  <div className="PPx hoverbob pinkLinks">{blog.fields.title}</div>
                </a>
              </Link>
            </dl>
          </div>
        ))}
        <nav>
          <ul className="nav3">
            {range(1, Math.ceil(entries.items / page)).map((id) => (
              <li key={id}>
                <ActiveLink href={`/blog/page/${id}`} activeClassName="listState">
                  <a className="Pagi">{id}</a>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    limit: MAX_ENTRY,
    skip: MAX_ENTRY * (page - 1),
  });

  const paths = range(1, Math.ceil(entries.items / page)).map((contents) => `/${contents}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const id = params.id;

  if (typeof id !== "number") {
    return {
      notFound: true,
    };
  }
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: MAX_ENTRY,
    skip: MAX_ENTRY * (id - 1),
    "fields.sys.id": params.id,
  });
  return {
    props: {
      blog: entries,
      items: entries.items[0],
    },
  };
};

export default Blog;
