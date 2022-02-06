import RSS from "rss";
import client from "../libs/contentful";
import { EntryCollection } from "contentful";
import { IPostFields } from "../libs/types";

export const generateFeedXml = async () => {
  const feed = new RSS({
    title: "sou-web",
    description: "説明",
    site_url: "http://sou-web.net",
    feed_url: "http://sou-web.net/feed",
    language: "ja",
  });

  // 例としてpostsを含めるイメージ
  // このあたりの書き方はライブラリのドキュメントを参考にしてください
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: 1000,
  });
  entries.items.forEach((blog) => {
    feed.item({
      title: blog.fields.title,
      description: blog.fields.description,
      date: new Date(blog.fields.date),
      url: `https://sou-web.net/${`/docs/${blog.fields.slug}`}`,
    });
  });

  // XML形式の文字列にする
  return feed.xml();
};
