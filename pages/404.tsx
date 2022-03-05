import OG from "components/Sys/OG";
import Framerdiv from "components/Sys/Framer";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <Framerdiv>
      <OG title="404 - sou-web.net" description="存在しないページ" />
      <main className="CN">
        <h1>Does not don't sync</h1>
        <div className="triangle-bottom" />
        <dl>
          <Link href="/">
            <a className="redLinks scale">Return 404 to TOP</a>
          </Link>
        </dl>
      </main>
    </Framerdiv>
  );
};

export default NotFound;
