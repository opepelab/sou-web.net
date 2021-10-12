import { client } from "../../libs/client";
import Date from '../../components/date';
import styles from './midasi.module.css';


export default function BlogId({ blog }) {
  return (
    <div>
    <main>
      <h2 className={styles.h2}>{blog.title}</h2>
      <h5 className={styles.h5}><Date dateString={blog.publishedAt} /></h5>
      <div className="triangle-bottom" />
      <div dangerouslySetInnerHTML={{__html: `${blog.body}`,}} />
    </main>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};