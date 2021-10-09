import Link from "next/link";
import { client } from "../libs/client";
import Date from '../components/date';
import Head from 'next/head';


export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>Articles Watanabe S.</title>
        <meta name="description" content="getStaticProps"/>
      </Head>
      <h2>Articles</h2>
      <div className="triangle-bottom" />
      <div>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <div className="yohaku">
                <p>
                  <h5>{blog.title}</h5>
                  <h6><Date dateString={blog.publishedAt}/></h6>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </div>
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