import { GetStaticPaths } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Date from "../components/Sys/date";
import Head from "next/head";
import ActiveLink from "../components/Sys/ActiveLink";

type Content = {
  blog: {
    map: NumberConstructor;
  };
  publishedAt: string;
  title: string;
  id: string;
  totalCount: number;
};

const PER_PAGE = 15;
const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

const Page: React.FC<Content> = ({ blog, totalCount }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>Blog - sou</title>
        <meta name="description" content="ログ" />
      </Head>
      <main className="textLeft margin50p inblo">
        {blog.map((blog: Content) => (
          <dl>
            <dt>
              <Date dateString={blog.publishedAt} />
            </dt>
            <dd key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a className="scaleArticle pinkLinks">{blog.title}</a>
              </Link>
            </dd>
          </dl>
        ))}
        <nav>
          <ul className="nav3">
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((id) => (
              <li key={id}>
                <ActiveLink href={`/${id}`} activeClassName="listState">
                  <a className="Pagi">{id}</a>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/">
          <a className="scale">すべて見る</a>
        </Link>
      </main>
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };
  const res = await fetch("https://sou.microcms.io/api/v1/blog", key);
  const data = await res.json();

  const paths: string[] = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((content) => `/${content}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;

  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(`https://sou.microcms.io/api/v1/blog?offset=${(id - 1) * 15}&limit=15`, key);
  const data = await res.json();

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default Page;
