import Head from 'next/head'


const Service: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Service - S.watana</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <h2>SERVICE</h2>
      <div className="triangle-bottom" />
      <main>
      <a href="https://github.com/opepelab/C-x9/blob/main/C-x9.c" target="_blank">入力に9掛けて9個出力(C言語)</a><br />
        <a href="https://ssgnux-snowy.vercel.app/" target="_blank">Nuxt.js Static Site</a>
      </main>
    </div>
  );
}

export default Service;