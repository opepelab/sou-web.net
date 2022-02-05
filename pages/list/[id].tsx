import Head from "next/head";
import { GetStaticPaths } from "next";
import client from "../../libs/contentful";
import Link from "next/link";
import React, { useState } from "react";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "../../libs/types";
import Date from "../../components/Sys/date";
import ActiveLink from "../../components/Sys/ActiveLink";
import Framerdiv from "../../components/Sys/Framer";
import useSWR from "swr";

type Map = {
  total: number;
  blog: {
    map: NumberConstructor;
  };
};

const Limit = 19;

const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
const Id: React.FC<Map> = ({ blog, total }) => {
  return (
    <Framerdiv>
      <Head>
        <title>Blog - sou</title>
        <meta name="description" content="Page List" />
      </Head>
      <main className="HeadMenu textLeft margin50p inblo">
        <h5>記事一覧</h5>
        {blog.map((props: Entry<IPostFields>) => (
          <div className="">
            <dl key={props.sys.id}>
              <Link href={`/docs/${props.fields.slug}`}>
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
            {range(1, Math.ceil(total / Limit)).map((id) => (
              <li key={id}>
                <ActiveLink href={`/list/${id}`} activeClassName="listState">
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
    </Framerdiv>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
  });

  const paths = range(1, Math.ceil(entries.total / Limit)).map((id) => `/list/${id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: Limit,
    skip: (id - 1) * Limit,
  });

  return {
    props: {
      blog: entries.items,
      total: entries.total,
    },
  };
};

export default Id;