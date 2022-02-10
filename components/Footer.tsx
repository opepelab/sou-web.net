import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <Link href="/">
          <a className="scale">
            <div className="inblo C pinkLinks">
              <div>Written by Next.js at MIT</div>
            </div>
          </a>
        </Link>
        <br />
        <Link href="/privacy">
          <a className="inblo C pinkLinks">Privacy Policy</a>
        </Link>
        <br />
        <Link href="/feed">
          <a className="inblo C pinkLinks">RSS</a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
