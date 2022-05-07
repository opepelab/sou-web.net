import client from 'libs/contentful';
import { GetStaticProps } from 'next';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Entry, EntryCollection } from 'contentful';
import { IPostFields } from 'libs/types';
import Date from 'components/Sys/date';
import Link from 'next/link';

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Blog: React.FC<Map> = ({ blog }) => {
  return (
    <Framer>
      <OG title="Blog - Sou Watanabe" description="My Blog" />
      <main className="inblo textLeft">
        <h5>記事一覧</h5>
        {blog.map((props: Entry<IPostFields>) => (
          <dl key={props.sys.id}>
            <dt className="dateST">
              <Date dateString={props.fields.date} />
            </dt>
            <Link href={`/docs/url/${props.fields.slug}`}>
              <a>
                <div className="PPx hoverbob pinkLinks">{props.fields.title}</div>
              </a>
            </Link>
          </dl>
        ))}
      </main>
    </Framer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'blog',
    order: '-fields.date',
    limit: 100,
  });
  return {
    props: {
      blog: entries.items,
    },
  };
};

export default Blog;
