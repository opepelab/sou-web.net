import client from "libs/contentful";
import { GetStaticPaths } from "next";
import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";
import Link from "next/link";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "libs/types";
import Date from "components/Sys/date";
import ActiveLink from "components/Sys/ActiveLink";

// interface IParams extends ParsedUrlQuery {
//   [key: string]: any;
// }

type Map = {
  total: number;
  blog: {
    map: NumberConstructor;
  };
};

const Limit = 30;

const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
const Id: React.FC<Map> = ({ blog, total }) => {
  return (
    <Freya>
      <OG title="Page List - Sou Watanabe" description="Page Lists" />
      <main className="HeadMenu inblo textLeft">
        <h5>記事一覧</h5>
        {blog.map((props: Entry<IPostFields>) => (
          <dl key={props.sys.id}>
            <dt className="dateST">
              <Date dateString={props.fields.date} />
            </dt>
            <Link href={`/docs/${props.fields.slug}`}>
              <a>
                <div className="PPx scaleLinks pinkLinks">{props.fields.title}</div>
              </a>
            </Link>
          </dl>
        ))}
        <nav>
          <ul className="ListNum">
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
            <h5>全部見る →</h5>
          </a>
        </Link>
      </main>
    </Freya>
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

// if (!context.params) {
//   return {
//     notFound: true,
//   };
// }
// const slug = context.params.slug;

// if (typeof slug !== "string") {
//   return {
//     notFound: true,
//   };
// }
