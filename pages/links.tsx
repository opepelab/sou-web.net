import Head from 'next/head'

const Links: React.FC = () => {
  return (
    <div className="inblo">
      <Head>
        <title>links - sou</title>
        <meta name="description" content="リンク"/>
      </Head>
      <main>
      <h1>Links</h1>
      <div className="triangle-bottom" />
          <a className="pinkLinks" href="https://github.com/opepelab" target="_blank">
            <p>GitHub</p>
          </a>
          <a className="pinkLinks" href="https://opepelab.org/" target="_blank">
            <p>WordPress(Blog)</p>
          </a>
          <a className="pinkLinks" href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
            <p>LinkdIn</p>
          </a>
          <a className="pinkLinks" href="https://www.pixiv.net/users/10729947" target="_blank">
            <p>pixiv</p>
          </a>
          <a className="pinkLinks" href="https://com.nicovideo.jp/community/co1568349" target="_blank">
            <p>Live</p>
          </a>
      </main>
    </div>
  );
}

export default Links;