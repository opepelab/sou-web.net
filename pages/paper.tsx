import Link from "next/link";
import { client } from "../libs/client";
import Date from '../date';
import Head from 'next/head';

type Content = {
    publishedAt: string;
    title: string;
    id: number;
}

const Paper = ({ blog }: any) => {
  return (
    <div className="inblo">
      <Head>
        <title>paper - sou</title>
        <meta name="description" content="ブログ"/>
      </Head>
      <main>
        <h1>Paper</h1>
        <div className="triangle-bottom" />
        {blog.map((blog: Content) => (
          <dl key={blog.id}>
                <dt><Date dateString={blog.publishedAt}/></dt>
                <dd><Link href={`/blog/${blog.id}`}><a>{blog.title}</a></Link></dd>
          </dl>
        ))}
      </main>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export async function getStaticProps () {
  const data = await client.get<{ contents: Content[] }>({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Paper;