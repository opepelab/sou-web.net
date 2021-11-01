import client from "../libs/client";
import { GetStaticProps } from "next"
import { motion } from "framer-motion"
import Layout from '../components/Layout/layout'
import Date from '../components/Sys/date'
import Head from 'next/head'
import Link from "next/link"

type Map = {
  blog: {
    map: StringConstructor;
  }
}

type Content = {
    publishedAt: string;
    id: string;
    title: string;
}

const Blog: React.FC<Map> = ({blog}) => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>log - sou</title>
          <meta name="description" content="ログ"/>
        </Head>
        <main className="textLeft margin50p">
          {blog.map((blog: Content) => (
          <dl key={blog.id}>
            <dt><Date dateString={blog.publishedAt}/></dt>
            <dd><Link href={`/blog/${blog.id}`}><a className="scale pinkLinks">{blog.title}</a></Link></dd>
          </dl>
          ))}
        </main>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<{ contents: Content }>({ endpoint: "blog", queries: {limit: 1000, fields: 'publishedAt,id,title'}
});

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Blog;