import fs from "fs";
import { Feed } from "feed";
import client from "../libs/contentful";
import { EntryCollection } from "contentful";
import { IPostFields } from "../libs/types";

async function generateRssFeed() {
  const baseUrl = "https://sou-web.net";
  const date = new Date();
  const author = {
    name: "Sou Watanabe",
    email: "ocelot2828@gmail.com",
    link: baseUrl,
  };

  const feed = new Feed({
    title: "sou-web.net",
    id: baseUrl,
    link: baseUrl,
    description: "Sou Watanabeのメモ兼用ウェブアプリケーション。",
    language: "ja",
    image: `${baseUrl}/images/logo.svg`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Sou Watanabe`,
    updated: date,
    generator: "Next.js using Feed for Node.js",
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author,
  });

  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
    limit: 1000,
  });

  entries.items.forEach((blog) => {
    const url = `${baseUrl}/${`/docs/${blog.fields.slug}`}`;
    feed.addItem({
      title: blog.fields.title,
      id: url,
      link: url,
      description: blog.fields.description,
      date: new Date(blog.fields.date),
      author: [author],
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}

export default generateRssFeed;
