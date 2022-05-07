import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import ActiveLink from 'components/Sys/ActiveLink';

type RNode = {
  children: ReactNode;
  url: string;
  state: boolean | null;
  on: string;
  off: string;
  mount: string;
};

const Reactive: React.FC<RNode> = ({ children, url, state, on, off, mount }) => {
  const router = useRouter();
  return (
    <ActiveLink href={url} activeClassName={mount}>
      <a className={router.asPath === url || state ? on : off}>{children}</a>
    </ActiveLink>
  );
};

export default Reactive;
