import Head from 'next/head'

const Access: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Link Watanabe S.</title>
        <meta name="description" content="アクセス"/>
      </Head>
      <h2>LINK</h2>
      <div className="triangle-bottom" />
      <main>
        <a className="box" href="https://www.facebook.com/opepelab/" target="_blank">
          <li className="hako2">Facebook</li>
        </a>
        <br />
        <a className="box" href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
          <li className="hako2">LinkdIn</li>
        </a>
          <br />
        <a className="box" href="https://qiita.com/S_watana" target="_blank">
          <li className="hako2">Qiita</li>
        </a>
        <br />
        <a className="box" href="https://www.pixiv.net/users/10729947" target="_blank">
          <li className="hako2">pixiv</li>
        </a>
        <br />
        <a className="box" href="https://com.nicovideo.jp/community/co1568349" target="_blank">
          <li className="hako2">niconico</li>
        </a>
      </main>
    </div>
  );
}

export default Access;