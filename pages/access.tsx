import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Home.module.css';

export default function Access() {
  return (
    <div>
      <Head>
        <title>Access - S.watana</title>
      </Head>
      <main>
      <Link href="https://com.nicovideo.jp/community/co1568349">
        <a target="_blank">niconico</a>
      </Link>
      <br />
      <Link href="https://www.facebook.com/opepelab/">  
        <a target="_blank">Facebook</a>
      </Link>
      <br />
      <Link href="https://note.com/opepelab/">  
        <a target="_blank">note</a>
      </Link>
      </main>
    </div>
  )
}