import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>404 - sou-web.net</title>
        <meta name="description" content="存在しないページ" />
      </Head>
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
