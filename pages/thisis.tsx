import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";

const Thisblog: React.FC = () => {
  return (
    <Freya>
      <OG title="Thisis - Sou Watanabe" description="This Site is" />
      <main className="inblo textLeft">
        <h1>What is this blog Read me?</h1>
        <p>Architect: Node.js React library Nexet.js TypeScript</p>
        <p>State management: Recoil</p>
        <p>CMS: Contentful</p>
        <p>Host: Vercel etc.</p>
        <li>記事一覧</li>
        <p>まず、マークダウンにも挑戦しましたがTypeScriptでの実装が難しかったためHeadlessCMSのAPIを使いました。</p>
        Next.jsの場合CMS APIファイルを作りgetStaticPropsを叩くだけで一覧ページは作ることができます。
        <li>記事詳細</li>
        <p>
          getStaticPathsが登場します。
          <br />
          Pathsを指定することによってダイナミックルーティングとしてブラケット[slug]のような動的に変更されるページを実現します。
        </p>
        <li>ページネーション</li>
        <p>map関数を用いてページの総数を1ページに表示したい数字で割ります。</p>
        <li>ハンバーガーメニューボタン</li>
        <p>useStateを使用します。aria-expandでscssでのtrue/falseでトグルとして発火させます。</p>
        <li>モバイルメニュー展開</li>
        <li>レスポンシブ対応</li>
        <li>ダークモード(ローカルストレージ)</li>
        <li>お問合せ</li>
        <p>nodemailerを使用しました。</p>
        <li>ホバーで伸びるアクティブで止まるボーダー</li>
        <li>発火管理ができる透明なフィルターコンポーネント</li>
        <li>フレームモーションコンポーネント</li>
        <li>ダイナミックOGP(VercelAPIを使用)</li>
        <p>
          Zenn.devやQiitaを使うことも考えたのですがあちらはコード専用な感じな気がしたので
          <br />
          もっというと日常的なことも書きたい日記にしたかったので手作りしました。
          <br />
        </p>
        <p>普段はプログラミング以外はねこと遊んだりもしているので気軽に話しかけたりコンタクト送ってくださいね。</p>
      </main>
    </Freya>
  );
};

export default Thisblog;
