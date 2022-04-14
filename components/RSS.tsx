import Link from "next/link";
import { HiRss } from "react-icons/hi";

const RSS = () => {
  return (
    <Link href="/rss/atom.xml">
      <a className="feedPosition">
        <HiRss className="ColorGray" size={24} />
      </a>
    </Link>
  );
};

export default RSS;
