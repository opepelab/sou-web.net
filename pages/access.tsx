import Head from 'next/head';
import Styles from '../styles/Home.module.css';

export default function Access() {
  return (
    <div>
      <Head>
        <title>Access - S.watana</title>
        <meta name="description" content="アクセス"/>
      </Head>
      <main>
      <a href="https://www.facebook.com/opepelab/" target="_blank">
        Facebook
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