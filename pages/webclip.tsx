import Framer from 'components/Sys/Framer';
import OG from 'components/Sys/OG';

const Webclip: React.FC = () => {
  return (
    <Framer>
      <OG title="Webclip - Sou Watanabe" description="My Web Clip" />
      <main className="Alink list inblo textLeft resizeimage">
        <h1>これだと思った重要なウェブページを公開クリップしています</h1>
        <ul>
          <li>
            <a href="https://engineering.mercari.com/blog/entry/2018-12-12-090156/">
              Chrome DevToolsを用いたメルカリWebのパフォーマンス計測
            </a>
          </li>
          <li>
            <a href="https://nico0927.hatenablog.com/entry/2017/10/31/221613">
              クリエイターとデザイナーとアーティストの違い
            </a>
          </li>
          <p>三つの違いについて絵コンテをもちいて説明されています、当てはまる人は一読の価値があります。</p>
          <li>
            <a href="https://digitalidentity.co.jp/blog/creative/color-psychology.html#i-10">
              色彩と心理の関係-「配色」をブランディングに活かそう！
            </a>
          </li>
          <p>色と心理学の関係を死ぬほど調べていた時期があってその時見つけたページです。</p>
          <p>個人的に何度も訪れる必須のページ。</p>
          <li>
            <a href="https://future-architect.github.io/typescript-guide/version.html">
              使用ライブラリのバージョン管理
            </a>
          </li>
          <li>
            <a href="https://please-sleep.cou929.nu/super-reload-and-cache.html">
              リソースの種類・タイミングとスーパーリロード時のブラウザキャッシュ
            </a>
          </li>
          <li>
            <a href="https://os0x.hatenablog.com/entry/20110617/1308280740">君は3つのリロードを知っているか？</a>
          </li>
        </ul>
      </main>
    </Framer>
  );
};

export default Webclip;
