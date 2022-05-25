import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import Link from 'next/link';
// && next-sitemap --config sitemap.config.js
const NotFound: React.FC = () => {
  return (
    <Framer>
      <OG title="404 - Sou Watanabe" description="Erorr URL" />
      <main className="inblo">
        <h1>Does not don't sync</h1>
        <dl>
          <Link href="/">
            <a className="redLinks scale">Return 404 to TOP</a>
          </Link>
        </dl>
      </main>
    </Framer>
  );
};

export default NotFound;
