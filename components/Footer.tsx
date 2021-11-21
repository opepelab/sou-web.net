import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <Link href="/">
          <a className="scale">
            <div className="inblo C pinkLinks">
              © <span className="hikki">Sou Web</span>
            </div>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
