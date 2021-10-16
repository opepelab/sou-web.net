import { client } from "../../libs/client";
import Date from '../../date';
import styles from './midasi.module.css';
import Head from 'next/head';
import { GetStaticPaths } from "next";


type Props = {
  blog: {
    body: string;
    description: string;
    publishedAt: string;
    title: string;
  }
}

type Content = {
  id: number;
  publishedAt: string;
  title: string;
  body: string;
  description: string;
}

const Id = ({ blog }: Props) => {
  return (
    <div className="inblo textLeft">
      <Head>
        <title>{blog.title} - sou</title>
        <meta name="description" content={blog.description} />
      </Head>
      <main>
        <h1 className={styles.h1}>{blog.title}</h1>
        <div className={styles.Time2}><Date dateString={blog.publishedAt} /></div>
        <div className="triangle-bottom" />
        <div className={styles.BodyBlog} dangerouslySetInnerHTML={{__html: blog.body}} />
      </main>
    </div>
  );
}



// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths<{ paths: string }> = async () => {
  const data = await client.get<{ contents: Content[] }>({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default Id;