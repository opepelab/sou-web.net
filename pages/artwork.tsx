import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';

const Picture: React.FC = () => {
  return (
    <Framer>
      <OG title="Art - Sou Watanabe" description="My Arts" />
      <main className="inblo">
        <div>
          <a href="#01">
            <img className="PM margin10 point" src="/picture/otoko.png" width={255} height={403} />
          </a>
          <a id="01" href="#close" className="lb">
            <img className="PM" src="/picture/otoko.png" width={255} height={403} />
          </a>
        </div>

        <div>
          <a href="#02">
            <img className="PM margin10 point" src="/picture/haruka.png" width={255} height={360} />
          </a>
          <a id="02" href="#close" className="lb">
            <img className="PM" src="/picture/haruka.png" width={255} height={360} />
          </a>
        </div>
      </main>
    </Framer>
  );
};

export default Picture;
