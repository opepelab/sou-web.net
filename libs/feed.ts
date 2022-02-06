import RSS from "rss";
import client from "../libs/contentful";
import { EntryCollection } from "contentful";
import { IPostFields } from "../libs/types";

type Content = {
  fields: {
    slug: string;
    date: string;
    title: string;
    description: string;
    body: Document;
  };
};

type Map = {
  map: StringConstructor;
};

export const generateFeedXml = async () => {
  const feed = new RSS({
    title: "sou-web",
    description: "説明",
    site_url: "http://sou-web.net",
    feed_url: "http://sou-web.net/rss.xml",
    language: "ja",
  });

  // 例としてpostsを含めるイメージ
  // このあたりの書き方はライブラリのドキュメントを参考にしてください
  const entries: EntryCollection<IPostFields> = await client.getEntries();
  entries.items.forEach((blog) => {
    feed.item({
      title: blog.fields.title,
      description: blog.fields.description,
      date: new Date(blog.fields.date),
      url: `https://sou-web.net/`,
    });
  });

  // XML形式の文字列にする
  return feed.xml();
};

// import { getNotionData } from "./getNotionData";

// // export const generateFeedXml = async () => {
//   const feed = new RSS({
//     title: "35D BLOG",
//     description:
//       "@___35d のブログです。Notion / Notion Blog / Fast Notion についての情報を中心に発信しています。また、読んだ本や、観た動画、勉強したことについても書いていきます。",
//     site_url: "https://blog.35d.jp",
//     feed_url: "https://blog.35d.jp/feed",
//     language: "ja",
//     image_url: "https://blog.35d.jp/og-image.png",
//   });

//   const database = await getNotionData(process.env.NOTION_DATABASE_ID);

//   database.forEach((post) => {
//     const description = encodeURIComponent(post.properties.Description.rich_text[0]?.plain_text || "");

//     feed.item({
//       custom_elements: [
//         {
//           content: `<![CDATA[ <p>記事は 35D BLOG へアクセスしてご覧ください。</p><p><a href="https://blog.35d.jp/${post.properties.Slug.rich_text[0]?.plain_text}">記事を読む</a></p> ]]>`,
//         },
//       ],
//       title: post.properties.Page.title[0].plain_text,
//       description,
//       date: new Date(post.properties.Date.date.start),
//       url: `https://blog.35d.jp/${post.properties.Slug.rich_text[0]?.plain_text}`,
//     });
//   });

//   // XML形式の文字列にする
//   return feed.xml();
// };
