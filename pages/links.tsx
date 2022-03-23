import OG from "components/Sys/OG";
import Freya from "components/Sys/Framer";
import Link from "next/link";

const Links: React.FC = () => {
  return (
    <Freya>
      <OG title="links - sou" description="リンク" />
      <main className="margin-Mobile-PC">
        <h1>Links</h1>
        <div className="triangle-bottom" />
        <dl>
          <dd>
            <a className="pinkLinks scale" href="https://github.com/opepelab" target="_blank">
              GitHub{" "}
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
              LinkdIn
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://www.pixiv.net/users/10729947" target="_blank">
              Pixiv
            </a>
          </dd>
          <dd>
            <a
              className="pinkLinks scale"
              href="https://www.amazon.jp/hz/wishlist/ls/21U6KMZ0YZN25?ref_=wl_share"
              target="_blank"
            >
              Amazon
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://com.nicovideo.jp/community/co1568349" target="_blank">
              Streem
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://www.deepl.com/translator" target="_blank">
              DeepL
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://translate.google.co.jp/" target="_blank">
              Google翻訳
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://opepelab.org/" target="_blank">
              WordPress Blog
            </a>
          </dd>
          <dd>
            <a className="pinkLinks scale" href="https://chofu-koyado.vercel.app" target="_blank">
              ちょうふのこやど
            </a>
          </dd>
          <Link href="/special">
            <a className="scale pinkLinks">Special Thanks</a>
          </Link>
        </dl>
      </main>
    </Freya>
  );
};

export default Links;
export { getServerSideProps } from "components/Sys/chakra";
