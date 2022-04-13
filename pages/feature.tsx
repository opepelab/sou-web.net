import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";
import { Heading } from "@chakra-ui/react";

const Feature: React.FC = () => {
  return (
    <Freya>
      <OG
        title="Feature - Sou Watanabe"
        description="My Compurter"
      />
      <main className="inblo resizeimage">
        <Heading
          as="h1"
          m="0"
          fontWeight="200"
          fontSize="24"
        >
          Features of my room
        </Heading>
        <img
          src="/picture/IMG-0554.jpg"
          height="40%"
          width="40%"
        />
        <dl>
          <p>test</p>
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
