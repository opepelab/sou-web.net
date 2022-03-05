import OG from "components/OG";
import Framerdiv from "components/Sys/Framer";

const Privacy: React.FC = () => {
  return (
    <Framerdiv>
      <OG title="Privacy Policy - sou" description="プライバシーポリシー" />
      <main className="margin50p textLeft">
        <h1>
          <ruby>
            Privacy Policy<rt>プライバシーポリシー</rt>
          </ruby>
        </h1>

        <h2>このサイトについて</h2>
        <p>このサイトはGoogleAnalyticsを使用しています。</p>
        <p>JavaScriptが実行できないブラウザ環境では正常に動作しない場合があります。</p>
        <p>古い端末のOS、解像度、コンピュータでの動作をサポートしてないことを明示します。</p>
        <h2>クッキー</h2>
        <p>このサイトでは、サイトの分析と改善のためにGoogleが提供している「Google アナリティクス」を利用しています。</p>
        <p>このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。</p>
        <p>アクセス解析を拒否したい場合ブラウザの設定によりCookieを無効にすることが出来ます。</p>
        <p>トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
        <br />
      </main>
    </Framerdiv>
  );
};

export default Privacy;
