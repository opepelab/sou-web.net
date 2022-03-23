import client from "libs/contentful";
import { GetStaticProps } from "next";
import OG from "components/Sys/OG";
import Framerdiv from "components/Sys/Framer";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "libs/types";
import Date from "components/Sys/date";
import Link from "next/link";
import generateRssFeed from "../libs/feed";
import ThemeToggleButton from "components/Theme-Toggle-Button";

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
        <div className="text-black dark:text-white">
          <h1 className="text-3xl m-0 font-extralight">Hello? My name is Sou.🖐</h1>
          <p className="text-lg font-extralight">
            I am Software contributor
            <br />
            from JAPAN Tokyo.
          </p>
        </div>
        <ThemeToggleButton />
        <h5>最新記事</h5>
        {blog.map((blog: Entry<IPostFields>) => (
          <dl key={blog.sys.id}>
            <dt className="dateST">
              <Date dateString={blog.fields.date} />
            </dt>
            <Link href={`/docs/${blog.fields.slug}`}>
              <a>
                <div className="PPx scaleLinks text-rose-500 dark:text-teal-400">{blog.fields.title}</div>
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
export { middleware } from "components/Sys/chakra";
