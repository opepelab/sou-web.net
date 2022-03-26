import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";

const About: React.FC = () => {
  return (
    <Freya>
      <OG title="Profile - Sou Watanabe" description="My Profile" />
      <main className="margin-Mobile-PC inblo">
        <h1>Profile</h1>
        <dl>
          <dt>Name</dt>
          <dd>sou Watanabe/蒼 渡邊</dd>
          <dt>Sign</dt>
          <dd>Scorpio/さそり座</dd>
          <dt>Type</dt>
          <dd>INTJ/コンセプチュアリプランナー</dd>
          <dt>Eto</dt>
          <dd>Dog/犬</dd>
          <dt>Location</dt>
          <dd>Kokura and Tokyo/小倉と東京</dd>
          <img className="PM margin10 point " src="/picture/0068.png" width={190} height={260} />
          <dt>Merci papa mama.</dt>
          <dd>私を作ってくれた生んでくれた母と父に感謝しています。</dd>
        </dl>
      </main>
    </Freya>
  );
};

export default About;
