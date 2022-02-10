import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Develop: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>Development Environment - sou</title>
        <meta name="description" content="開発環境" />
      </Head>
      <main className="margin50p resizeimage inblo">
        <h1>Development Environment</h1>
        <div className="triangle-bottom" />
        <dl>
          <img src="/picture/IMG-0554.jpg" />
          <dt>OS</dt>
          <dd>Windows</dd>
          <dt>Version</dt>
          <dd>Git</dd>
          <dt>IDE</dt>
          <dd>Visual Studio Code</dd>
          <dt>language</dt>
          <dd>TypeScript/Sass(Scss)</dd>
          <dt>Browser</dt>
          <dd>Edge/Chrome/Safari</dd>
          <dt>Host</dt>
          <dd>Vercel/Cloudflare</dd>
        </dl>
      </main>
    </Framerdiv>
  );
};

export default Develop;
