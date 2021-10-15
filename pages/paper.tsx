import Link from "next/link";
import { client } from "../libs/client";
import Date from '../components/date';
import Head from 'next/head';

type Props = {
  blog: any;
}


const Home: React.FC<Props> = ({ blog }) => {
  return (
    <div className="inblo">
      <Head>
        <title>paper - sou</title>
        <meta name="description" content="ブログ"/>
      </Head>
      <main>
        <h1>Paper</h1>
        <div className="triangle-bottom" />
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <div className="yohaku">
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
export async function getStaticProps () {
  const data: any = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Home;