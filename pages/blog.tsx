// posts はビルド時に getStaticProps() によって生成されます。
import { GetStaticProps } from 'next';



const Blog = ( posts: number[] ) => {
  return (
    <ul>
      {posts.map(post => (<li>{post}</li>))}
    </ul>
  );
}

// この関数はサーバー側でのビルド時に呼び出されます。
// クライアント側では呼び出されないため、データベースクエリを直接実行することも可能です。
// 「技術詳細」のセクションをご覧ください。
export const getStaticProps: GetStaticProps = async () => {
  // 外部のAPIエンドポイントを呼び出してpostsを取得します。
  // 任意のデータ取得ライブラリを使用できます。
  const res = await fetch(`https://sou.microcms.io/api/v1/blog/posts/`);
  const posts = await res.json();

  // { props: posts } を返すことで、Blog コンポーネントは
  // ビルド時に`posts`を prop として受け取ります。
  return {
    props: {
      posts
    }
  };
}

export default Blog;