import ActiveLink from './ActiveLink'

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
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((id) => (
            <ActiveLink href={`/blog/page/${id}`} activeClassName="listState"><a className="Pagi"><li>{id}</li></a></ActiveLink>
            ))}
            </ul>
      </nav>
    </>
  );
};