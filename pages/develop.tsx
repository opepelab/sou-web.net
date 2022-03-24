import OG from "components/Sys/OG";
import Freya from "components/Sys/Framer";

const Develop: React.FC = () => {
  return (
    <Freya>
      <OG title="Development Environment - sou" description="開発環境" />
      <main className="margin-Mobile-PC resizeimage inblo">
        <h1>Development Environment</h1>
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
          <dd>Azure SWA/Vercel/Cloudflare</dd>
        </dl>
      </main>
    </Freya>
  );
};

export default Develop;
