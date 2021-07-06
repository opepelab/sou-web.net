import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Home.module.css';


export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Active Log - S.watana</title>
        <meta name="description" content="アクティブなコード"/>
      </Head>
      <main>
        <Link href="https://github.com/opepelab/C-x9/blob/main/C-x9.c">
          <a>入力に9掛けて9個出力(C言語)</a>
        </Link>  
      </main>
    </div>
  )
}