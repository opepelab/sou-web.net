import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";

const Feature: React.FC = () => {
  return (
    <Freya>
      <OG title="Feature - Sou Watanabe" description="My Compurter" />
      <main className="inblo resizeimage">
        <h1>Feature</h1>
        <dl>
          <img src="/picture/IMG-0554.jpg" width="600" height="800" />
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

export default Feature;
