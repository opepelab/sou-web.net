import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../libs/contentful";
import Link from "next/link";
import React from "react";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "../libs/types";
import Date from "../components/Sys/date";
import ActiveLink from "../components/Sys/ActiveLink";
import { motion } from "framer-motion";

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const MAX_ENTRY = 15;
const Denomi = 5;

const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
const BlogNum: React.FC<Map> = ({ blog }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>Blog - sou</title>
        <meta name="description" content="ログ" />
      </Head>
      <main className="textLeft margin50p inblo">
        <h5>記事一覧</h5>
        {blog.map((props: Entry<IPostFields>) => (
          <div className="">
            <dl key={props.sys.id}>
              <Link href={`/blog/${props.fields.slug}`}>
                <a>
                  <dt className="dateST">
                    <Date dateString={props.fields.date} />
                  </dt>
                  <div className="PPx hoverbomb pinkLinks">{props.fields.title}</div>
                </a>
              </Link>
            </dl>
          </div>
        ))}
        <nav>
          <ul className="nav3">
            {range(1, Math.ceil(MAX_ENTRY / Denomi)).map((id) => (
              <li key={id}>
                <br />
                <ActiveLink href={`/${id}`} activeClassName="listState">
                  <a className="Pagi">{id}</a>
                </ActiveLink>
                <br />
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
  const data: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
  });

  const paths = range(1, Math.ceil(data.items.length / Denomi)).map((id) => `/${id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: 15,
    skip: (id - 1) * 15,
  });

  return {
    props: {
      blog: entries.items,
    },
  };
};

export default BlogNum;
