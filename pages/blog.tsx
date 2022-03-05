import client from "libs/contentful";
import { GetStaticProps } from "next";
import OG from "components/Sys/OG";
import Framerdiv from "components/Sys/Framer";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "libs/types";
import Date from "components/Sys/date";
import Link from "next/link";

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Blog: React.FC<Map> = ({ blog }) => {
  return (
    <Framerdiv>
      <OG title="Blog - sou" description="ブログ" />
      <main className="textLeft margin50p inblo">
        <h5>記事一覧</h5>
        {blog.map((props: Entry<IPostFields>) => (
          <dl key={props.sys.id}>
            <dt className="dateST">
              <Date dateString={props.fields.date} />
            </dt>
            <Link href={`/docs/${props.fields.slug}`}>
              <a>
                <div className="PPx hoverbob pinkLinks">{props.fields.title}</div>
              </a>
            </Link>
          </dl>
        ))}
      </main>
    </Framerdiv>
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
