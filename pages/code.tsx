import Head from 'next/head'


const Architects = () => {
  return (
    <div className="inblo">
      <Head>
        <title>ネタのページ Watanabe S.</title>
        <meta name="description" content="私の習得ルート"/>
      </Head>
      <h2>HIDE PAGE</h2>
      <div className="triangle-bottom" />
      <main>
      <h2>「マシン命名アイドル消費電力多いRyzen」</h2>
      <p>MotherBoard : Intel<br />
      Solid State Drive : M.2 2280 NVMe Gen5x4 <br />
      Random Access Memory : DDR5 12,600MHz 128GBx4<br />
      Central Processing Unit : Intel</p>
      <h2>Design</h2>
          <dt>Tablet</dt>
          <dd>Cintiq Pro, Intuos SL</dd>
          <dt>Software</dt>
          <dd>Photosohp, SAI2, CLIPSTUDIO</dd>
          <dt>Display</dt>
          <dd>ColorEdge CS2410</dd>
      </main>
    </div>
  );
}




export default Architects;