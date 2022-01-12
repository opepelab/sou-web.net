import { motion } from "framer-motion";
import Head from "next/head";

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>sou-web</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="list margin50p textLeft inblo">
        <h1>About</h1>
        <h5>scientist Number11</h5>
        <p>渡邊 蒼(Sou Watanabe)のプロフィールです。</p>
        <br />
        <p>私の趣味は検証することです。</p>
        <p>直接的な討論は好きではありません。</p>
        <p>出身住まい：日本 東京</p>
        <p>生年：1994年生まれ 戌年</p>
        <p>趣味：読書やゲームなど </p>
        <br />
        <p>NPOのWEB制作/WEBアプリケーション開発を手掛けています。</p>
        <p>ブログを書くのが得意です。</p>
        <p>このサイトのソースコードはMITライセンスです。</p>
        <h1>経歴</h1>
        <li>1994年 福岡県北九州市生まれ</li>
        <li>2014年 アメリカ シアトル カナダに行きました</li>
        <li>2015年 統合失調症診断で強制入院しました</li>
        <li>2016年 株式会社 PC DEPOT入社</li>
        <li>2017年 株式会社 PC DEPOT退社</li>
        <li>2018年 高等学校卒業程度認定試験合格</li>
        <li>2019年 デザインの勉強を独学で始めました</li>
        <li>2020年 イラストで仕事し始めました</li>
        <li>2021年 TypeScriptを書き始めました</li>
        <li>2022年 NPOのチームメンバーと働き始めました</li>
        <p>海外に行った経験や引きこもりになった経験や病気で入院した経験があります。</p>
        <p>中学と高校で受けた家族のネグレクトにより育つ環境居場所がありませんでした</p>
        <p>多忙により統合失調症の認定をもらっていて認知症気味です。</p>
        <p>引きこもり不登校, 親の歪んだ愛情なを経験, 勉強したことがあり知見があります。</p>
        <h1>精神疾患</h1>
        <h2>完全記憶性障害</h2>
        <p>詳しい病名が現代医学では解明されていませんが物心ついた時から忘れたいのに記憶に残り続けてしまう疾患をしていました</p>
        <h2>アルツハイマー</h2>
        <p>中学で受けた虐めと家庭のネグレクト環境により強いPTSDになり軽い認知症を患いました</p>
        <p>完全に忘れるという感じではなく記憶が徐々に薄れて行く感覚です</p>
        <h2>統合失調症</h2>
        <p>八ヶ岳旅行中に遭難し強制入院した時に認定されました</p>
        <p>幻覚が見えたことにされていますが今でもハッキリと覚えています</p>
        <p>この病気はとくに解明されてないですが国家医師より認定を受けています</p>
        {/* <h2>2022年</h2>
        <p>社会福祉協議会やNPOに関係するWEB制作や中間を取り持つプロジェクトマネージャーをしています。</p> */}
        <h1>English</h1>
        <p>I think always the better.</p>
        <p>I frail&sick.</p>
        <p>beautiful&pretty, simple isCoding</p>
        <p>Because never mind? why is it there don't talking?</p>
        <p></p>
        <p>Challenging change the everytime The goal is to sleep like dead every day.</p>
      </main>
    </motion.div>
  );
};

export default About;
