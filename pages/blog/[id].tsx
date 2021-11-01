import { GetStaticPaths, GetStaticProps } from 'next'
import styles from './midasi.module.scss';
import Date from '../../components/Sys/date'
import Head from 'next/head';
import { motion } from "framer-motion";
import Layout from '../../components/Layout/layout'
import client from "../../libs/client";

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

const Id: React.FC<Content> = ({ blog }) => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>{blog.title} - sou</title>
          <meta name="description" content={blog.description} />
        </Head>
        <main className="textLeft">
          <h1 className={styles.h1}>{blog.title}</h1>
          <div className={styles.Time2}><Date dateString={blog.publishedAt} /></div>
          <div className="triangle-bottom" />
          <div className={styles.BodyBlog} dangerouslySetInnerHTML={{__html: blog.body}} />
        </main>
      </motion.div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.API_KEY},
  }
  const data = await fetch('https://sou.microcms.io/api/v1/blog?limit=200/', key)
  .then(res => res.json())
  .catch(() => null)


  const paths = data.contents.map((content: ContentId) => ({
    params: { id: content.id },
  }));
  return { 
    paths, 
    fallback: false 
  }
}


export const getStaticProps: GetStaticProps = async (context) => {
 
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  const id = context.params.id;


  if (typeof id !== "string") {
    return {
      notFound: true,
    }
  }
  const data = await client.get<Content>({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
export default Id;
