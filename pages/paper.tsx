import Link from "next/link";
import { client } from "../libs/client";
import Date from '../date';
import Head from 'next/head';
import { GetStaticProps } from "next";

export type Props = {
  blog: {
    publishedAt: string;
    title: string;
    id: string;
  }
}

type Content = {
    publishedAt: string;
    title: string;
    id: string;
}

const Paper = ({blog}: any) => {
  return (
    <div className="inblo">
      <Head>
        <title>paper - sou</title>
        <meta name="description" content="ブログ"/>
      </Head>
      <main>
        <h1>Paper</h1>
        <div className="triangle-bottom" />
        {blog.map((all: Content) => (
          <dl key={all.id}>
                <dt><Date dateString={all.publishedAt}/></dt>
                <dd><Link href={`/blog/${all.id}`}><a>{all.title}</a></Link></dd>
          </dl>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<{ contents: Content[] }>({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Paper;