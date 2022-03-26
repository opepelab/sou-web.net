import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";

const Develop: React.FC = () => {
  return (
    <Freya>
      <OG title="Development Environment - sou" description="開発環境" />
      <main className="margin-Mobile-PC resizeimage inblo">
        <h1>Feature</h1>
        <dl>
          <img src="/picture/IMG-0554.jpg" />
          <dt>OS</dt>
          <dd>Windows / Mac</dd>
          <dt>Version</dt>
          <dd>Git</dd>
          <dt>IDE</dt>
          <dd>Visual Studio Code</dd>
          <dt>Language</dt>
          <dd>TypeScript / Scss / Dart</dd>
          <dt>Framework</dt>
          <dd>Next.js / Flutter</dd>
          <dt>Browser</dt>
          <dd>Edge / Chrome / Safari</dd>
          <dt>Host</dt>
          <dd>Azure / Vercel / Cloudflare</dd>
        </dl>
      </main>
    </Freya>
  );
};

export default Develop;
