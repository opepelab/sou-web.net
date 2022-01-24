import fs from "fs";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "../libs/types";

const generateRssItem = (blog: Entry<IPostFields>) => {
  return `
        <item>
            <guid>https://sou-web.net/blog/${blog.fields.slug}</guid>
            <title>${blog.fields.title}</title>
            <link>https://sou-web.net/blog/${blog.fields.slug}</link>
            <pubDate>${new Date(blog.fields.date).toUTCString()}</pubDate>
        </item>
    `;
};

const generateRss = (blog: Entry<IPostFields>[]) => {
  return `
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <title>sou-web</title>
                <link>https://sou-web.net/</link>
                <description>sou'webs blog</description>
                <atom:link href="https://sou-web.net/rss.xml" rel="self" type="application/rss+xml"/>
                ${blog.map(generateRssItem).join("")}
            </channel>
        </rss>
    `;
};
export const publishRss = async (blog: Entry<IPostFields>[]) => {
  const PATH = "./public/rss.xml";
  const rss = generateRss(blog);
  fs.writeFileSync(PATH, rss);
};
