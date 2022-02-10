import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";
import Link from "next/link";

const Privacy: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>プライバシーポリシー - sou</title>
        <meta name="description" content="存在しないページ" />
      </Head>
      <main className="list margin50p textLeft inblo">
        <h1>プライバシーポリシー </h1>
        <br />
        <br />
        <br />
        <h1>このサイトについて</h1>
        <p>JavaScriptが動作しないブラウザ環境では動作が保証されません。</p>
        <p>このサイトはGoogleAnalyticsを使用しています。</p>
        <p>古い端末のOS、解像度、動作をサポートしてない場合があります。</p>
        <h1>クッキー</h1>
        <p>このサイトでは、サイトの分析と改善のためにGoogleが提供している「Google アナリティクス」を利用しています。</p>
        <p>このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。</p>
        <p>トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
        <br />
        <h1>免責事項</h1>
        <p>
          当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。
        </p>
        <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
        <p>
          当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </p>
      </main>
    </Framerdiv>
  );
};

export default Privacy;
