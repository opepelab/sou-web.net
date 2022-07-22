import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';

const Overview: React.FC = () => {
  return (
    <Framer>
      <OG title="Overview - Sou Watanabe" description="My Overview" />
      <main className="list inblo textLeft resizeimageProf">
        <dl>
          <dt>Name</dt>
          <dd>Sou Watanabe/蒼 渡邊</dd>
          <dt>Sign</dt>
          <dd>さそり座</dd>
          <dt>干支</dt>
          <dd>戌</dd>
          <dt>Location</dt>
          <dd>Kokura and Tokyo/小倉と東京</dd>
          <dt>Merci papa mama.</dt>
          <dd>私の生みの親である母と父に感謝します。</dd>
          <img src="/picture/IMG_0503.jpeg" width={190} height={260} />
        </dl>
        <p>渡邊 蒼(Sou Watanabe)1994年生まれ現27歳。</p>
        <p>動かしたり勉強したり実装したりする範囲です。</p>
        <p>
          実務というよりは個人プロダクトを持っていてNPOのページを手伝ったり身内から業務委託依頼をされ手伝ったりした経験はあります。
        </p>
        <h1>好き</h1>
        <ul>
          <li>TypeScript</li>
          <li>Rust(習得中)</li>
          <li>Java文法(習得中)</li>
        </ul>
        <h1>派閥</h1>
        <ul>
          <li>
            <u>npm</u> : yarn
          </li>
          <li>
            <u>JSON</u> : yaml
          </li>
          <li>
            <u>ANSI</u> : <s>JIS</s>
          </li>
        </ul>
        <h1>経歴</h1>
        <ul>
          <li>1994年 福岡県北九州市生まれ</li>
          <li>2014年 アメリカ シアトル カナダに行きました</li>
          <li>2016年 株式会社 PC DEPOT入社</li>
          <li>2017年 株式会社 PC DEPOT退社</li>
          <li>2018年 高等学校卒業程度認定試験合格</li>
          <li>2019年 デザインの勉強を独学で始めました</li>
          <li>2020年 イラストで仕事し始めました</li>
          <li>2021年 プログラミング言語を勉強し始めTypeScriptを書き始めました</li>
        </ul>
        <hr />
        <p>Welcome to my home page!! refresh and swich your identitiy.</p>
        <p>let's enjoy the code architect and programing, application contribute.</p>
        <p>I keep in mind simple is the best code and always the better.</p>
        <p>you can always trying the first, see you.</p>
        <video controls width="800">
          <source src="/media/mail.mp4" type="video/mp4" />
        </video>
      </main>
    </Framer>
  );
};

export default Overview;
