import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="Alink">
      <footer>
        <div className="inblo C">
          <a href="https://github.com/opepelab/sou-web.net">github/sou-web.net</a> Written by{' '}
          <a href="https://nextjs.org/">
            <u>Next.js</u>
          </a>
        </div>
        <br />
        <Link href="/privacy">
          <a className=" C">
            <u>Privacy Policy</u>
          </a>
        </Link>{' '}
        <Link href="/technology">
          <a className="C">
            <u>Technology</u>
          </a>
        </Link>{' '}
        <Link href="/">
          <a className="C">© sou-web.net 2022</a>
        </Link>{' '}
      </footer>
    </div>
  );
};

export default Footer;
