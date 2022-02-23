import RSS from "rss";
import client from "./contentful";
import { EntryCollection } from "contentful";
import { IPostFields } from "./types";

export const generateFeedXml = async () => {
  const feed = new RSS({
    title: "sou-web.net",
    description: "Sou Watanabeのメモ兼用ウェブアプリケーションです。",
    site_url: "http://sou-web.net",
    feed_url: "http://sou-web.net/rss.xml",
    language: "ja",
  });

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

  return feed.xml();
};
