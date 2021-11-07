import Link from 'next/link';

type Props = {
    totalCount: number;
}

export const Pagination = ({ totalCount }: Props) => {
  const PER_PAGE = 14;

  const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <>
        <nav>
        <ul className="nav3">
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((content) => (
            <Link href={`/blog/page/${content}`}><a className="Pagi"><li>{content}</li></a></Link>
            ))}
            </ul>
      </nav>
    </>
  );
};