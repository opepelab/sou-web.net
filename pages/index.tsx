import client from "../libs/contentful";
import { GetStaticProps } from "next";
import Framerdiv from "../components/Sys/Framer";
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
    <Framerdiv>
      <Head>
        <title>Index - sou</title>
        <meta name="description" content="Index" />
      </Head>
      <main className="textLeft margin50p inblo">
        <h1>TOP</h1>
        <div className="triangle-bottom" />
        <p>
          NPOでFrontEndとして活動をしているSOU-WEB({" "}
          <a className="blue" href="https://www.facebook.com/opepelab" target="_blank">
            Sou Watanabe
          </a>{" "}
          )のウェブサイトです。
        </p>
        <p>技術の切り出しやエラーのメモで自分が見るために作りました。</p>
        <h1>最新記事</h1>
        {blog.map((blog: Entry<IPostFields>) => (
          <div className="">
            <dl key={blog.sys.id}>
              <Link href={`/docs/${blog.fields.slug}`}>
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
        <Link href="/list/1">
          <a>
            <h5>全部見る →</h5>
          </a>
        </Link>
      </main>
    </Framerdiv>
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
