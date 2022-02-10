import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <div className="inblo C">
          <a className="blue" href="https://github.com/opepelab/sou-web.net">
            github/sou-web.net
          </a>{" "}
          Written by{" "}
          <a className="blue" href="https://nextjs.org/">
            <u>Next.js</u>
          </a>
        </div>
        <br />
        <Link href="/">
          <a className="inblo C blue">© sou-web.net</a>
        </Link>{" "}
        <Link href="/feed">
          <a className="inblo C blue">
            <u>RSS Feed</u>
          </a>
        </Link>{" "}
        <Link href="/privacy">
          <a className="inblo C blue">
            <u>PRIVACY POLICY</u>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
