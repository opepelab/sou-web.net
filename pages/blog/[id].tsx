import { client } from "../../libs/client";
import Date from '../../components/date';
import styles from './midasi.module.css';
import Head from 'next/head';


type Props = {
  blog: any;
}


const Id: React.FC<Props> = ({ blog }) => {
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
        <div className={styles.BodyBlog} dangerouslySetInnerHTML={{__html: `${blog.body}`,}} />
      </main>
    </div>
  );
}

// 静的生成のためのパスを指定します
export async function getStaticPaths ()  {
  const data: any = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
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