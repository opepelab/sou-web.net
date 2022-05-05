import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type RNode = {
  children: ReactNode;
  url: string;
  state: boolean | null;
  on: string;
  off: string;
};

const Reactive: React.FC<RNode> = ({ children, url, state, on, off }) => {
  const router = useRouter();
  return (
    <Link href={url}>
      <a className={router.asPath === url || state ? on : off}>{children}</a>
    </Link>
  );
};

export default Reactive;
