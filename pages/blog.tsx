import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

function Blog({ post }) {
    // 記事をレンダリングします...
  }
  
  // この関数はビルド時に呼び出されます。
  export const getStaticPaths: GetStaticPaths = async () => {
    // 外部APIエンドポイントを呼び出して記事を取得します。
    const res = await fetch('https://.../posts');
    const posts = await res.json();
  
    // 記事に基づいてプリレンダリングしたいパスを取得します
    const paths = posts.map(post => ({
      params: { id: post.id }
    }));
  
    // ビルド時にこれらのパスだけをプリレンダリングします。
    // { fallback: false } は他のルートが404になることを意味します。
    return { paths, fallback: false };
  }
  
  // ビルド時にも呼び出されます。
  export async function getStaticProps({ params }) {
    // paramsは記事の`id`を含みます。
    // ルートが/posts/1のような時、params.id は1です。
    const res = await fetch(`https://.../posts/${params.id}`);
    const post = await res.json();
  
    // 記事データをprops経由でページに渡します。
    return { props: { post } };
  }
  
  export default Blog;