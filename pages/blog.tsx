import { GetStaticProps } from "next"
import { motion } from "framer-motion"
import Date from '../components/Sys/date'
import Layout from '../components/Layout/layout'
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
          {blog.map((props: Content) => (
          <dl key={props.id}>
            <dt><Date dateString={props.publishedAt} /></dt>
            <dd><Link href={`/blog/${props.id}`}><a className="scale pinkLinks">{props.title}</a></Link></dd>
          </dl>
          ))}
        </main>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://sou.microcms.io/api/v1/blog?limit=40', key)
    .then(res => res.json())
    .catch(() => null)
    
    return {
      props: {
        blog: data.contents,
      },
    };
  };
export default Blog;