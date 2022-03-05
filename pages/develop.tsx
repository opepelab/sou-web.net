import OG from "components/OG";
import Framerdiv from "components/Sys/Framer";

const Develop: React.FC = () => {
  return (
    <Framerdiv>
      <OG title="Development Environment - sou" description="開発環境" />
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
          <dd>Azure Static Web Apps GitHub Pages/Vercel</dd>
        </dl>
      </main>
    </Framerdiv>
  );
};

export default Develop;
