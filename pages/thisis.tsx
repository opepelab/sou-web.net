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
        まず、マークダウンにも挑戦しましたがTypeScriptAPIを使いました。
        <li>記事詳細</li>
        <li>ページネーション</li>
        <li>ハンバーガーメニューボタン</li>
        <li>モバイルメニュー展開</li>
        <li>レスポンシブ対応</li>
        <li>ダークモード(ローカルストレージ)</li>
        <li>お問合せ</li>
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
