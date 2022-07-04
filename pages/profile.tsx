import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Box } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

const Overview: React.FC = () => {
  return (
    <Framer>
      <OG title="Overview - Sou Watanabe" description="My Overview" />
      <main className="list inblo textLeft">
        <h1>About: [Profile, Overview, Readme]</h1>
        <dl>
          <dt>Name</dt>
          <dd>sou Watanabe/蒼 渡邊</dd>
          <dt>Sign</dt>
          <dd>さそり座</dd>
          <dt>干支</dt>
          <dd>戌</dd>
          <dt>Location</dt>
          <dd>Kokura and Tokyo/小倉と東京</dd>

          <dt>Merci papa mama.</dt>
          <dd>私の生みの親である母と父に感謝します。</dd>
          <img className="PM margin10 point " src="/picture/IMG_0495.jpg" width={190} height={260} />
        </dl>
        <p>渡邊 蒼(Sou Watanabe)と申します。1994年生まれ現27歳です。</p>
        <p>
          RustでAPI作ろうとしています。開発に夢中です。
          <p>趣味でブログ書いています。</p>
        </p>
        <h1>好き(得意とは言っていない)</h1>
        <ul>
          <li>静的型付け</li>
          <li>TypeScript</li>
          <li>Rust</li>
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
        <p>中学と高校時代は学校にあまり行かなかったため社会人経験をした後に少し勉強しました。</p>
        <p>引きこもり不登校, 親の歪んだ愛情などを経験し心理学の本「 自分に気づく心理学 」を読みました。</p>
        <p>デザイン ゲーム WEB開発の分野でならほんの少し詳しいレベルだと思います。</p>
        <h2>体調について</h2>
        <p>20歳の時に統合失調症と診断されました。</p>
        <p></p>
        <p>入院し内服治療にて寛解していて、現在は月に一度予防のため通院しています。</p>
        <p>認定医師より仕事することに関して「いいですよ」と言われています。</p>
        <Box fontSize="16px">
          <a href="https://kokoro-hc.com/schizophrenia" target="_blank" className="scaleLinks">
            「 <FiExternalLink className="Top-2px" />
            統合失調症とは 」
          </a>
        </Box>
        <br />
        <p>薬を飲むと自然と疲れを認識しやすくなります。</p>
        <hr />
        <br />
        <p>Welcome to my home page!! refresh and swich your identitiy.</p>
        <p>let's enjoy the code architect and programing, application contribute.</p>
        <p>I keep in mind simple is the best code and always the better.</p>
        <p>you can always trying the first, see you.</p>
      </main>
    </Framer>
  );
};

export default Overview;
