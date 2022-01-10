import { motion } from "framer-motion";
import Head from "next/head";

const Picture: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>photo - sou</title>
        <meta name="description" content="フォト" />
      </Head>
      <main className="margin50p inblo">
        <h1>Photo</h1>
        <div className="triangle-bottom" />

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
        <dl>
          <div>
            <a href="#01">
              <img className="PM margin10 point " src="/picture/315.jpg" width={255} height={191} />
            </a>
            <a id="01" href="#close" className="lb">
              <img className="PM" src="/picture/315.jpg" width={255} height={191} />
            </a>
          </div>

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

        <img className="PM margin10 point " src="/picture/0068.png" width={190} height={260} />
      </main>
    </motion.div>
  );
};

export default Picture;
