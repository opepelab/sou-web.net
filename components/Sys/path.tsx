import Link from 'next/link';

type str = {
  url: string;
};

const dret: React.FC<str> = ({ url, children }) => {
  return <Link href={url}>{children}</Link>;
};

export default dret;
