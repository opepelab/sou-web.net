import { client } from "../libs/client";
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
    title: string;
    id: string;
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
          <h1>log</h1>
          <div className="triangle-bottom" />
          {blog.map((props: Content) => (
          <dl key={props.id}>
            <dt><Date dateString={props.publishedAt}/></dt>
            <dd><Link href={`/blog/${props.id}`}><a className="redLinks">{props.title}</a></Link></dd>
          </dl>
          ))}
        </main>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<{ contents: Content }>({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Blog;