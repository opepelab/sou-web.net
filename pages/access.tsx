import Head from 'next/head'

const Access: React.FC = () => {
  return (
    <div>
      <Head>
        <title>links - sou</title>
        <meta name="description" content="アクセス"/>
      </Head>
      <h2>LINKS</h2>
      <div className="triangle-bottom" />
      <main>
        <a href="https://opepelab.org/" target="_blank">
          <li><p>WordPress</p></li>
        </a>
        <br />
        <a href="https://www.facebook.com/opepelab/" target="_blank">
          <li><p>Facebook</p></li>
        </a>
        <br />
        <a href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
          <li><p>LinkdIn</p></li>
        </a>
          <br />
        <a href="https://qiita.com/S_watana" target="_blank">
          <li><p>Qiita</p></li>
        </a>
        <br />
        <a href="https://www.pixiv.net/users/10729947" target="_blank">
          <li><p>pixiv</p></li>
        </a>
        <br />
        <a href="https://com.nicovideo.jp/community/co1568349" target="_blank">
          <li><p>niconico</p></li>
        </a>
      </main>
    </div>
  );
}

export default Access;