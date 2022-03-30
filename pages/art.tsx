import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";

const Picture: React.FC = () => {
  return (
    <Freya>
      <OG title="Art - Sou Watanabe" description="My Arts" />
      <main className="inblo">
        <h1>Art</h1>
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

        <h1>Design</h1>
        <div className="triangle-bottom" />

        <div>
          <a href="#03">
            <img className="PM margin10 point " src="/picture/315.jpg" width={255} height={191} />
          </a>
          <a id="03" href="#close" className="lb">
            <img className="PM" src="/picture/315.jpg" width={255} height={191} />
          </a>
        </div>
        <dl>
          <dt>Tablet</dt>
          <dd>Cintiq Pro</dd>
          <dt>Software</dt>
          <dd>Photosohp. SAI2. CLIPSTUDIO</dd>
          <dt>Display</dt>
          <dd>ColorEdge CS2410</dd>
          <dt>CPU</dt>
          <dd>i7</dd>
          <dt>RAM</dt>
          <dd>16GB</dd>
        </dl>
      </main>
    </Freya>
  );
};

export default Picture;
