import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <Freya>
      <OG title="404 - sou-web.net" description="存在しないページ" />
      <main className="margin-Mobile-PC">
        <h1>Does not don't sync</h1>
        <div className="triangle-bottom" />
        <dl>
          <Link href="/">
            <a className="redLinks scale">Return 404 to TOP</a>
          </Link>
        </dl>
      </main>
    </Freya>
  );
};

export default NotFound;
