import RSS from "rss";

export async function generateFeedXml() {
  const feed = new RSS({
    title: "sou-web",
    description: "説明",
    site_url: "https://sou-web.net",
    feed_url: "https://sou-web.net/rss.xml",
    language: "ja",
  });
  return feed.xml();
}
