import client from "../../libs/contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import styles from "./midasi.module.scss";
import { EntryCollection } from "contentful";
import { IPostFields } from "../../libs/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Date from "../../components/Sys/date";
import Head from "next/head";
import * as TYPES from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Content = {
  blog: {
    fields: {
      slug: string;
      date: string;
      title: string;
      description: string;
      body: Document;
    };
  };
};

const Slug: React.FC<Content> = ({ blog }) => {
  const options: Options = {
    renderNode: {
      [TYPES.BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          TYPES.helpers.isText(node.content[0]) &&
          node.content[0].marks.find((x) => x.type == "code")
        ) {
          return <div>{children}</div>;
        }
        return <p>{children}</p>;
      },
      [TYPES.BLOCKS.EMBEDDED_ASSET]: (node) => {
        const src = "https://" + node.data.target.fields.file.url;
        const height = node.data.target.fields.file.details.height;
        const width = node.data.target.fields.file.details.width;
        return <img src={src} width={width} height={height} />;
      },
    },
    renderMark: {
      [TYPES.MARKS.CODE]: (text) => {
        return (
          <SyntaxHighlighter
            lineProps={{
              style: { whiteSpace: "pre-wrap" },
            }}
            wrapLines={true}
            language="jsx"
            style={vscDarkPlus}
            showLineNumbers
          >
            {text}
          </SyntaxHighlighter>
        );
      },
    },
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>{blog.fields.title} - sou</title>
        <meta name="description" content={blog.fields.description} />
      </Head>
      <main className="Hlink textLeft margin50p resizeimage">
        <div className={styles.Time2}>
          <Date dateString={blog.fields.date} />
        </div>
        <div className="pinkLinks">
          <h1 className={styles.h1}>{blog.fields.title}</h1>
        </div>
        <div className="triangle-bottom" />
        <div>{documentToReactComponents(blog.fields.body, options)}</div>
      </main>
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    limit: 1000,
  });
  const paths = items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const slug = params.slug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { items } = await client.getEntries({
    content_type: "blog",
    limit: 1000,
    "fields.slug": params.slug,
  });

  return {
    props: {
      blog: items[0],
    },
  };
};

export default Slug;
