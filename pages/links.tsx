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
        <div className="margin16">
          <a className="pinkLinks" href="https://github.com/opepelab" target="_blank">
            GitHub 
          </a>
        </div>
        <div className="margin16">
          <a className="pinkLinks" href="https://opepelab.org/" target="_blank">
            WordPress(Blog)
          </a>
        </div>
        <div className="margin16">
          <a className="pinkLinks" href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
            LinkdIn
          </a>
        </div>
        <div className="margin16">
          <a className="pinkLinks" href="https://www.pixiv.net/users/10729947" target="_blank">
            pixiv
          </a>
        </div>
        <div className="margin16">
          <a className="pinkLinks" href="https://com.nicovideo.jp/community/co1568349" target="_blank">
            Live
          </a>
        </div>
      </main>
    </div>
  );
}

export default Links;