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
        {blog.map((props: Content) => (
          <div className="">
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
        <Link href="/blog">
          <a>
            <h5>Display All</h5>
          </a>
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
