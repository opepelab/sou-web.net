import { GetStaticProps } from "next";
import { client } from "../libs/client";
import Date from '../date';
import Link from "next/link";
import Head from 'next/head';


export type Props = {
  blog: {
    map: StringConstructor;
  }
}

type All = {
    publishedAt: string;
    title: string;
    id: string;
}

const Paper = ({blog}: Props) => {
  return (
    <div className="inblo">
      <Head>
        <title>paper - sou</title>
        <meta name="description" content="ブログ"/>
      </Head>
      <main>
        <h1>Paper</h1>
        <div className="triangle-bottom" />
        {blog.map((blog: All) => (
          <dl key={blog.id}>
                <dt><Date dateString={blog.publishedAt}/></dt>
                <dd className="redLinks"><Link href={`/blog/${blog.id}`}><a>{blog.title}</a></Link></dd>
          </dl>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<{ contents: All[] }>({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Paper;