import Head from 'next/head'

const Links = () => {
  return (
    <div className="inblo">
      <Head>
        <title>links - sou</title>
        <meta name="description" content="リンク"/>
      </Head>
      <main>
        <h1>Links</h1>
        <dd className="triangle-bottom" />
        <dl>
          <dd>
            <a className="redLinks" href="https://github.com/opepelab" target="_blank">
            GitHub 
            </a>
          </dd>
          <dd>
            <a className="redLinks" href="https://opepelab.org/" target="_blank">
            WordPress(Blog)
            </a>
          </dd>
          <dd>
            <a className="redLinks" href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
            LinkdIn
            </a>
          </dd>
          <dd>
            <a className="redLinks" href="https://www.pixiv.net/users/10729947" target="_blank">
            pixiv
            </a>
          </dd>
          <dd>
            <a className="redLinks" href="https://com.nicovideo.jp/community/co1568349" target="_blank">
            Live
            </a>
          </dd>
        </dl>
      </main>
    </div>
  );
}

export default Links;