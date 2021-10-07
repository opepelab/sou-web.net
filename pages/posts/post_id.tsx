// pages/posts/[slug].js
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';



const Post_id = () => {
    // 記事をレンダリングします...
  }
  
  // この関数はビルド時に呼び出されます。
  export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
    // 外部APIエンドポイントを呼び出して記事を取得します。
    const res = await fetch(`https://sou.microcms.io/api/v1/blog/posts/`);
    const posts = await res.json();
  
    // 記事に基づいてプリレンダリングしたいパスを取得します
    const paths = posts.map((_post: { id: undefined; }) => ({
      params: { post_id: '1' }
    }));
  
    // ビルド時にこれらのパスだけをプリレンダリングします。
    // { fallback: false } は他のルートが404になることを意味します。
    return { paths, fallback: false };
  }
  
  // ビルド時にも呼び出されます。
  export const getStaticProps: GetStaticProps<{ [key: string]: any; }, ParsedUrlQuery> = async ( {params} ) => {
    // paramsは記事の`id`を含みます。
    // ルートが/posts/1のような時、params.id は1です。
    const res = await fetch(`https://sou.microcms.io/api/v1/blog/posts/${params}`);
    const post = await res.json();
  
    // 記事データをprops経由でページに渡します。
    return { props: { post } };
  }
  
  export default Post_id;