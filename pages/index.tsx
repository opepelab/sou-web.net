import client from "libs/contentful";
import { GetStaticProps } from "next";
import OG from "components/Sys/OG";
import Framerdiv from "components/Sys/Framer";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "libs/types";
import Date from "components/Sys/date";

import Link from "next/link";
import generateRssFeed from "../libs/feed";

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Index: React.FC<Map> = ({ blog }) => {
  return (
    <Framerdiv>
      <OG title="Index - sou" description="Index" />
      <main className="textLeft margin-Mobile-PC inblo">
        <h1>TOP</h1>
        <div className="triangle-bottom" />
        <p>
          <a className="pinkLinks" href="https://www.facebook.com/opepelab" target="_blank">
            ソフトウェアエンジニアのSou Watanabeです。
          </a>
        </p>
        <h5>最新記事</h5>
        {blog.map((blog: Entry<IPostFields>) => (
          <dl key={blog.sys.id}>
            <dt className="dateST">
              <Date dateString={blog.fields.date} />
            </dt>
            <Link href={`/docs/${blog.fields.slug}`}>
              <a>
                <div className="PPx scaleLinks pinkLinks">{blog.fields.title}</div>
              </a>
            </Link>
          </dl>
        ))}
        <Link href="/list/1">
          <a className="Link-Color">
            <h5>全部見る →</h5>
          </a>
        </Link>
      </main>
    </Framerdiv>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await generateRssFeed();
  const data: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: 10,
  });
  return {
    props: {
      blog: data.items,
    },
  };
};

export default Index;
