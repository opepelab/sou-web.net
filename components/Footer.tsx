import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="Alink">
      <footer className="Footer">
        <div className="inblo C">
          <a href="https://github.com/opepelab/sou-web.net">github/sou-web.net</a> Written by{" "}
          <a href="https://nextjs.org/">
            <u>Next.js</u>
          </a>
        </div>{" "}
        <Link href="/">
          <a className="inblo C">© sou-web.net</a>
        </Link>
        <br />
        <Link href="/rss/atom.xml">
          <a className="inblo C">
            <u>RSS Feed</u>
          </a>
        </Link>{" "}
        <Link href="/privacy">
          <a className="inblo C">
            <u>Privacy Policy</u>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
