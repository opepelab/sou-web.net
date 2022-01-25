import { GetStaticPaths, GetStaticProps } from "next";
import styles from "./midasi.module.scss";
import Date from "../../components/Sys/date";
import Head from "next/head";
import { motion } from "framer-motion";
import client from "../../libs/client";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/base16/edge-dark.css";

type ContentId = {
  id: string;
};

type Content = {
  slug: string;
  body: string;
  highlightedBody: string;
  blog: {
    publishedAt: string;
    title: string;
    description: string;
  };
};

const Id: React.FC<Content> = ({ blog, highlightedBody }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>{blog.title} - sou</title>
        <meta name="description" content={blog.description} />
      </Head>
      <main className="Hlink textLeft margin50p resizeimage">
        <div className={styles.Time2}>
          <Date dateString={blog.publishedAt} />
        </div>
        <div className="pinkLinks">
          <h1 className={styles.h1}>{blog.title}</h1>
        </div>
        <div className="triangle-bottom" />
        <div dangerouslySetInnerHTML={{ __html: highlightedBody }} />
      </main>
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };
  const res = await fetch("https://sou.microcms.io/api/v1/blog?limit=200/", key);
  const data = await res.json();

  const paths: string[] = data.contents.map((content: ContentId) => ({
    params: { id: content.id },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const id = context.params.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
    `https://sou.microcms.io/api/v1/blog/${id}${draftKey !== undefined ? `?draftKey=${draftKey}` : ""}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.apiKey || "" } }
  ).then((res) => res.json());

  const data = await client.get<Content>({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(data.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      content,
      blog: data,
      highlightedBody: $.html(),
    },
  };
};
export default Id;
