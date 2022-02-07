import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <Link href="/">
          <a className="scale">
            <div className="inblo C pinkLinks">
              <div>© SOU-WEB writte by Next.js MIT license</div>
            </div>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
