import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";

const Resume: React.FC = () => {
  return (
    <Freya>
      <OG title="Resume - Sou Watanabe" description="My Resume" />
      <main className="list margin-Mobile-PC textLeft inblo">
        <h1>Resume</h1>
        <p>渡邊 蒼(Sou Watanabe)です。1994年生まれ27歳（2022年現在）です。</p>
        <p>普段はアプリケーションを開発しています。</p>
        <p>個人開発はモバイルアプリケーション開発です。</p>
        <p>他には基本的にゲームは得意です。</p>
        <h1>好きな言語(得意とは言っていない)</h1>
        <ul>
          <li>TypeScript</li>
          <li>Golang</li>
          <li>Dart</li>
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
        </ul>
        <hr />
        <p>海外に行った時に出会った人によって価値観が覆るような経験がありました。</p>
        <p>中学と高校時代は学校のお世話にならなかったので社会人経験をした後に少し勉強しました。</p>
        <p>多忙すぎるとややアルツハイマー気味になります。</p>
        <p>引きこもり不登校, 親の歪んだ愛情などを経験し心理学の本「 自分に気づく心理学 」を読みました。</p>
        <p>デザイン イラスト ゲーム WEB開発の分野でなら意見できると思います。</p>

        <h1>精神疾患</h1>
        <h2>強記憶症</h2>
        <p>物心ついた時からいじめられたトラウマが忘れたいのに忘れられない状態でした。</p>
        <p>この特質でPTSD気味でした。</p>
        <h2>統合失調症</h2>
        <p>八ヶ岳旅行中に遭難し強制入院した時に認定されました。</p>
        <p>幻覚が見えたことにされていますが今でもハッキリと覚えていますし認めていません。</p>
        <p>国家医師より認定を受けています。</p>
        <hr />
        <br />
        <p>Welcome to my home page, refresh and swich your identitiy.</p>
        <p>Let's enjoy the code architect and programing! I'm going OSS mobile application contribution.</p>
        <p>I think always the better.</p>
        <p>beautiful and pretty, simple is coding</p>
        <p>Because never mind? why is it there don't talking,</p>
        <p></p>
        <p>Challenging change the everytime The goal is to sleep like dead every day.</p>
      </main>
    </Freya>
  );
};

export default Resume;
