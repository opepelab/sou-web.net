import OG from "components/Sys/OG";
import Framer from "components/Sys/Framer";

const About: React.FC = () => {
  return (
    <Framer>
      <OG title="Profile - Sou Watanabe" description="My Profile" />
      <main className="inblo">
        <h1>Profile</h1>
        <dl>
          <dt>Name</dt>
          <dd>sou Watanabe/蒼 渡邊</dd>
          <dt>Sign</dt>
          <dd>Scorpio/さそり座</dd>
          <dt>Type</dt>
          <dd>INTJ/コンセプチュアリプランナー</dd>
          <dt>干支</dt>
          <dd>戌</dd>
          <dt>Location</dt>
          <dd>Kokura and Tokyo/小倉と東京</dd>
          <img className="PM margin10 point " src="/picture/IMG_0495.jpg" width={190} height={260} />
          <dt>Merci papa mama.</dt>
          <dd>私を作ってくれた生んでくれた母と父に感謝しています。</dd>
        </dl>
      </main>
    </Framer>
  );
};

export default About;
