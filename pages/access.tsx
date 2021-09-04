import Head from 'next/head'

const Access: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Access - S.watana</title>
        <meta name="description" content="アクセス"/>
      </Head>
      <h2>ACCESS</h2>
      <div className="triangle-bottom" />
      <main>
      <a href="https://www.facebook.com/opepelab/" target="_blank">
        Facebook
      </a>
      <br />
      <a href="https://www.linkedin.com/in/s-watanabe-a25157205" target="_blank">
        LinkdIn
      </a>
      <br />
      <a href="https://qiita.com/S_watana" target="_blank">
        Qiita
      </a>
      <br />
      <a href="https://opepelab.org/" target="brank">
      WorldPress
      </a>
      <br />
      <a href="https://www.pixiv.net/users/10729947" target="_blank">
        pixiv
      </a>
      <br />
      <a href="https://note.com/opepelab/" target="_blank">  
        note
      </a>
       <br /> 
      <a href="https://com.nicovideo.jp/community/co1568349" target="_blank">
        niconico
      </a>
      </main>
    </div>
  );
}

export default Access;