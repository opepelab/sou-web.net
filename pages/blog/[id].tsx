import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { client } from "../../libs/client";
import Date from '../../date';
import styles from './midasi.module.css';
import Head from 'next/head';
import { motion } from "framer-motion";

type ContentId = {
  id: string;
}

type Content = {
  blog: {
    publishedAt: string;
    title: string;
    body: string;
    description: string;
  }
}

const Id = ({ blog }: Content | InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <motion.div className="inblo" id="pic"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<{ contents: ContentId[] }>({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { 
    paths, 
    fallback: false 
  }
}


export const getStaticProps = async (context: { params: ContentId }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default Id;