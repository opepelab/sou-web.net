import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const About = () => {
  return (
    <Framerdiv>
      <Head>
        <title>Overview</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="list margin50p textLeft inblo">
        <h1>
          Overview <h5>Number11</h5>
        </h1>
        <p>渡邊 蒼(Sou Watanabe)です。1994年生まれ27歳（2022年現在）です。</p>
        <p>NPOでプロジェクトのWEBアプリケーション開発をしています。</p>
        <p>ポジションとしてはフロントエンド開発が一番好きです。</p>
        <p>他にはゲームが得意だったりPhotoshopやデザインが好きです。</p>
        <p></p>
        <h1>好きな言語</h1>
        <ul>
          <li>TypeScript</li>
        </ul>
        <h1>クラン歴</h1>
        <ul>
          <li>不死鳥</li>
        </ul>
        <h1>派閥</h1>
        <ul>
          <li>Windows</li>
          <li>npm</li>
          <li>json</li>
          <li>ANSI</li>
        </ul>
        <h1>経歴</h1>
        <ul>
          <li>1994年 福岡県北九州市生まれ</li>
          <li>2014年 アメリカ シアトル カナダに行きました</li>
          <li>2015年 統合失調症診断になり入院しました</li>
          <li>2016年 株式会社 PC DEPOT入社</li>
          <li>2017年 株式会社 PC DEPOT退社</li>
          <li>2018年 高等学校卒業程度認定試験合格</li>
          <li>2019年 デザインの勉強を独学で始めました</li>
          <li>2020年 イラストで仕事し始めました</li>
          <li>2021年 TypeScriptを書き始めました</li>
          <li>2022年 NPOプロジェクトのメンバーになりました。</li>
        </ul>
        <hr />
        <p>海外に行った時に出会った人によって価値観が覆るような経験がありました。</p>
        <p>中学と高校時代は学校のお世話にならなかったので社会人経験をした後に少し勉強しました。</p>
        <p>多忙すぎるとややアルツハイマー気味になります。</p>
        <p>引きこもり不登校, 親の歪んだ愛情などを経験し心理学の本「 自分に気づく心理学 」を読みました。</p>
        <p>デザイン イラスト ゲーム WEB開発の分野でなら意見できると思います。</p>

        <h1>精神疾患</h1>
        <h2>完全記憶症</h2>
        <p>詳しい病名が現代医学では解明されていませんが物心ついた時から忘れたいのに忘れられない状態でした。</p>
        <p>この特質せいで人生で何度もPTSDになっています。</p>
        <h2>統合失調症</h2>
        <p>八ヶ岳旅行中に遭難し強制入院した時に認定されました。</p>
        <p>幻覚が見えたことにされていますが今でもハッキリと覚えています。</p>
        <p>この病気はとくに解明されてないですが国家医師より認定を受けています。</p>
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
    </Framerdiv>
  );
};

export default About;
