import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Heading } from '@chakra-ui/react';

const Feature: React.FC = () => {
  return (
    <Framer>
      <OG title="Feature - Sou Watanabe" description="My Compurter" />
      <main className="inblo resizeimage">
        <Heading as="h1" m="0" fontWeight="200" fontSize="24">
          My room
        </Heading>
        <img src="/picture/IMG_0618.jpeg" height="40%" width="40%" />
        <dl>
          <dt>OS</dt>
          <dd>Windows / Mac</dd>
          <dt>Version</dt>
          <dd>Git</dd>
          <dt>IDE</dt>
          <dd>Visual Studio Code</dd>
          <dt>Language</dt>
          <dd>TypeScript / Scss</dd>
          <dt>Framework</dt>
          <dd>Next.js / Chakra-UI</dd>
          <dt>Browser</dt>
          <dd>Edge / Chrome / Safari</dd>
          <dt>Host</dt>
          <dd>Google Cloud Platform</dd>
        </dl>
      </main>
    </Framer>
  );
};

export default Feature;
