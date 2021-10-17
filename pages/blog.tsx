import { GetStaticProps } from "next";
import { client } from "../libs/client";
import Date from '../date';
import Link from "next/link";
import Head from 'next/head';


export type Map = {
  blog: {
    map: StringConstructor;
  }
}

type Content = {
    publishedAt: string;
    title: string;
    id: string;
}

const Blog = ({blog}: Map) => {
  return (
    <div className="inblo">
      <Head>
        <title>blog - sou</title>
        <meta name="description" content="ブログ"/>
      </Head>
      <main>
        <h1>Blog</h1>
        <div className="triangle-bottom" />
        {blog.map((props: Content) => (
          <dl key={props.id}>
                <dt><Date dateString={props.publishedAt}/></dt>
                <dd><Link href={`/blog/${props.id}`}><a className="redLinks">{props.title}</a></Link></dd>
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

export default Blog;