import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { client } from "../../libs/client";
import Date from '../../date';
import styles from './midasi.module.css';
import Head from 'next/head';


type Props = {
  blog: {
    publishedAt: string;
    title: string;
    body: string;
    description: string;
  }
}

type All = {
  id: string;
  blog: Props;
}


const Id = ({ blog }: Props | InferGetStaticPropsType<typeof getStaticProps>) => {
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

export const getStaticPaths: GetStaticPaths<{paths: string}> = async () => {
  const data = await client.get<{ contents: All[] }>({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { 
    paths, 
    fallback: false 
  }
}


export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get<All>({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default Id;