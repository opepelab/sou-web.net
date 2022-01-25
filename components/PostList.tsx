import Link from "next/link";

export default function PostList(props: any) {
  const { posts } = props;

  return (
    <ol>
      {posts.map((post: any) => (
        <li key={post.sys.id}>
          <article>
            <Link href={`blog/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
          </article>
        </li>
      ))}
    </ol>
  );
}
