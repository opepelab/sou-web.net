import Link from 'next/link';
import useHeaderScroll from 'hooks/useHeaderScroll';
const Footer: React.FC = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { isHeaderActive } = useHeaderScroll(0);
  return (
    <div className="Alink">
      <footer className={`Footerbgg ${isHeaderActive ? 'NoActive' : 'Active'}`} onClick={returnTop}>
        <div className='FooterText'>
        <div className="inblo C">
          <a href="https://github.com/opepelab/sou-web.net">github/sou-web.net</a> Written by{' '}
          <a href="https://nextjs.org/">
            <u>Next.js</u>
          </a>
        </div>
        <br />
        <Link href="/privacy">
          <a className="inblo C">
            <u>Privacy Policy</u>
          </a>
        </Link>{' '}
        <Link href="/">
          <a className="inblo C">© sou-web.net 2022</a>
        </Link>{' '}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
