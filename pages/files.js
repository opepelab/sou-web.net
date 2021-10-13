import Link from "next/link";
import { client } from "../libs/client";
import Date from '../components/date';
import Head from 'next/head';


export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>Files - sou</title>
        <meta name="description" content="getStaticProps"/>
      </Head>
      <main>
        <h1>Files</h1>
        <div className="triangle-bottom" />
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <div className="yohaku inblo">
                  <h2 className="h2List margin0 pinkLinks">{blog.title}</h2>
                  <div className="margin0 Time1"><Date dateString={blog.publishedAt}/></div>
              </div>
            </Link>
          </li>
        ))}
      </main>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};