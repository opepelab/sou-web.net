import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Text, Heading, Box } from '@chakra-ui/react';

const Thisblog: React.FC = () => {
  return (
    <Framer>
      <OG title="Thisis - Sou Watanabe" description="This Site is" />
      <main className="inblo textLeft">
        <Heading mb="80">このブログの技術スタック</Heading>
        <br />
        <h2>フロントエンド</h2>
        <p>
          Next.jsを採用しました。 <br />
          JavaScriptライブラリであるReactのフレームワークということもありGitHubのスターやコントリビューターの数で選びました。
          Hooksや状態管理ライブラリ, TypeScriptとの親和性を重視しました。
        </p>
        <h2>バックエンド</h2>
        <p>HeadlessCMSのContentfulAPIを使いました。</p>
        <p>
          フリー枠で膨大なコンテンツを発行できるため選定にいたりました。
          <br />
          別のプロダクトではJSONのRESTful APIを立てて翻訳機能を使っています。
        </p>
        <h2>インフラ</h2>
        <p>AWSと比較してGCP Cloud Runを使用しました。</p>
        <p>
          CI/にCloud Buildを使用でき、無料枠で十分なリクエストに耐えることができます。
          <br />
          選定理由はドメインのレジストリにGoogle Domainsを使うことが自然だったためデプロイもGCPになるのは自然でした。
        </p>

        <hr />

        <br />
        <h2>このブログの方針</h2>
        <p>
          Zenn.devなどよりももっと気軽にエラーのメモを作るために使っています。
          <br />
          日常的なことやマーケターとしてのことも書いていきます。
        </p>
        <p>普段はプログラミング以外はねこと戯れたりしているので気軽に話しかけたりコンタクト送ってください</p>
      </main>
    </Framer>
  );
};

export default Thisblog;
