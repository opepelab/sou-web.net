import { GetServerSideProps } from "next";
import { generateFeedXml } from "../libs/feed";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = await generateFeedXml();

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間キャッシュする
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

const Feed = () => null;
export default Feed;
