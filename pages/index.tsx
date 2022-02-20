import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Index: React.FC<Map> = ({ blog }) => {
  return (
    <Framerdiv>
      <Head>
        <title>Index - sou</title>
        <meta name="description" content="Index" />
      </Head>
      <main className="textLeft margin50p inblo">
        <h1>TOP</h1>
        <div className="triangle-bottom" />
        <p>
          NPOでフロントエンジニア担当している
          <a className="pinkLinks" href="https://www.facebook.com/opepelab" target="_blank">
            Sou Watanabe
          </a>
          のウェブサイトです。
        </p>
        <h5>最新記事</h5>
      </main>
    </Framerdiv>
  );
};

export default Index;
