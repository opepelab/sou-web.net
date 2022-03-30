import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";

const Thisblog: React.FC = () => {
  return (
    <Freya>
      <OG title="Thisis - Sou Watanabe" description="This Site is" />
      <main className="textLeft margin-Mobile-PC">
        <h1>What is this blog Read me?</h1>
        <p>Host: Vercel etc..</p>
        <p>CSS: TailWind CSS Sass</p>
        <p>use TypeScript(Lint strict)</p>
        <p>use Node.js React library Nexet.js</p>
        <p>状態管理: Recoil</p>
        <p>CMS: Contentful</p>
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
